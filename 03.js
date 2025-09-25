class Mahasiswa {
  constructor(nama, nim, kelas, jurusan, fakultas) {
    this.nama = nama;       
    this.nim = nim;         
    this.kelas = kelas;     
    this.jurusan = jurusan; 
    this.fakultas = fakultas; 
  }

  
  displayInfo() {
    console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Kelas: ${this.kelas}, Jurusan: ${this.jurusan}, Fakultas: ${this.fakultas}`);
  }
 
  absen() {
    console.log(`${this.nama} sudah mengisi daftar hadir.`);
  }
}

class MahasiswaS1 extends Mahasiswa {
  constructor(nama, nim, kelas, jurusan, fakultas, skripsi) {
    super(nama, nim, kelas, jurusan, fakultas);
    this.skripsi = skripsi;
  }

  
  bimbingan() {console.log(`${this.nama} sedang bimbingan skripsi dengan judul: "${this.skripsi}"`);}
}

// Class Anak 2
class MahasiswaS2 extends Mahasiswa {
  constructor(nama, nim, kelas, jurusan, fakultas, tesis) {
    super(nama, nim, kelas, jurusan, fakultas);
    this.tesis = tesis;
  }

  
  penelitian() {
    console.log(`${this.nama} sedang penelitian tesis: "${this.tesis}"`);
  }
}

const mhs1 = new Mahasiswa(
  "zei", "0006", "A", "manajemen", "keuangan"
);
mhs1.displayInfo();
mhs1.absen();

const mhs2 = new MahasiswaS1(
  "tiara", "0007", "B", "kedokteran", "FTI", "Sistem Pakar untuk Kesehatan"
);
mhs2.displayInfo();
mhs2.bimbingan();

const mhs3 = new MahasiswaS2(
  "aliqa", "0008", "C", "akuntansi", "FTI", "ms excel"
);
mhs3.displayInfo();
mhs3.penelitian();
