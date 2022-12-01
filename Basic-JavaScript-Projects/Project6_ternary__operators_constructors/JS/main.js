//JavaScript that utilizes a ternary operation using input from the browser
//a function to display the results of the constructor function within an HTML element
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//a constructor function that uses the “new” and “this” keywords
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var Father = new Person("Jarel", "Stephens", 71, "Hazel");
var Mother = new Person("Cindy", "Stephens", 69, "green");
function myFunction() {
    document.getElementById("keywords_and_Constructors").innerHTML  = "Jarel " + Father.lastName +
        " 71 " + Father.eyeColor;

}

//a nested function
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 5;
        function Plus_one() { Starting_point += 1; }
        Plus_one();
        return Starting_point;

    }
}