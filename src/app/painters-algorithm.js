import { BSPTree } from './bsp-tree';
import { Node } from './node';
import { Point3D } from './point3D';

export class PaintersAlgorithm {

  constructor(scenesObjects) {
    this.scenesObjects = scenesObjects;
  }

  compute() {
    this.scenesObjects.clear();
    const bspTree = new BSPTree();
    const root = new Node(this.scenesObjects.triangles3D[0]);

    for (let i = 1; i < this.scenesObjects.triangles3D.length; i++) {
      bspTree.add(root, this.scenesObjects.triangles3D[i]);
    }

    bspTree.getTrianglesByDepth(root, this.scenesObjects.sortedTriangles);
  }
}