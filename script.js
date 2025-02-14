const btnTopo = document.getElementById("btnTopo");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

btnTopo.onclick = function() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
};