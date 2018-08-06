import { ROUND_PRECISION } from './consts';

export class Point3D {

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  setX(x) {
    this.x = Math.round(x * ROUND_PRECISION) / ROUND_PRECISION;
  }

  setY(y) {
    this.y = Math.round(y * ROUND_PRECISION) / ROUND_PRECISION;
  }

  setZ(z) {
    this.z = Math.round(z * ROUND_PRECISION) / ROUND_PRECISION;
  }

  updatePoint(vector) {
    this.setX(vector[0]);
    this.setY(vector[1]);
    this.setZ(vector[2]);
  }
}