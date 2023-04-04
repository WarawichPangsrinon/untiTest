import { fizzbuzz } from '../fizzbuzz'
describe('fizzbuzzTest', () => {
    it('should be say fizz', () => {
        // ? ARRANGE
        const expectedResult = "fizz";

        // ? ACTION
        const result = fizzbuzz(12)

        // ? ASSERT
        expect(result).toBe(expectedResult);
    })

    it('should be say buzz', () => {
        // ? ARRANGE
        const expectedResult = "buzz";

        // ? ACTION
        const result = fizzbuzz(10)

        // ? ASSERT
        expect(result).toBe(expectedResult);
    })

    it('should be say fizzbuzz', () => {
        // ? ARRANGE
        const expectedResult = "fizzbuzz";

        // ? ACTION
        const result = fizzbuzz(150)

        // ? ASSERT
        expect(result).toBe(expectedResult);
    })

    it('should be say 4', () => {
        // ? ARRANGE
        const expectedResult = "4";

        // ? ACTION
        const result = fizzbuzz(4)

        // ? ASSERT
        expect(result).toBe(expectedResult);
    })
})