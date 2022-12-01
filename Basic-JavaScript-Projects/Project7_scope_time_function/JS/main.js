var x = 10;  // It is a Global Variable  
function add() {
    var y = 20; //local variable  
    var some = 0;//Local variable  
    for (var i = x; i < y; i++) {
        some = some + i;
        document.write(some + "<br> ");
    }
}

//above code and didn’t understand why Add_numbers_2 didn’t display a result. We could use the console.log() method to help us debug our code as follows
function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//A funtion with if and else with a time_funtion
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time < 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}