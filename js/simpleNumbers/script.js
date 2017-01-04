do{
    num=prompt("Введите число");
}while(num<=2 && num!=null);
outer:for(var i=3;i<=num;i++){
    for(var j=2;j<i;j++){
        if(i%j==0){
            continue outer;
        }
    }
    alert(i);
}