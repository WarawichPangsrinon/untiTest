import { sum } from '../index'
import { push, get } from '../circular'


// describe('test', () => {
//     it('should be 3', () => {
//         // ? ARRANGE
//         const expectedResult = 3;

//         // ? ACTION
//         const result = sum(1, 2);

//         // ? ASSERT
//         expect(result).toBe(expectedResult);
//     })
// })

describe('Circular', () => {
    it('should be 1', () => {
        // ? ARRANGE
        const expectedResult = 3;

        // ? ACTION
        push(1);
        push(2);
        push(3);
        push(4);
        push(5);
        push(6);
        get();
        push(7);
        // push(8);
        // push(9);
        // push(10);
        // push(11);

        let result = get();

        // ? ASSERT
        expect(result).toBe(expectedResult);
    })
})




