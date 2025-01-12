export function getGrade(a: number, b: number, c: number): string {

    let average = returnAverage(a, b, c);

    console.log(average);
    


    if (average >= 90 && average <= 100){
        return "A"
    }else if(average >= 80 && average < 90){
        return "B"
    }else if(average >= 70 && average < 80){
        return "C"
    }else if(average >= 60 && average <70){
        return "D"
    }else if(average < 60){
        return "F"
    }else{
        return "Hay un problema"
    }

  }


  function returnAverage(a: number, b: number, c: number){
    let suma = a + b +  c
    return suma/3;
  }