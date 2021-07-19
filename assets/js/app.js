function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function meatUno() {
    var x = document.getElementById("mySelect");
    var option = document.createElement("option");


    option.text = "Meat #1";
    var btn = document.createElement("button");
    btn.innerHTML = "";
    option.appendChild(btn);

    x.add(option);




    var precio1 = 400;
    document.getElementById("totalNum").innerHTML = "$ " + precio1;

    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;

}


function meatDos() {
    var x = document.getElementById("mySelect");
    var option = document.createElement("option");

    option.text = "Meat #2";

    x.add(option);


    var precio2 = 300;
    document.getElementById("totalNum").innerHTML = "$ " + precio2;

    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

function meatTres() {
    var x = document.getElementById("mySelect");
    var option = document.createElement("option");
    option.text = "Meat #3";
    x.add(option);

    var precio3 = 100;
    document.getElementById("totalNum").innerHTML = "$ " + precio3;

    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;

    return precio3
}



function vaciar() {
    var select = document.getElementById("mySelect");
    var length = select.options.length;
    for (i = length - 1; i >= 0; i--) {
        select.options[i] = null;
    }
    var precio = 0;
    document.getElementById("totalNum").innerHTML = "$ " + precio;

    clicks = 0;
    document.getElementById("clicks").innerHTML = clicks;
}

var clicks = 0;






var precio = 0;
document.getElementById("totalNum").innerHTML = "$ " + precio;