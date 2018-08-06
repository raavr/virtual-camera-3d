'use strict';
import './app.style.scss';
import { ScenesObjects } from './scenes-objects';
import { POINTS_3D, AXIS, ZOOM } from './consts';
import { Scene } from './scene';
import { Transformation } from './scenes-transformation';
import { initialValues } from './options';
import { PaintersAlgorithm } from './painters-algorithm';
import {
  debounce,
  isNumeric,
  getAxis,
  getSignedRotationValue,
  getSignedTranslationValue,
  getZoomSign,
  updateInitialValue
} from './utils';

export class App {

  constructor() {
    const objs = new ScenesObjects(POINTS_3D);
    this.alg = new PaintersAlgorithm(objs);
    this.transformation = new Transformation(objs);
    this.canvas = document.querySelector("canvas");
    this.scene = new Scene(objs, this.canvas);
  }

  setCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setInputsValues() {
    document.querySelector("#translate-value").value = initialValues.translate;
    document.querySelector("#rotate-value").value = initialValues.rotate;
    document.querySelector("#zoom-value").value = initialValues.zoom;
  }

  bindKeyboardKeys() {
    document.addEventListener("keydown", (ev) => {
      if (ev.target.classList.contains("transformation-value")) {
        return;
      }

      switch (ev.keyCode) {
        case 37: //left
          this.transformation.rotate(AXIS.Y, initialValues.rotate);
          break;
        case 38: //up
          this.transformation.rotate(AXIS.X, -initialValues.rotate);
          break;
        case 39: //right
          this.transformation.rotate(AXIS.Y, -initialValues.rotate);
          break;
        case 40: //down
          this.transformation.rotate(AXIS.X, initialValues.rotate);
          break;
        case 86: //v
          this.transformation.rotate(AXIS.Z, -initialValues.rotate);
          break;
        case 67: //c           
          this.transformation.rotate(AXIS.Z, initialValues.rotate);
          break;
        case 81: //q
          this.transformation.translate(AXIS.Y, -initialValues.translate);
          break;
        case 69: //e
          this.transformation.translate(AXIS.Y, initialValues.translate);
          break;
        case 87: //w
          this.transformation.translate(AXIS.Z, -initialValues.translate);
          break;
        case 83: //s
          this.transformation.translate(AXIS.Z, initialValues.translate);
          break;
        case 65: //a
          this.transformation.translate(AXIS.X, initialValues.translate);
          break;
        case 68: //d
          this.transformation.translate(AXIS.X, -initialValues.translate);
          break;
        case 109: //-
          this.transformation.zoom(ZOOM.OUT, initialValues.zoom);
          break;
        case 107: //+
          this.transformation.zoom(ZOOM.IN, initialValues.zoom);
          break;
      }

      this.run();

    }, false);
  }

  bindInputs() {
    const inputs = document.querySelectorAll(".transformation-value");
    const toggleError = (elem, isNumericValue) => {
      const errorEl = elem.parentNode.querySelector('.error');
      errorEl.style.display = isNumericValue ? "none" : "block";
    };

    const validateInput = (ev) => {
      const elem = ev.target;
      const isNumericValue = isNumeric(elem.value);

      if (isNumericValue) {
        updateInitialValue(elem.id, +elem.value);
      }

      toggleError(elem, isNumericValue);
    };

    Array.from(inputs).forEach((input) => {
      input.addEventListener("keyup", debounce(validateInput, 350), false);
    });
  }


  onVirtualKeyClick(elem) {
    const domAction = elem.getAttribute("data-action").split("-");
    const action = domAction[0];
    const sign = domAction[1];
    const axis = domAction[2];

    switch (action) {
      case "rotate":
        this.transformation.rotate(getAxis(axis), getSignedRotationValue(sign));
        break;
      case "translate":
        this.transformation.translate(getAxis(axis), getSignedTranslationValue(sign));
        break;
      case "zoom":
        this.transformation.zoom(getZoomSign(sign), initialValues.zoom);
        break;
    }

    this.run();
  }

  onMinmaxBtnClick(elem) {
    const content = elem.nextElementSibling;
    const isShowed = elem.textContent === "-";
    if (isShowed) {
      content.style.display = "none";
      elem.textContent = "+";
    } else {
      content.style.display = "block";
      elem.textContent = "-";
    }
  }

  bindViewControls() {
    const onControlElemClick = (ev) => {
      const elem = ev.target;
      if (elem.classList.contains("control-item")) {
        this.onVirtualKeyClick(elem);
      } else if (elem.classList.contains("minimize-btn")) {
        this.onMinmaxBtnClick(elem);
      }
    }

    document.addEventListener("click", onControlElemClick, false);
  }

  bindEvents() {
    this.bindKeyboardKeys();
    this.bindViewControls();
    this.bindResize();
    this.bindInputs();
  }

  bindResize() {
    const resize = () => {
      this.setCanvas();
      this.run();
    };

    window.addEventListener("resize", debounce(resize, 250));
  }

  run() {
    this.alg.compute();
    this.scene.make2DProjection();
    this.scene.paint();
  }

  init() {
    this.setCanvas();
    this.setInputsValues();
    this.bindEvents();
    this.run();
  }
}