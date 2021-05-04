
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] ]
    
    function diagonalDifference(matrix1){
        console.log(matrix1);
        let diagonalLeft = 0; let diagonalRight = 0;
        for(let i = 0; i<matrix1.length; i++){
            diagonalLeft+=matrix1[i][i];
            diagonalRight+=matrix[i][matrix.length-i-1];
        }
        console.log(diagonalLeft);
        console.log(diagonalRight);
        return Math.abs(diagonalLeft - diagonalRight);
    }
    
    diagonalDifference(matrix1);