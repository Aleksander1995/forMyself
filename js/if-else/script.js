var nameBrowser=prompt("Введите названия вашего браузера");
if(nameBrowser=="IE"){
    alert("У вас IE");
}else if(nameBrowser=="Chrome" || nameBrowser=="Firefox" || nameBrowser=="Safari" || nameBrowser=="Opera"){
    alert("Да, и эти браузеры мы поддерживаем")
}else{
    alert("Мы надеемся, что и в вашем браузере все ок!");
}