export class Calculator {
  public add(x: number, y: number) : number {
    return x + y;
  }

  public subtract(x : number, y : number) : number {
    return x - y
  }

  public multiply(x : number, y : number) : number {
    return x * y
  }
  
  public divide(x: number, y: number) : number {
    if (y > 0) {
      return x / y
    }
    throw new Error("Denominator must not be zero.")
    return 0
  }

  public hello() {
    console.log("Hello")
  }
};
