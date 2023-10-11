const printResult = function(score) {
    const averageApproved = 7;
    
    if (score >= averageApproved) {
        console.log('Approved! :)')
    } else {
        console.log('Reproved! :(')
    };
};

printResult(10);
printResult(4);
printResult('');
printResult('DDDD');
