var temp = [];
function fibonacci(number) {
    if (typeof number !== 'number' || number < 0)
        return 0;
    if (temp[number]) 
        return temp[number];
    if (number === 1 || number === 0)
        return number;
    
    return temp[number] = fibonacci(number-1) + fibonacci(number-2);
}
module.exports = fibonacci;