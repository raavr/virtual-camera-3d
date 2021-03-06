import { Point3D } from './point3D';
import { Triangle } from './triangle';

export class ScenesObjects {

  constructor(points) {
    this.triangles3D = [];
    this.triangles2D = [];
    this.sortedTriangles = [];
    this.create3DTriangles(points);
  }

  create3DTriangles(points) {
    for (let i = 0; i < points.length; i++) {
      const a = new Point3D(points[i][0].x, points[i][0].y, points[i][0].z);
      const b = new Point3D(points[i][1].x, points[i][1].y, points[i][1].z);
      const c = new Point3D(points[i][2].x, points[i][2].y, points[i][2].z);
      this.triangles3D.push(new Triangle(a, b, c));
    }
  }

  add2DTriangle(triangle) {
    this.triangles2D.push(triangle);
  }

  clear() {
    this.triangles2D = [];
    this.sortedTriangles = [];
  }
}