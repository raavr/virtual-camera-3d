import { Point3D } from './point3D';
import { DEFAULT_MATRIX, AXIS, ZOOM } from './consts';
import { initialValues } from './options';

//based on http://kb.komires.net/article.php?id=2
export function computeVectorProduct(triangle) {
  const x1 = triangle.b.x - triangle.a.x;
  const y1 = triangle.b.y - triangle.a.y;
  const z1 = triangle.b.z - triangle.a.z;

  const x2 = triangle.c.x - triangle.a.x;
  const y2 = triangle.c.y - triangle.a.y;
  const z2 = triangle.c.z - triangle.a.z;

  return new Point3D(y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - y1 * x2);
}

export function computeScalarProduct(pointA, pointB) {
  return pointA.x * pointB.x + pointA.y * pointB.y + pointA.z * pointB.z;
}

export function computeVectorLen(point) {
  return Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z);
}

export function computeNormalVector(point) {
  return new Point3D(point.x / computeVectorLen(point), point.y / computeVectorLen(point), point.z / computeVectorLen(point));
}

export function getPointPositionRelativeToPlane(triangle, point) {
  const normalVect = computeNormalVector(computeVectorProduct(triangle));
  return Math.round(
    computeScalarProduct(normalVect, point) - computeScalarProduct(normalVect, triangle.a)
  );
}

export function multiplyMatrixByVector(matrix, vector) {
  const finalVector = Array.from({ length: 4 }, () => 0);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      finalVector[i] += matrix[i][j] * vector[j];
    }
  }

  return finalVector;
}

export function createVector(point3D) {
  return [point3D.x, point3D.y, point3D.z, 1.0];
}

export function isVisible(point) {
  return point.z >= 0;
}

export function isNumeric(n) {
  return !isNaN(+n) && isFinite(n);
}

export function makeBaseMatrix() {
  return DEFAULT_MATRIX.map((arr) => arr.slice(0));
}

export function getAxis(axis) {
  return axis === "X" ? AXIS.X : (axis === "Y" ? AXIS.Y : AXIS.Z);
}

export function getSignedRotationValue(sign) {
  return sign === "pos" ? initialValues.rotate : -initialValues.rotate;
}

export function getSignedTranslationValue(sign) {
  return sign === "pos" ? initialValues.translate : -initialValues.translate;
}

export function getZoomSign(sign) {
  return sign === "in" ? ZOOM.IN : ZOOM.OUT;
}

export function updateInitialValue(idElem, newValue) {
  switch (idElem) {
    case "translate-value":
      initialValues.translate = newValue;
      break;
    case "rotate-value":
      initialValues.rotate = newValue;
      break;
    case "zoom-value":
      initialValues.zoom = newValue;
      break;
  }
}

//from underscore.js
export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }
}