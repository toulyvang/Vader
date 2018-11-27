let house = {
    _color: 'red',
    _style: 'shack',
    _roof: 'no',
    _windows: 4,
    set windows(numWindow) {
        if (numWindow > 4) {
            console.log('Not possible')
        } else {
            this._windows = numWindow;
            console.log('I didn\'t do it.');
        }
    },
    get windows() {
        return this._windows;
    }
}

// console.log(house.windows);
// house.windows = 3;
// console.log(house.windows);
// house.windows = 5;
// console.log(house.windows);


let Vader = {
    first_name: 'Anakin',
    last_name: 'Skywalker',
    class: 'Sith Lord',
    saber_color: 'red',
    Luke: function() {
        if (Vader.last_name === 'Skywalker') {
            console.log('No, I am your father!')
        } else {
            console.log('I see through the lies of the Jedi.')
        }
    }
}

Vader.Luke();