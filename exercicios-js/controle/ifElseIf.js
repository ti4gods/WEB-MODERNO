Number.prototype.between = function(begin, end) {
    return this >= begin && this <= end
};

const printResult = function (score) {
    if (score.between(9, 10)) {
        console.log('Approved, great!')
    } else if (score.between(7, 8.99)) {
        console.log('Approved! :)') 
    } else if (score.between(4, 6.99)) {
        console.log('Recovery! :|') 
    } else if (score.between(0, 3.99)) {
        console.log('Reproved! :(')
    } else {
        console.log('Invalid score!')
    }

    console.log('End.')
}

printResult(10);
printResult(8.9);
printResult(6.55);
printResult(2.3);
printResult(-1);
printResult(11);