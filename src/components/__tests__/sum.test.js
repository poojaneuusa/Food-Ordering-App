import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers" , () => {

    const result = sum(3,4);

    //Assertion
    expect(result).toBe(7);
    //Without Assertion & empty function, test is passed because there is nothing to test.
    //But always write expect stmt.
});