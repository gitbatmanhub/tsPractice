export function repeatStr(n: number, s: string): string {
    let result = ""; 
    for (let i = 0; i < n; i++) {
      result += s; 
    }
    return result;
}