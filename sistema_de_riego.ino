int Sensor1 = A1;
int Sensor2 = A0;

void setup() {
  pinMode(Sensor1, INPUT);
  pinMode(Sensor2, INPUT);
  Serial.begin(9600);
}
int Residuo[4] = {0, 0, 0, 0};

void loop() {
  int Valor1 = analogRead(Sensor1);
  int Valor2 = analogRead(Sensor2);
  //Sensor 1 1234 4 3 2 1 
  for (int i = 0; i <= 3; i++) {
    Residuo[i] = Valor1 % 10;
    Valor1 = Valor1 / 10;
  }

  Serial.write('a');
  for (int i = 3; i >= 0; i--) {
    Serial.write(Residuo[i]);
  }
  Serial.write('c');


  //Sensor 2
  for (int i = 0; i <= 3; i++) {
    Residuo[i] = Valor2% 10;
    Valor2 = Valor2 / 10;
  }
  Serial.write('d');
  for (int i = 3; i >= 0; i--) {
    Serial.write(Residuo[i]);
  }
  Serial.write('e');
  //Serial.println();
  delay(1000);
}
