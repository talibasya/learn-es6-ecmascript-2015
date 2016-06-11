var createGreeting = function(message, name) {
    return message + name;
}

var  arrowGreeting = (message, name) => {
    return message;
}

var  arrowGreeting = (message, name) =>  message + name;

var arrowGreeting = message => "hello";
var squared = x => x * x;



//______________________________________________________
var deliveryBoy = {
    name: "John",

    handleMessage: function(message, handler) {
        handler(message);
    },

    receive: function() {
        //that = this;
        /*this.handleMessage("Hello, ", function(message) {
            //that.name; get the proper name

            console.log(message + that.name);
        })*/

        // is equal

        this.handleMessage("Hello, ", message =>   console.log(message + this.name))

    }
}

deliveryBoy.receive();