function abrir(){
    document.getElementById("menu").classList.add("menuOpened");
    document.getElementById("principal").style.width="80%";
   
    document.getElementById("open").style.display="block";
    document.getElementById("closed").style.display="none";

    var variavel = document.querySelectorAll('.funcao');
    for (let i = 0; i < variavel.length; i++) {
        variavel[i].style.display="block";
    }

    var circulo = document.querySelectorAll('.circle');
    for (let i = 0; i < circulo.length; i++) {
        circulo[i].style.width="17%";
    }
   
    document.getElementById("chart").style.width="90%";
    document.getElementById("chart-area").style.width="90%";
    document.getElementById("chart-area").style.height="90%";

    document.getElementById("labelSwitch").style.display = 'block';
}

function fechar(){
    document.getElementById("menu").classList.remove("menuOpened");
    document.getElementById("principal").style.width="95%";
    var variavel = document.querySelectorAll('.funcao');

    document.getElementById("open").style.display="none";
    document.getElementById("closed").style.display="block";

    for (let i = 0; i < variavel.length; i++) {
        variavel[i].style.display="none";
    }

    var circulo = document.querySelectorAll('.circle');
    for (let i = 0; i < circulo.length; i++) {
        circulo[i].style.width="15%";
    }

    document.getElementById("chart").style.width="100%";
    document.getElementById("chart-area").style.width="100%";
    document.getElementById("chart-area").style.height="100%";

    document.getElementById("labelSwitch").style.display = 'none';

}

function enableDarkMode(){
    
    var teste = document.getElementById('checkDarkMode');
    if(teste.checked){
        document.body.classList.add('darkMode');
    }else{
        document.body.classList.remove('darkMode');
    }
}

// TESTE
function card1(){
    var num = (Math.random() * 30) + 1;
    document.getElementById('random1').innerHTML = num.toFixed(2);

    if(num>= 1 && num<=10){
        document.getElementById('icone').innerHTML = 'warning';
        document.getElementById('circle').style.background = 'rgb(238, 34, 44)';
        document.getElementById('nivel').innerHTML = 'Baixo';
        document.getElementById('nivel').style.color = 'rgb(238, 34, 44)';
    }else if(num>=11 && num<=18){
        document.getElementById('icone').innerHTML = 'add_alert';
        document.getElementById('circle').style.background = '#0078d7';
        document.getElementById('nivel').innerHTML = 'Médio';
        document.getElementById('nivel').style.color = '#0078d7'; 
    }else if(num>=19 && num<=23){
        document.getElementById('icone').innerHTML = 'check_circle';
        document.getElementById('circle').style.background = 'rgb(35, 197, 62)';
        document.getElementById('nivel').innerHTML = 'Ideal';
        document.getElementById('nivel').style.color = 'rgb(35, 197, 62)'; 
    }else if(num>=24 && num<=25){
        document.getElementById('icone').innerHTML = 'cancel';
        document.getElementById('circle').style.background = 'rgb(255,165,36)';
        document.getElementById('nivel').innerHTML = 'Alto';
        document.getElementById('nivel').style.color = 'rgb(255,165,36)';
    }else{
        document.getElementById('icone').innerHTML = 'warning';
        document.getElementById('circle').style.background = 'rgb(238, 34, 44)';
        document.getElementById('nivel').innerHTML = 'Maximo';
        document.getElementById('nivel').style.color = 'rgb(238, 34, 44)';
    }
}

function card2(){
    var num = (Math.random() * 30) + 1;
    document.getElementById('random2').innerHTML = num.toFixed(2);

    if(num>= 1 && num<=10){
        document.getElementById('icone2').innerHTML = 'warning';
        document.getElementById('circle2').style.background = 'rgb(238, 34, 44)';
        document.getElementById('nivel2').innerHTML = 'Baixo';
        document.getElementById('nivel2').style.color = 'rgb(238, 34, 44)';
    }else if(num>=11 && num<=18){
        document.getElementById('icone2').innerHTML = 'add_alert';
        document.getElementById('circle2').style.background = '#0078d7';
        document.getElementById('nivel2').innerHTML = 'Médio';
        document.getElementById('nivel2').style.color = '#0078d7'; 
    }else if(num>=19 && num<=23){
        document.getElementById('icone2').innerHTML = 'check_circle';
        document.getElementById('circle2').style.background = 'rgb(35, 197, 62)';
        document.getElementById('nivel2').innerHTML = 'Ideal';
        document.getElementById('nivel2').style.color = 'rgb(35, 197, 62)'; 
    }else if(num>=24 && num<=25){
        document.getElementById('icone2').innerHTML = 'cancel';
        document.getElementById('circle2').style.background = 'rgb(255,165,36)';
        document.getElementById('nivel2').innerHTML = 'Alto';
        document.getElementById('nivel2').style.color = 'rgb(255,165,36)';
    }else{
        document.getElementById('icone2').innerHTML = 'warning';
        document.getElementById('circle2').style.background = 'rgb(238, 34, 44)';
        document.getElementById('nivel2').innerHTML = 'Maximo';
        document.getElementById('nivel2').style.color = 'rgb(238, 34, 44)';
    }
}

