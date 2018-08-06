import { makeBaseMatrix } from './utils';

//http://www.cs.cornell.edu/courses/cs4620/2010fa/lectures/03transforms3d.pdf
export class TransformationMatrix {

  static getTransMatrix(x, y, z) {
    const matrixTrans = makeBaseMatrix();

    matrixTrans[0][3] = x;
    matrixTrans[1][3] = y;
    matrixTrans[2][3] = z;

    return matrixTrans;
  }

  static getRotXMatrix(alpha) {
    const matrixRotX = makeBaseMatrix();

    matrixRotX[1][1] = Math.cos(alpha);
    matrixRotX[1][2] = -Math.sin(alpha);
    matrixRotX[2][1] = Math.sin(alpha);
    matrixRotX[2][2] = Math.cos(alpha);

    return matrixRotX;
  }

  static getRotYMatrix(alpha) {
    const matrixRotY = makeBaseMatrix();

    matrixRotY[0][0] = Math.cos(alpha);
    matrixRotY[0][2] = Math.sin(alpha);
    matrixRotY[2][0] = -Math.sin(alpha);
    matrixRotY[2][2] = Math.cos(alpha);

    return matrixRotY;
  }

  static getRotZMatrix(alpha) {
    const matrixRotZ = makeBaseMatrix();

    matrixRotZ[0][0] = Math.cos(alpha);
    matrixRotZ[0][1] = -Math.sin(alpha);
    matrixRotZ[1][0] = Math.sin(alpha);
    matrixRotZ[1][1] = Math.cos(alpha);

    return matrixRotZ;
  }
}