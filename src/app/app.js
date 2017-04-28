'use strict';
import './app.style.scss';
import { ScenesObjects } from './scenes-objects';
import { POINTS_3D, AXIS } from './consts';
import { Scene } from './scene';
import { Transformation } from './scenes-transformation';
import { values } from './options';
import { PaintersAlgorithm } from './painters-algorithm';
import { debounce, isNumeric } from './utils';

export class App {

    constructor() {
        let objs = new ScenesObjects(POINTS_3D);

        this.alg = new PaintersAlgorithm(objs);
        this.transformation = new Transformation(objs);
        this.canvas = document.querySelector("canvas");
        this.scene = new Scene(objs, this.canvas);
    }

    bindKeys() {
        document.addEventListener("keydown", (ev) => {
            if(ev.target.classList.contains("transformation-value")) {
                return;
            }

            switch(ev.keyCode) {
                case 37: //left
                    this.transformation.rotate(AXIS.Y, values.rotate);
                    break;
                case 38: //up
                    this.transformation.rotate(AXIS.X, -values.rotate);
                    break;
                case 39: //right
                    this.transformation.rotate(AXIS.Y, -values.rotate);
                    break;
                case 40: //down
                    this.transformation.rotate(AXIS.X, values.rotate);
                    break;
                case 86: //v
                    this.transformation.rotate(AXIS.Z, -values.rotate);
                    break;            
                case 67: //c           
                    this.transformation.rotate(AXIS.Z, values.rotate);
                    break;
                case 81: //q
                    this.transformation.translate(AXIS.Y, -values.translate);
                    break;                 
                case 69: //e
                    this.transformation.translate(AXIS.Y, values.translate);
                    break;
                case 87: //w
                    this.transformation.translate(AXIS.Z, -values.translate);
                    break;
                case 83: //s
                    this.transformation.translate(AXIS.Z, values.translate);
                    break;              
                case 65: //a
                    this.transformation.translate(AXIS.X, values.translate);
                    break;
                case 68: //d
                    this.transformation.translate(AXIS.X, -values.translate);
                    break;
            }
            this.run();

        }, false);
    }

    bindInputs() {
        let inputs = document.querySelectorAll(".transformation-value"),
            validateInput = (ev) => {

                let elem = ev.target,
                    toggleError = () => {
                        let errorEl = elem.parentNode.children[2];
                        errorEl.style.display = isNumeric(elem.value) ? "none" : "block";
                    };
                
                if(isNumeric(elem.value)) {
                    this.updateValues(elem.id, +elem.value);
                }

                toggleError();
            };

        [].forEach.call(inputs, (input) => { 
            input.addEventListener("keyup", validateInput, false); 
        });
    }

    updateValues(idElem, value) {
        switch(idElem) {
            case "translate-value":
                values.translate = value;
                break;
            case "rotate-value":
                values.rotate = value;
                break;
        }
    }

    setCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        this.bindKeys();
        this.bindResize();
        this.bindInputs();
    } 

    bindResize() {

        let resize = () => {
            this.setCanvas();
            this.run();
        };

        window.addEventListener("resize", debounce(resize, 250));

    }

    setInputsValues() {
        document.querySelector("#translate-value").value = values.translate;
        document.querySelector("#rotate-value").value = values.rotate;
    }

    init() {
        this.setCanvas();
        this.setInputsValues();
        this.bindEvents();
        this.run();    
    }

    run() {
        this.alg.compute();
        this.scene.make2DProjecton();
        this.scene.paint();
    }
}