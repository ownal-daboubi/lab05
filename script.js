let getItem = function () {
    let userInput = prompt('enter what type of cats you want?');
    let item = '';

    while (userInput !== 'pettycat' && userInput !== 'persiancat') {
        userInput = prompt('Please enter pettycat or persiancat');
    }

    if (userInput === 'pettycat') {
        item = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/255px-Cat_November_2010-1a.jpg" />';
    } else if (userInput === 'persiancat') {
        item = '<img src="https://www.thesprucepets.com/thmb/19Da7Q1AhAPC7rlSxDpk-VSF6lc=/3436x2577/smart/filters:no_upscale()/brown-persian-cat-laying-on-edge-of-green-carpet-456750383-581211b53df78c2c7320b40b.jpg" />';
    }

    return item;
}

let howMany = function () {
    let count = prompt('How many cats do you want?');

    while (count === '' || isNaN(count)) {
        count = prompt('Please enter a number!!');
    }

    return count;
}


let showOrder = function () {
    let item = getItem();
    let total = howMany();
    let result = '';

    for (let i = 0; i < total; i++) {
        result = result + '<p>Model #' + i + ' ' + item + '</p>';
    }

    return result;
}

showOrder();