const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function () {
        console.log('Hello');

    }
}



// demo fractory function ''

function generateCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');

        }
    }
}
const factory = generateCircle(1);
console.log(factory);

// generateCircle(2).draw()
// console.log(generateCircle(1).radius)

// demo constructor function 
function Circle(radius) {
    // console.log(this)
    this.radius = radius;
    let defaultLocation = {
        x: 1,
        y: 2
    }

    this.draw = function draw() {
        console.log('draw from constructor ');
    }
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            defaultLocation = value
        }
    })
}
const another = new Circle(1)
console.log(another);
console.log(`this is default Location ${another.defaultLocation}`);
// console.log("");
another.defaultLocation = 1
console.log(another.defaultLocation);
another.draw()