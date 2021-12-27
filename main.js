var isOn = 1;
var image = document.getElementById('themer');
var button = document.getElementById('theme').addEventListener('click', changeTheme);
function changeTheme(){
    if(isOn){
        image.style.backgroundImage = "url(day.png)";
        isOn = 0;
    }else{
        image.style.backgroundImage = "url(background.jpg)";
        isOn = 1;
    }
    
}