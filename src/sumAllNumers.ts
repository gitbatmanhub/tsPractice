export const summation = (num:number)=> { 
    return suma(num)
  }



  function suma (num: number) {    
    let sumaTotal: number= 0;
    for(let i:number = 0; i <= num; i++){        
        sumaTotal = sumaTotal + i
    }    
    return sumaTotal;
  }
