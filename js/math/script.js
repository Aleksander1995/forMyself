alert("Функция min(a,b)");
var a=prompt("Введите 'a':");
var b=prompt("Введите 'b':");

function min(a, b) {
    return (a>b)?b:(a==b)?b:a;
}

alert(min(a,b));

alert("Функция pow(x,n)");
var x=prompt("Введите 'x':");
var n=prompt("Введите 'n':");

function pow(x, n) {
    return (n==1)?x:x*pow(x,n-1);
}

alert(pow(x,n));