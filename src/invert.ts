export function invert(array: number[]): number[] {

    let newArray = [];
    for (let i: number= 0; i < array.length; i++){        
        newArray.push(array[i] * -1);
    }
    return newArray;
 }