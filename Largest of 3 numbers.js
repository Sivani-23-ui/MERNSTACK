<html>
<body>

<script>

let a = parseInt(prompt("Enter a"));
let b = parseInt(prompt("Enter b"));
let c = parseInt(prompt("Enter c"));

if(a==b && b==c)
{
    alert("EQUAL NUMBERS");
}
else
{
    let l = Math.max(a,b,c);
    alert("LARGER NUMBER: " + l);
}

</script>

</body>
</html>
