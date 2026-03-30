function caracherOccurence(str, char) {
    // return str.split(char).length - 1;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(caracherOccurence("Hello World", "d"))

function findMax(arr){
    let max = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1,2,3,4,5,6,7,8,9,10]))
function findMin(arr){
    let min = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin([1,2,3,4,5,6,7,8,9,0]))
function findAverage(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(findAverage([1,2,3,4,5,6,7,8,9,0]))

function findMedian(arr){
    let sorted = arr.sort((a,b)=>a-b);
    let mid = Math.floor(sorted.length/2);
    if(sorted.length%2===0){
        return (sorted[mid]+sorted[mid-1])/2;
    }else{
        return sorted[mid];
    }
}
console.log(findMedian([1,2,3,4,5,6,7,8,9,0]))
function sentanceCapitalize(str){return str.charAt(0).toUpperCase()+str.slice(1)}
console.log(sentanceCapitalize("hello world"))
function Capitalize(str){
    const word =str.toLowerCase().split('');
    for (let i=0; i<str.length; i++){
        word[i] = word[i][0].toUpperCase()+word[i].slice(1)
    }
    return word.join('');
}
console.log(Capitalize("find the dog"))