var button = document.getElementById("sub");

var slider1 = document.getElementById("motor1");
var slider2 = document.getElementById("motor2");
var slider3 = document.getElementById("motor3");
var slider4 = document.getElementById("motor4");
var slider5 = document.getElementById("motor5");
var slider6 = document.getElementById("motor6");
var val = slider1.value //gets the oninput value
    document.getElementById('output1').innerHTML = val// Display the default slider value
    var val = slider2.value //gets the oninput value
    document.getElementById('output2').innerHTML = val
    var val = slider3.value //gets the oninput value
    document.getElementById('output3').innerHTML = val
    var val = slider4.value //gets the oninput value
    document.getElementById('output4').innerHTML = val
    var val = slider5.value //gets the oninput value
    document.getElementById('output5').innerHTML = val
    var val = slider6.value //gets the oninput value
    document.getElementById('output6').innerHTML = val

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function () {
    console.log(slider1.value);
    var val = slider1.value //gets the oninput value
    document.getElementById('output1').innerHTML = val //displays this value to the html page
}
slider2.oninput = function () {
    console.log(slider2.value);
    var val = slider2.value //gets the oninput value
    document.getElementById('output2').innerHTML = val //displays this value to the html page
}
slider3.oninput = function () {
    console.log(slider3.value);
    var val = slider3.value //gets the oninput value
    document.getElementById('output3').innerHTML = val //displays this value to the html page
}
slider4.oninput = function () {
    var val = slider4.value //gets the oninput value
    document.getElementById('output4').innerHTML = val //displays this value to the html page
}
slider5.oninput = function () {
    console.log(slider5.value);
    var val = slider5.value //gets the oninput value
    document.getElementById('output5').innerHTML = val //displays this value to the html page
}
slider6.oninput = function () {
    console.log(slider6.value);
    var val = slider6.value //gets the oninput value
    document.getElementById('output6').innerHTML = val //displays this value to the html page
}
slider1.rendered = function () {
    document.getElementById("motor1").oninput = function () {
        myFunction()
    };
}
button.onclick = function(){
    var motor1 = slider1.value;
    var motor2 = slider1.value;
    var motor3 = slider1.value;
    var motor4 = slider1.value;
    var motor5 = slider1.value;
    var motor6 = slider1.value;
}

function myFunction() {

    console.log(val);
}
