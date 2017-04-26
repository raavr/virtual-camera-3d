'use strict';
import './app.style.scss';
import { ScenesObjects } from './scenes-objects';
import { POINTS_3D, AXIS } from './consts';
import { Scene } from './scene';
import { Transformation } from './scenes-transformation';
import { translateValue } from './options';
import { PaintersAlgorithm } from './painters-algorithm';

export default function init() {
    let objs = new ScenesObjects(POINTS_3D);
    let alg = new PaintersAlgorithm(objs);
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let scene = new Scene(objs, canvas);
    alg.compute();
    scene.make2DProjecton();
    scene.paint();

    let transformation = new Transformation(objs);
    setTimeout(() => { 
        transformation.translate(AXIS.Z, -translateValue);
        alg.compute();
        scene.make2DProjecton();
        scene.paint(); 
    }, 2000);
}