import { focalLength } from './options';
import { Point2D } from './point2D';
import { Triangle } from './triangle';
import { isVisible } from './utils';

export class Scene {

  constructor(scenesObjects, canvas) {
    this.canvas = canvas;
    this.scenesObjects = scenesObjects;
    this.ctx = this.canvas.getContext('2d');
  }

  to2DPoint(point3D) {
    const tmp = focalLength.value / point3D.z;
    const x = tmp * point3D.x + this.canvas.width / 2;
    const y = this.canvas.height / 2 - tmp * point3D.y;

    return new Point2D(x, y);
  }

  make2DProjection() {
    this.scenesObjects.sortedTriangles.forEach((t) => {
      if (isVisible(t.a) && isVisible(t.b) && isVisible(t.c)) {
        this.scenesObjects.add2DTriangle(
          new Triangle(
            this.to2DPoint(t.a),
            this.to2DPoint(t.b),
            this.to2DPoint(t.c)
          )
        );
      }
    });
  }

  paint() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.scenesObjects.triangles2D.forEach((t) => {
      this.ctx.fillStyle = 'rgb(16,108,200)';
      this.ctx.strokeStyle = '#000';
      this.ctx.beginPath();
      this.ctx.moveTo(Math.round(t.a.x), Math.round(t.a.y));
      this.ctx.lineTo(Math.round(t.b.x), Math.round(t.b.y));
      this.ctx.lineTo(Math.round(t.c.x), Math.round(t.c.y));
      this.ctx.stroke();
      this.ctx.fill();
      this.ctx.closePath();
    });
  }
}