function card3(){
    var num = (Math.random() * 30) + 1;
    document.getElementById('random3').innerHTML = num.toFixed(2);

    if(num>= 1 && num<=10){
        document.getElementById('icone3').innerHTML = 'warning';
        document.getElementById('circle3').style.background = 'rgb(238, 34, 44)';
        document.getElementById('nivel3').innerHTML = 'Baixo';
        document.getElementById('nivel3').style.color = 'rgb(238, 34, 44)';
    }else if(num>=11 && num<=18){
        document.getElementById('icone3').innerHTML = 'add_alert';
        document.getElementById('circle3').style.background = '#0078d7';
        document.getElementById('nivel3').innerHTML = 'Médio';
        document.getElementById('nivel3').style.color = '#0078d7'; 
    }else if(num>=19 && num<=23){
        document.getElementById('icone3').innerHTML = 'check_circle';
        document.getElementById('circle3').style.background = 'rgb(35, 197, 62)';
        document.getElementById('nivel3').innerHTML = 'Ideal';
        document.getElementById('nivel3').style.color = 'rgb(35, 197, 62)'; 
    }else if(num>=24 && num<=25){
        document.getElementById('icone3').innerHTML = 'cancel';
        document.getElementById('circle3').style.background = 'rgb(255,165,36)';
        document.getElementById('nivel3').innerHTML = 'Alto';
        document.getElementById('nivel3').style.color = 'rgb(255,165,36)';
    }else{
        document.getElementById('icone3').innerHTML = 'warning';
        document.getElementById('circle3').style.background = 'rgb(238, 34, 44)';
        document.getElementById('nivel3').innerHTML = 'Maximo';
        document.getElementById('nivel3').style.color = 'rgb(238, 34, 44)';
    }
}

function card4(){
    var num = (Math.random() * 30) + 1;
    document.getElementById('random4').innerHTML = num.toFixed(1);

    if(num>= 1 && num<=10){
        document.getElementById('icone4').innerHTML = 'warning';
        document.getElementById('circle4').style.background = 'rgb(238, 34, 44)';
        document.getElementById('nivel4').innerHTML = 'Baixo';
        document.getElementById('nivel4').style.color = 'rgb(238, 34, 44)';
    }else if(num>=11 && num<=18){
        document.getElementById('icone4').innerHTML = 'add_alert';
        document.getElementById('circle4').style.background = '#0078d7';
        document.getElementById('nivel4').innerHTML = 'Médio';
        document.getElementById('nivel4').style.color = '#0078d7'; 
    }else if(num>=19 && num<=23){
        document.getElementById('icone4').innerHTML = 'check_circle';
        document.getElementById('circle4').style.background = 'rgb(35, 197, 62)';
        document.getElementById('nivel4').innerHTML = 'Ideal';
        document.getElementById('nivel4').style.color = 'rgb(35, 197, 62)'; 
    }else if(num>=24 && num<=25){
        document.getElementById('icone4').innerHTML = 'cancel';
        document.getElementById('circle4').style.background = 'rgb(255,165,36)';
        document.getElementById('nivel4').innerHTML = 'Alto';
        document.getElementById('nivel4').style.color = 'rgb(255,165,36)';
    }else{
        document.getElementById('icone4').innerHTML = 'warning';
        document.getElementById('circle4').style.background = 'rgb(238, 34, 44)';
        document.getElementById('nivel4').innerHTML = 'Maximo';
        document.getElementById('nivel4').style.color = 'rgb(238, 34, 44)';
    }
}
setInterval(card1, 5000);
setInterval(card2, 4000);
setInterval(card3, 4000);
setInterval(card4, 5000);

