import { FocalLength } from './consts';
import { Point2D } from './point2D';
import { Triangle } from './triangle';

export class Scene {

    constructor(scenesObject, canvas) {
        this.canvas = canvas;
        this.scenesObject = scenesObject;
        this.ctx = this.canvas.getContext('2d');
    }

    to2DPoint(point3D) {

        let tmp = FocalLength/ point3D.z;
        let x = tmp*point3D.x + this.canvas.width/2;
        let y =  this.canvas.height/2 - tmp*point3D.y;

        return new Point2D(x,y);
    }

    make2DProjecton() {
        this.scenesObject.triangles3D.forEach((t) => {
            this.scenesObject.add2DTriangle(new Triangle(this.to2DPoint(t.a), this.to2DPoint(t.b), this.to2DPoint(t.c)));
        });
    }

    paint() {
        this.scenesObject.triangles2D.forEach((t) => {
            this.ctx.strokeStyle = '#000';
            this.ctx.beginPath();
            this.ctx.moveTo(Math.round(t.a.x), Math.round(t.a.y));
            this.ctx.lineTo(Math.round(t.b.x), Math.round(t.b.y));
            this.ctx.lineTo(Math.round(t.c.x), Math.round(t.c.y));
            this.ctx.stroke();
            this.ctx.closePath();
       });

    }

}