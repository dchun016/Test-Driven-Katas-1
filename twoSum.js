const twoSum = (arr, target) => {
    let myObj = {}
    for (let i = 0; i < arr.length; i++){
        if (myObj[target-arr[i]] !== undefined){
            return [i, myObj[target-arr[i]]]
        }
        myObj[arr[i]] = i;
    }
    return [];
}

module.exports = twoSum