class NumbersValidator {
    // Method to check if a number is even
    // @param {Number} number - The number to be checked
    // @return {Boolean} - Returns true if the number is even, false otherwise

    isNumberEven(number) {
            // Determine the type of the passed argument
        const typeOfVariable = typeof number;

        if (typeOfVariable !== "number") {
            throw new Error(`[${number}] is not of type "Number" it is of  type ${typeOfVariable}`);
        } else {
            return number % 2 === 0;
        }
    }
        // Method to extract even numbers from an array
        // @param {Array<Number>} arrayOfNumbers - The array containing numbers to be checked
        // @return {Array<Number>} - An array of even numbers
    getEvenNumbersFromArray(arrayOfNumbers) {
        if (Array.isArray(arrayOfNumbers) && arrayOfNumbers.every(item => typeof item === 'number')) {
            return arrayOfNumbers.filter (this.isNumberEven);
            }   throw new Error (`[${arrayOfNumbers}] is not an array of 'Numbers'`);
        }

        // Method to check if a value is an integer
        // @param {Number} n - The value to be checked
        // @return {Boolean} - Returns true if the value is an integer, false otherwise
    isInteger(n) {
        if (typeof n !== "number") {
            throw new Error (`[${n} is not a number]`);
        }
        return Number.isInteger(n);
    }

}

    module.exports = NumbersValidator;
