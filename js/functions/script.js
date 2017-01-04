var age=prompt("Введите ваш возраст");
function checkAge(age) {
    return (+age>18)?true:confirm("Родители разрешили?");
}

var check=checkAge;
alert(check(age));