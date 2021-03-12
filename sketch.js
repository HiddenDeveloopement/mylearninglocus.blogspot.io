var b1, b2, b3, b4, b5, b6, b7, b8, garden;

function setup() {
  createCanvas(400, 400);
  b1 = new Building()
  b2 = new Building()
  b3 = new Building()
  b4 = new Building()
  b5 = new Building()
  b6 = new Building()
  b7 = new Building()
  b8 = new Building()
  garden = new Building()
}

function draw() {
  let yellow_color = color(255, 204, 0);

  background(25, 25, 112);
  b1.position = 0.5;
  b1.display();
  b2.position = 2;
  b2.floors = 30;
  b2.display()

  b3.position = 3.5;
  b3.floors = 40;
  b3.display()

  b4.position = 5;
  b4.floors = 20;
  b4.display()
  garden.position = 6.2
  garden.floors = 0.5
  garden.width = 75;
  fill(34, 139, 34)
  stroke(0, 100, 0)
  garden.display()
  b5.position = 9.5;
  b5.floors = 35;
  b5.display()
  b6.position = 11;
  b6.floors = 18;
  b6.display()
  b7.position = 12.5;
  b7.floors = 4;
  b7.display()
  b8.position = 14;
  b8.floors = 23;
  b8.display()
}