var listado= document.querySelector("#listado");
for (var i = 0; i < 10; i++) {
  //10[i]
  listado.innerHTML += '<li>hola</li>'
}
// funciones de tiempo
var segundos=0;
var tiempo= document.querySelector('#tiempo');
setInterval(function(){
  segundos++
  tiempo.innerHTML = segundos;
  //console.log(segundos+=1);
},1000);

setTimeout(function(){
  alert("hola");
},5000);
