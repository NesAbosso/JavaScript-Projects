//TOPRECISION() METHOD
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}



//Number Method to string
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}



//concat() method concatenates (connects) two or more strings
function full_Sentence() {
    var part_1 = "I  ";
    var part_2 = "love ";
    var part_3 = "all ";
    var part_4 = "cats. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//The slice() method is a string method that extracts a section of a string and then returns the extracted section in a new string
function slice_Method() {
    var Sentence = "People say nothing is impossible, but I do nothing every day.";
    var Section = Sentence.slice(21, 32);
    document.getElementById("Slice").innerHTML = Section;
}

// toFixed method
var totn_number = 123.456789;

console.log(totn_number.toFixed());
console.log(totn_number.toFixed(1));
console.log(totn_number.toFixed(2));

// the valueof method
var totn_string = new String('ISeeYou');

console.log(totn_string);
console.log(totn_string.valueOf());
