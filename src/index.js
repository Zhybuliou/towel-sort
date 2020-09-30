
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    let arrI = [];
   if(Array.isArray(matrix)){
    for(let i = 0; i < matrix.length; i++){
        if(i % 2 === 0){
            for(let z = 0; z < matrix[i].length; z++){
                arr.push(matrix[i][z]);
            }
        }else{
            for(let r = matrix[i].length-1; r >= 0  ; r--){
                arr.push(matrix[i][r]);
            }
        }
    }
    return arr;   
}else {
    return arr;
}

};
