import { TransformationMatrix } from './transformation-matrix';
import { AXIS, ZOOM } from './consts';
import { focalLength } from './options';
import { multiplyMatrixByVector, createVector } from './utils';

export class Transformation {

    constructor(scenesObjects) {
        this.scenesObjects = scenesObjects;
        this.matrix = new TransformationMatrix();
    }

    updateTriangles(matrix) {
        this.scenesObjects.triangles3D.forEach((triangle) => {
            let finalVector = multiplyMatrixByVector(matrix, createVector(triangle.a));
            triangle.a.updatePoint(finalVector);

            finalVector = multiplyMatrixByVector(matrix, createVector(triangle.b));
            triangle.b.updatePoint(finalVector);

            finalVector = multiplyMatrixByVector(matrix, createVector(triangle.c));
            triangle.c.updatePoint(finalVector);
        })
    }

    rotate(axis, value) {
        let matrix;

        switch (axis) {
            case AXIS.X:
                matrix = this.matrix.getRotXMatrix(value);
                this.updateTriangles(matrix);
                break;
            case AXIS.Y:
                matrix = this.matrix.getRotYMatrix(value);
                this.updateTriangles(matrix);
                break;
            case AXIS.Z:
                matrix = this.matrix.getRotZMatrix(value);
                this.updateTriangles(matrix);
                break;

        }
    }

    translate(axis, value) {
        let matrix;
        switch (axis) {
            case AXIS.X:
                matrix = this.matrix.getTransMatrix(value, 0, 0);
                this.updateTriangles(matrix);
                break;
            case AXIS.Y:
                matrix = this.matrix.getTransMatrix(0, value, 0);
                this.updateTriangles(matrix);
                break;
            case AXIS.Z:
                matrix = this.matrix.getTransMatrix(0, 0, value);
                this.updateTriangles(matrix);
                break;
        }
    }

    zoom(sign, value) {
        switch (sign) {
            case ZOOM.IN:
                focalLength.value += value;
                focalLength.zoomOut = true;
                break;
            case ZOOM.OUT:
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