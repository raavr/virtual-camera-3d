import { TransformationMatrix } from './transformation-matrix';
import { FocalLength, AXIS } from './consts';

export class Transformation {

    constructor(scenesObjects) {
        this.scenesObjects = scenesObjects;
        this.matrix = new TransformationMatrix();
    }

    multiplyMatrixByVector(matrix, vector) {
        let finalVector = [0,0,0,0];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                finalVector[i] += matrix[i][j] * vector[j];
            }
        }
        
        return finalVector;
    }

    createVector(point3D) {
        return [point3D.x, point3D.y, point3D.z, 1.0];
    }

    updatePoint(point3D, vector) {
        point3D.x = vector[0];
        point3D.y = vector[1];
        point3D.z = vector[2];
    }

    updateTriangles(matrix) {
        this.scenesObjects.triangles3D.forEach((triangle) => {     
            let finalVector = this.multiplyMatrixByVector(matrix, this.createVector(triangle.a));
            this.updatePoint(triangle.a, finalVector);
            
            finalVector = this.multiplyMatrixByVector(matrix, this.createVector(triangle.b));
            this.updatePoint(triangle.b, finalVector);

            finalVector = this.multiplyMatrixByVector(matrix, this.createVector(triangle.c));
            this.updatePoint(triangle.c, finalVector);
        })
    }

    rotate(axis, value) {
        let matrix;
        
        switch(axis) {
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
        switch(axis) {
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

}