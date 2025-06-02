// DATE : data yang berhubungan dengan waktu dan didapatkan dari class constructor javascript

let now:Date = new Date(); // class constructor date 
console.log(now.toUTCString())
console.log(now.toISOString())
console.log(now.toLocaleString("id"))
console.log(now.toLocaleTimeString("id"))
console.log(now.toLocaleDateString("id"))
// biasanya dipakai untuk Database

console.log(now.getFullYear()) //Untuk dapatkan tahun terkini
console.log(now.getMonth()) //Untuk dapatkan bulan terkini dibaaca dari bulan 0 s/d 11 bukan 0 s/d 12
console.log(now.getHours()) //Untuk dapatkan tahun terkini
console.log(now.getMinutes()) //Untuk dapatkan tahun terkini
console.log(now.getSeconds()) //Untuk dapatkan tahun terkini
console.log(now.getTime()); //Satuannya ms/milisekon. dihitung dari tahun 1670 biasanya untuk tahu selisih waktu. Ex. selisih tanggal
