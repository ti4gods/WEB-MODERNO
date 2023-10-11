function messageError(error) {
    //throw 'An error occurred during processin.';
    //throw new Error('An error occurred during processin')
    throw {
        title: 'An error occurred during processing',
        name: error.name,
        message: error.message,
        date: new Date
    }
}   

function printNameUpperCase(object) {
    try {
        console.log(object.nome.toUpperCase() + '!!!')
    } catch (error) {
        messageError(error)
    } finally {
        console.log('Finally')
    }
}

const object = { name: 'Tiago' };
printNameUpperCase(object);