for (let index = 0; index < 10; index++) {
    console.log(index);
    
}


function saludar(){
    var user = document.getElementById("txtUser").value;
    var pass = document.getElementById("txtPass").value;
    alert("Te damos la bienvenida!" + user);
    console.log("Tu constraseña es: " + pass);
}

function sumar(){
    var n1 = parseInt(document.getElementById("txtUser").value);
    var n2 = parseInt(document.getElementById("txtPass").value);
    console.log("La suma es: " + (n1+n2)); 
    alert("El resultado es: " + (n1+n2));

}
