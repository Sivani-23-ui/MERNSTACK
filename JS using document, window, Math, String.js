<!DOCTYPE html>
<html>
<head>
<title>JS Objects Example</title>
</head>

<body>

<h2>JavaScript Objects Example</h2>
<p id="demo"></p>

<script>

// window object
window.alert("Welcome to JavaScript Demo");

// Math object
let number = 16;
let sqrt = Math.sqrt(number);

// String object
let text = "javascript";
let upper = text.toUpperCase();

// document object
document.getElementById("demo").innerHTML =
"Square root of 16: " + sqrt + "<br>" +
"Uppercase of javascript: " + upper;

</script>

</body>
</html>