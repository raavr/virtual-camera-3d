import { TransformationMatrix } from './transformation-matrix';
import { AXIS, ZOOM } from './consts';
import { focalLength } from './options';
import { multiplyMatrixByVector, createVector } from './utils';

export class Transformation {

    constructor(scenesObjects) {
        this.scenesObjects = scenesObjects;
    }

    updateTriangles(matrix) {
        this.scenesObjects.triangles3D.forEach((triangle) => {
            Object.keys(triangle).forEach((point) => {
                const finalVector = multiplyMatrixByVector(matrix, createVector(triangle[point]));
                triangle[point].updatePoint(finalVector);
            });
        })
    }

    rotate(axis, value) {
        let matrix;
        switch (axis) {
            case AXIS.X:
                matrix = TransformationMatrix.getRotXMatrix(value);
                break;
            case AXIS.Y:
                matrix = TransformationMatrix.getRotYMatrix(value);
                break;
            case AXIS.Z:
                matrix = TransformationMatrix.getRotZMatrix(value);
                break;
        }

        this.updateTriangles(matrix);
    }

    translate(axis, value) {
        let matrix;
        switch (axis) {
            case AXIS.X:
                matrix = TransformationMatrix.getTransMatrix(value, 0, 0);
                break;
            case AXIS.Y:
                matrix = TransformationMatrix.getTransMatrix(0, value, 0);
                break;
            case AXIS.Z:
                matrix = TransformationMatrix.getTransMatrix(0, 0, value);
                break;
        }

        this.updateTriangles(matrix);
    }

    zoom(sign, value) {
        switch (sign) {
            case ZOOM.IN: {
                focalLength.value += value;
                focalLength.zoomOut = true;
                break;
            }
            case ZOOM.OUT: {
                const tmpFocalLength = focalLength.value - value;
                if (tmpFocalLength < 0) {
                    focalLength.zoomOut = false;
                } else {
                    focalLength.value = tmpFocalLength;
                }
                break;
            }
        }
    }
}