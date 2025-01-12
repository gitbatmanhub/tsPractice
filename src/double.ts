export function maps(x: number[]): number[]{
    let newArray = [];
    for (let i: number= 0; i < x.length; i++){        
        newArray.push(x[i] * 2);
    }
    return newArray;
  }