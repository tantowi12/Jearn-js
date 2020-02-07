var tanya = true;
while (tanya) {
    //menangkap pilihan pemain
    var p = prompt('pilih : gajah, semut, orang');

    //menangkap pilihan komputer
    //membangkitkan bilangan ranom
    var comp = Math.random();

    if ( comp < 0.34 ) {
        comp = 'gajah';
    } else if ( comp >= 0.34 && comp < 0.67 ) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    //menentukan rules
    if( p == comp ) {
        hasil = 'seri:';
    } else if ( p == 'gajah' ) {
        hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    } else if ( p == 'orang' ) {
        hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG';
    } else if ( p == 'semut' ) {
        hasil = ( comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'memasukan plihan yang salah';
    }

    //tampilan hasilnya
    alert( 'Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil );

    tanya = confirm('lagi?');

}