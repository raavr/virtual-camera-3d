'use strict';
import './app.style.scss';
import { ScenesObjects } from './scenes-objects';
import { POINTS_3D } from './consts';
import { Scene } from './scene';

export default function init() {
    let objs = new ScenesObjects(POINTS_3D);
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let scene = new Scene(objs, canvas);
    scene.make2DProjecton();
    scene.paint();
}