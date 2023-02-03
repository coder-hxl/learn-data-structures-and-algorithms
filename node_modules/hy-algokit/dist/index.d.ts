declare function btPrint(root: PrintableNode | null): void
declare function testOrderSearchEfficiency(
  searchFn: ISearchFunction, 
  arr: number[] | null = null, 
  target: number = -1
): void

declare function isPrime(num: number): boolean

export interface PrintableNode {
  left: PrintableNode | null;
  right: PrintableNode | null;
  value: any;
}

export interface ISearchFunction {
  (arr: number[], target: number): number
}
