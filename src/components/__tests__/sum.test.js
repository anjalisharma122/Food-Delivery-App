import { sum } from "../sum" ;

test("Sum function should return sum of two number" , ()=>{
    const result =sum(3,4);
//Assertion
    expect(result).toBe(7);
});