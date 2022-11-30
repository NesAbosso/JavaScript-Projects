// a dictionary with a function that outputs a key-value pair into an HTML element
function my_Dictionary() {
    var Animal = {
        Species: "Cat" ,
        Color: "Black" ,
        Breed: "Exotic" ,
        Age: 7,
        Sound: "Meow!"
    };
    delete Animal.Sound; //a delete statement that removes the key before its value is displayed
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}