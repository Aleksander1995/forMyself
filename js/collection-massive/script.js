var elems=document.documentElement.childNodes;
alert("Выводим коллекцию");
/*1-Применить метод массива через call/apply:*/
[].forEach.call(elems,function (elem) {
    alert(elem);
});

alert("Выводим массив");
/*2-При помощи Array.prototype.slice сделать из коллекции массив.*/
elems=Array.prototype.slice.call(elems);//Теперь elems - массив

elems.forEach(function (elem) {
    alert(elem);
});

