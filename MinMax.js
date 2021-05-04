var arrayList1 = [2, 1, 3, 4, 5];
function minmax(arrayList1){
    let minSum = 0; let maxSum = 0;
    let sortedArray = arrayList1.sort();
    console.log(arrayList1.sort());
    let minArray = sortedArray.slice(0,4);
    let maxArray = sortedArray.slice(1);
    console.log("MIN_ARRAY: "+minArray);
    console.log("MAX_ARRAY: "+maxArray);
    for (let i=0; i< minArray.length; i++){
        minSum+=minArray[i];
    }
 
     for (let i=0; i< maxArray.length; i++){
        maxSum+=maxArray[i];
    }

    let resultArray = minSum + ' ' + maxSum;
 
    return resultArray;
}
minmax(arrayList1);