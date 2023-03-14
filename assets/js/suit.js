function suit() {
    let suit=prompt('Ayok Bertarung Suit!!','Batu/Gunting/Kertas');
    let comp = Math.floor(Math.random()*3);
    // let comp = 1;
    let lawan;
    let text;
    if (comp == 0) {
        lawan = "Batu";
        if (suit == "Batu" && lawan == "Batu") {
            alert('Anda Seri');
            text = "Anda Seri berikut hasilnya : <br> Anda  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Kertas" && lawan == "Batu") {
            alert('Anda Menang');
            text = "Anda Menang berikut hasilnya : <br> Anda  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Gunting" && lawan == "Batu") {
            alert('Anda Kalah');
            text = "Anda Kalah berikut hasilnya : <br> Anda  = "+suit+"<br> Computer = "+lawan;
        }
        document.getElementById("hasil").innerHTML = text;
    }
    if (comp == 1) {
        lawan = "Kertas";
        if (suit == "Batu" && lawan == "Kertas") {
            alert('Anda Kalah');
            text = "Anda Kalah berikut hasilnya : <br> Anda  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Kertas" && lawan == "Kertas") {
            alert('Anda Seri');
            text = "Anda Seri berikut hasilnya : <br> Anda  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Gunting" && lawan == "Kertas") {
            alert('Anda Menang');
            text = "Anda Menang berikut hasilnya : <br> Anda  = "+suit+"<br> Computer = "+lawan;
        }
        document.getElementById("hasil").innerHTML = text;
    }
    if (comp == 2) {
        lawan = "Gunting";
        if (suit == "Batu" && lawan == "Gunting") {
            alert('Anda Menang');
            text = "Anda Menang berikut hasilnya : <br> Anda  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Kertas" && lawan == "Gunting") {
            alert('Anda Kalah');
            text = "Anda Kalah berikut hasilnya : <br> Anda  = "+suit+"<br> Computer = "+lawan;
        }else if (suit == "Gunting" && lawan == "Gunting") {
            alert('Anda Seri');
            text = "Anda Seri berikut hasilnya : <br> Anda  = "+suit+"<br> Computer = "+lawan;
        }
        document.getElementById("hasil").innerHTML = text;
    }
    // console.log(comp);
}