import { Point3D } from './point3D';

//http://kb.komires.net/article.php?id=2
export function computeVectorProduct(triangle) {
    let x1 = triangle.b.x - triangle.a.x;
    let y1 = triangle.b.y - triangle.a.y;
    let z1 = triangle.b.z - triangle.a.z;

    let x2 = triangle.c.x - triangle.a.x;
    let y2 = triangle.c.y - triangle.a.y;
    let z2 = triangle.c.z - triangle.a.z;

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
    return Math.round(
            computeScalarProduct(
                computeNormalVector(computeVectorProduct(triangle)), 
                point
            )
            - 
            computeScalarProduct(
                computeNormalVector(computeVectorProduct(triangle)), 
                triangle.a
            )
        );
}