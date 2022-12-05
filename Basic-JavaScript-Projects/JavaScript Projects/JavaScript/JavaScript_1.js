//Switch staement
function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").Value;
    var Food_String = " is a great food!";
    switch (Foods) {
        case "Pizza":
            Food_Output = "Pizza" + Food_String;
        case "Sushi":
            Food_Output = "Sushi" + Food_String;
        case "Ramen":
            Food_Output = "Ramen" + Food_String;
        case "Tacos":
            Food_Output = "Tacos" + Food_String;
        case "Pasta":
            Food_Output = "Pasta" + Food_String;
        case "Hamburger":
            Food_Output = "Hamburger" + Food_String;
            break;
        default:
            Food_Output = "Please enter a food exactly as written on the above list.";      
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

//class statement
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);