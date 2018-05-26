var SerialPort = require('serialport');
//Cambiar el numero o nombre del puerto usb
var miSerial = new serialport("COM3", {
  baudRate: 9600,
  autoOpen: true
});



var Sensor1 = 0;
var contador1 = 0;
var contador2 = 0;
var Sensor1Tmp = 0;
var Estado = 0;
var Sensor2 = 0;
var Sensor2Tmp = 0;

miSerial.on('data', function(data) {
  console.log("Valor 1 " + Sensor1 + " Valor 2 " + Sensor2);
  for (var i = 0; i < data.length; i++) {
    switch (Estado) {
      case 0:
        if (data[i] == 97) {
          Estado = 1;
          Sensor1Tmp = 0;
        } else if (data[i] == 100) {
          Estado = 2;
          Sensor2Tmp = 0;
        }
        break;
      case 1:
        if (data[i] == 99) {
          Sensor1 = Sensor1Tmp;
          Estado = 0;
          var dataSensor1[contador1]= sensor1;
          contador1++;
          if(c > 100){
            contador1=0;
            console.log("valores: " + dataSensor1);
          }
          //console.log("El Valor es:" + Sensor1);
        } else {
          Sensor1Tmp = Sensor1Tmp * 10 + data[i];
        }
        break;
      case 2:
        if (data[i] == 101) {
          Sensor2 = Sensor2Tmp;
          Estado = 0;
          var dataSensor2[c]= sensor2;
          contador2++;
          if(contador2 > 100){
            contador2=0;
            console.log("valores: " + dataSensor2);}
          //console.log("El Valor es:" + Sensor1);
        } else {
          Sensor2Tmp = Sensor2Tmp * 10 + data[i];
        }
        break;
    }
  }
});

  const Neurona = new brain.NeuralNetwork();
  Neurona.train([
    {input:{dataSensor1,dataSensor2}, output: {regar:1}},
  ]);

  var Resultado = brain.likely(Neurona);
  console.log("Resultado "+ Resultado);
