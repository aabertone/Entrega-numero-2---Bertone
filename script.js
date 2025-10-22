// funcion que muestra el dinero restante
function mostrarapuesta(apuesta){
  let apuestashow = document.getElementById('apuesta')
  apuestashow.innerHTML = `
  <h2>Dinero restante:</h2>
  <p>${apuesta}</p>
  `;
}
// funcion para reiniciar el juego
function reiniciarjuego(){
  let apuestashow = document.getElementById('apuesta');
  let datosjugador1 = document.getElementById('form1');
  let adivinar = document.getElementById('form2');
  localStorage.removeItem('nombrejugador');
  localStorage.removeItem('numerorandom');
  adivinar.innerHTML = ``;
  datosjugador1.innerHTML = ``;
  apuestashow.innerHTML = ``;
  botonjugar.disabled = false;
}

// Genera el forumulario e inicia la secuencia maestra del juego
let botonjugar = document.getElementById('botonjugar');
botonjugar.addEventListener('click', function(){

let datosjugador1 = document.getElementById('form1')

datosjugador1.innerHTML = `
<form>
  <label for="nombre1">Nombre Jugador:</label>
  <input type="text" id="nombre1" name="nombre1"><br><br>
  <label for="apuesta">Apuesta: Entre $1 y 100$</label>
  <input type="number" id="apuestavalor" name="apuesta"><br><br>
  <input type="submit" value="Enviar" id="enviar1">
</form>
`;
;
datosjugador1.addEventListener('submit', function(event){
event.preventDefault();})
botonjugar.disabled = true;
// Comprobaciones, generacion de numero random y almacenamiento de datos  
let jugar = document.getElementById('enviar1');
jugar.addEventListener('click', function(){
    const nombre1 = document.getElementById('nombre1').value;
    let apuesta = document.getElementById('apuestavalor').value;
    if(!nombre1 || !isNaN(nombre1)){
        Swal.fire({
          icon: "warning",
          title: "Intentalo de nuevo",
          text: "Debes ingresar un nombre valido",
          });
        return;
    }
    if(!apuesta || isNaN(apuesta) || apuesta <= 0 || apuesta > 100){
      Swal.fire({
          icon: "warning",
          title: "Intentalo de nuevo",
          text: "Debes ingresar una apuesta valida",
          });
      return;
    }
  jugar.disabled = true;
    localStorage.setItem('nombrejugador', JSON.stringify(nombre1));
    const numerorandom = Math.floor(Math.random() * 21); //genera un numero random entre 0 y 20
    console.log("El numero a adivinar es: " + numerorandom);
    localStorage.setItem('numerorandom', JSON.stringify(numerorandom));

    //Genera los campos para jugar
    let adivinar = document.getElementById('form2')
    adivinar.innerHTML = `
    <h2>Adivina el numero</h2>
    <p>Bienvenido ${nombre1} ingrese el numero</p>
    <input class="input" type="number" id="adivina" name="adivina" min="0" max="20" required><br><br>
    <input type="submit" value="Adivinar" id="botonadivina">
    <p>El numero a adivinar es entre 0 y 20</p>
    <span>Tiempo:</span>
    <span id="contador">60</span>
    `;
    mostrarapuesta(apuesta);
    // Contador de tiempo
    let contador = 60;
    const contadorElemento = document.getElementById("contador");
    function actualizarContador() {
      contador--;
      contadorElemento.textContent = contador;
      if (contador <= 0) {
    clearInterval(intervalo);
    Swal.fire({
          icon: "error",
          title: "Se termino el tiempo lo siento",});
    reiniciarjuego();
    return;
        }
    }
    const intervalo = setInterval(actualizarContador, 1000)
    // Logica del juego
    document.getElementById('botonadivina').addEventListener('click', function(){
      if(document.getElementById('adivina').value == numerorandom){
        Swal.fire({
          icon: "success",
          text: "Felicidades " + nombre1 + " has adivinado el numero!",
        });
          clearInterval(intervalo);
          reiniciarjuego();
          return;
        }
        else{
          apuesta = apuesta - 10
          Swal.fire({
            icon: "error",
            toast: true,
            timer: 1200,
            showConfirmButton: false,
            position: "center-end",
            text: "Lo siento " + nombre1 + " no has adivinado el numero, vuelve a intentarlo"});
        }
          mostrarapuesta(apuesta);

          //eliminacion de datos y reinicio del juego si no hay dinero
          if(apuesta <= 0){
            Swal.fire("Lo siento " + nombre1 + " te has quedado sin dinero, el juego terminado");
            clearInterval(intervalo);
            reiniciarjuego();
            return;
          }
      })
})
})

