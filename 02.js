class mobil{
//konstruktor untuk inisialisasi objek
constructor (merek,model,tahun) {
this.merek = merek; //properti objek
this.model = model;
this.tahun = tahun;
}
//metode untuk menampilkan indormasi mobil 
displayinfo(){
console.log ( mobil:${this.merek}${this.model}
(${this.tahun})');
}
}
//instasiasi objek dari kelas mobil
const mobil = new mobil('toyota','corolla',2020);//
membuat objek mobil1
const mobil2 = new mobil('honda','civic',2021); //
membuat objek mobil2
// memanggil metode untuk menampilkan informasi 
mobil1.displayinfo(); // output:mobil:toyota corolla(2020)
mobil2.displayinfo(); // output:mobil:honda civic(2021)

class Kendaraan {
  constructor(jenis) {
    this.jenis = jenis;
  }
}

class Mobil extends Kendaraan {
  constructor(merek, model, tahun) {
    super('Mobil'); // Memanggil konstruktor kelas induk
    this.merek = merek;
    this.model = model;
    this.tahun = tahun;
  }
}

class Hewan {
  speak() {
    console.log("Hewan berbicara");
  }
}

class Anjing extends Hewan {
  speak() {
    console.log("Anjing menggonggong");
  }
}

let hewan1 = new Hewan();
let hewan2 = new Anjing();

hewan1.speak(); // Output: Hewan berbicara
hewan2.speak(); // Output: Anjing menggonggong
