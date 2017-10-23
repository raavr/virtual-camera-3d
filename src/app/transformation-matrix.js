const DEFAULT_MATRIX = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
];

//http://www.cs.cornell.edu/courses/cs4620/2010fa/lectures/03transforms3d.pdf
export class TransformationMatrix {
    
    getTransMatrix(x, y, z) {
        const matrixTrans = DEFAULT_MATRIX.map((arr) => arr.slice(0));
        
        matrixTrans[0][3] = x;
        matrixTrans[1][3] = y;
        matrixTrans[2][3] = z;

        return matrixTrans;
    }

    getRotXMatrix(alpha) {
        const matrixRotX = DEFAULT_MATRIX.map((arr) => arr.slice(0));
        
        matrixRotX[1][1] = Math.cos(alpha);
        matrixRotX[1][2] = -Math.sin(alpha);
        matrixRotX[2][1] = Math.sin(alpha);
        matrixRotX[2][2] = Math.cos(alpha);

        return matrixRotX;
    }

    getRotYMatrix(alpha) {
        const matrixRotY = DEFAULT_MATRIX.map((arr) => arr.slice(0));

        matrixRotY[0][0] = Math.cos(alpha);
        matrixRotY[0][2] = Math.sin(alpha);
        matrixRotY[2][0] = -Math.sin(alpha);
        matrixRotY[2][2] = Math.cos(alpha);

        return matrixRotY;
    }

   getRotZMatrix(alpha) {
        const matrixRotZ = DEFAULT_MATRIX.map((arr) => arr.slice(0));
        
        matrixRotZ[0][0] = Math.cos(alpha);
        matrixRotZ[0][1] = -Math.sin(alpha);
        matrixRotZ[1][0] = Math.sin(alpha);
        matrixRotZ[1][1] = Math.cos(alpha);

        return matrixRotZ;
    }
}