// Optional way
function evenIfy(num){
    var result;
    if(num % 2 == 0){
        result = num;
        // return = num; [Another return way]
    }
    else{
        result = num;
        // return = num; [Another return way]
    }
    return result;
}

var result = evenIfy(9);
var square = result * result;
console.log('result', square);

// get an array
function evenIfyAll(nums){
    var evenArray = [];
    for (let i = 0; i < nums.length; i++){
        const num = nums[i];
        var result = evenIfy(num);
        evenArray.push(result);
    }
    return evenArray;
}


// function evenIfyAll(nums){
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if(num % 2 == 0){
//             console.log(num, ': is even number');
//         }
//         else{
//             console.log(num, ': is odd number');
//         }
//     }
    
// }

var nums = [5, 12, 89, 45, 18, 8];
var numsEven = evenIfyAll(nums);
console.log(numsEven);
// evenIfyAll(nums);

friendsAge = [13, 17, 19, 20, 18];
// evenIfyAll(friendsAge);
