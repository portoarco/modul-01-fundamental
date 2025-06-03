// FUNCTION 

/**
 * Definisi: sekumpulan program yang disatukan untuk mengerjakan proses khusus yg biasa bersifat re-usable / bisa dipakai ulang di tempat yang berbeda (bisa di berbeda baris/ dipakai di file yang berbeda)
 * Kategori : Built-in function (fungsi bawaan) dan user-defined function (fungsi yang kita buat sendiri)
 * Aturan Penulisan:
 *  - Penamaan function mengikuti aturan nama variable 
 *  - Bisa menerima parameter/argumen(penampung dari function untuk menerima nilai dari luar function)
 *  - Function biasanya menghasilkan nilai output melalui keyword return didalamnya
 *  - Opsi penulisan bisa menggunakan Declarative Func, Function Expression atau Arrow Function 
 *  - 
 */

// Contoh Tanpa Function
// INPUT : dua variabel yang menampung data untuk dijumlahkan 
    let angkaA:number = 10;
    let angkaB:number = 13;
// PROCESS : memproses penjumlahan kedua variabel 
    const hasill:number = angkaA + angkaB;
// OUTPUT : menampilkan hasil penjumlahan
    console.log(hasill);

// Buat Kode di atas menjadi Declarative Function 
/**
 * Declarative func:
    function namaFunction(param1, param2, ...){
        // code
    }
 * 
 */ 

// FUNCTION NON-REUSABLE
    function penjumlahan(){
        let angkaA:number = 2;
        let angkaB:number = 5;

        const hasilJumlah:number = angkaA + angkaB;

        return hasilJumlah; 
        //return untuk mengeluarkan nilai hasil dalam function supaya bisa keluar dari function
    }

    // Menggunakan Function
    penjumlahan(); // kalo kayak gini cuman manggil aja tapi gak ditampilkan
    
    // Ditampilkan langsung
    console.log(penjumlahan()); //menampilkan hasil

    // Ada juga model ditampung dulu di variabel
    let printPenjumlahan = penjumlahan();
    console.log(printPenjumlahan);
    
// REUSABLE FUNCTION / FUNCTION WITH PARAMETER
    // parameter : penampung yang nampung nilai dari luar fungsi untuk dimasukkan ke dalam fungsi 
    // parameter harus dideklarasikan di dalam kurung
    function pengurangan(angkaA:number, angkaB:number){
        const hasilKurang:number = angkaA-angkaB;
        return hasilKurang;
    }

    console.log(pengurangan(5,2));
    



        
    

    
    