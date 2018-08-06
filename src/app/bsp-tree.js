import { Node } from './node';
import { Triangle } from './triangle';
import { getPointPositionRelativeToPlane } from './utils';
import { Point3D } from './point3D';

export class BSPTree {

  constructor() {
    this.viewerPoint = new Point3D(0, 0, 0);
  }

  add(node, triangle) {
    const fa = getPointPositionRelativeToPlane(node.triangle, triangle.a);
    const fb = getPointPositionRelativeToPlane(node.triangle, triangle.b);
    const fc = getPointPositionRelativeToPlane(node.triangle, triangle.c);

    if (fa <= 0 && fb <= 0 && fc <= 0) {
      if (node.nodeLeft !== null) {
        this.add(node.nodeLeft, triangle);
      } else {
        node.nodeLeft = new Node(triangle);
      }
    } else {
      if (node.nodeRight !== null) {
        this.add(node.nodeRight, triangle);
      } else {
        node.nodeRight = new Node(triangle);
      }
    }
  }

  getTrianglesByDepth(node, trianglesByDepth) {
    if (node !== null) {
      const pos = getPointPositionRelativeToPlane(node.triangle, this.viewerPoint);

      if (pos <= 0) {
        this.getTrianglesByDepth(node.nodeRight, trianglesByDepth);
        trianglesByDepth.push(node.triangle);
        this.getTrianglesByDepth(node.nodeLeft, trianglesByDepth);
      } else {
        this.getTrianglesByDepth(node.nodeLeft, trianglesByDepth);
        trianglesByDepth.push(node.triangle);
        this.getTrianglesByDepth(node.nodeRight, trianglesByDepth);
      }
    }
  }
}