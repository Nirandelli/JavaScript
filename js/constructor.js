var automovil =  new Automovil(100);

function Automovil(gasolina, kilometraje) {
  var test = this.gasolina = prompt('Cuanta gasolina tiene');
  var test2 = this.kilometraje = prompt('Cuantos kilometros avanzara');
  var res = test - test2;

  console.log('Le quedan ' + res + ' litros de gasolina');
   return res;
}

console.log(automovil);


/*function Auto(gasolina) {
  this.gasolina = gasolina;
  //this.kilometraje = Kilometraje;
}

Auto.prototype.Coche = function() {
  alert ('Gasolina ' + this.gasolina);
};

var automovil = new Auto(100);



//funciona con evento
/*function Taxi (tipoMotor) {
this.tipoMotor = tipoMotor;
alert('Se ha creado un objeto taxi con tipo motor: ' + this.tipoMotor);
this.getCapacidad = function () { if (tipoMotor == 'Diesel') { return 40;} else {return 35;} }
}
function ejemploObjetos() {
var coche1 = new Taxi('Diesel');
var coche2 = new Taxi('Gasolina');
alert ('El coche 1 tiene capacidad ' + coche1.getCapacidad() + ' litros\n');
alert ('El coche 2 tiene capacidad ' + coche2.getCapacidad() + ' litros\n');
}*/
