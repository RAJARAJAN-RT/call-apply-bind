//this
// “this” always refers to an object.
// “this” refers to an object which calls the function it contains.
// In the global context “this” refers to either window object or is undefined if the ‘strict mode’ is used.

var bike = { 
    registrationNumber: "tn61b2424",
    brand: "ktm",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}
bike.displayDetails(); 

//Call( ):
// The call() method invokes a function with a given 'this' value and arguments provided one by one. 
// This means that we can call any function,and explicitly specify what 'this' should reference within the calling function.

var bike = { 
    registrationNumber: "tn61b2424",
    brand: "ktm"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your bike: " + this.registrationNumber + " " + this.brand);
}
displayDetails.call(bike, "Rajarajan"); 

// Apply( ):
// Invokes the function and allows you to pass in arguments as an array.

displayDetails.apply(bike, ["Rajarajan"]); 

// Bind():
// returns a new function, allowing you to pass in an array and any number of arguments.

var bike = { 
    registrationNumber: "tn61b2424",
    brand: "ktmS",

    displayDetails: function(ownerName){
        console.log(ownerName + ", this is your bike: " + this.registrationNumber + " " + this.brand);
    }
}
var myCarDetails = bike.displayDetails.bind(bike,"Rsajarajan"); 
myCarDetails(); 
//var myCarDetails = bike.displayDetails.bind(bike, "rajarajan");
// Call and apply are pretty interchangeable. Both execute the current function immediately.
// You need to decide whether it’s easier to send in an array or a comma separated list of arguments.
// Whereas Bind creates a new function that will have this set to the first parameter passed to bind().

// Thank You!