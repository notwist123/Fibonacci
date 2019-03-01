function fibonacci(number) {
    if (number === 1 || number === 0)
        return number;
    
    return fibonacci(number-1) + fibonacci(number-2);
}
module.exports = fibonacci;