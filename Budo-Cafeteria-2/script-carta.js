document.getElementById('toggleCarta').addEventListener('click', function() {
    var carta = document.getElementById('carta1');
    carta1.classList.toggle('visible');
    carta2.classList.remove('visible');
    carta3.classList.remove('visible');
    carta4.classList.remove('visible');
    carta5.classList.remove('visible');
});


document.getElementById('toggleCarta2').addEventListener('click', function() {
    var carta2 = document.getElementById('carta2');
    carta2.classList.toggle('visible');
    carta1.classList.remove('visible');
    carta3.classList.remove('visible');
    carta4.classList.remove('visible');
    carta5.classList.remove('visible');
});


document.getElementById('toggleCarta3').addEventListener('click', function() {
    var carta3 = document.getElementById('carta3');
    carta3.classList.toggle('visible');
    carta2.classList.remove('visible');
    carta1.classList.remove('visible');
    carta4.classList.remove('visible');
    carta5.classList.remove('visible');
});


document.getElementById('toggleCarta4').addEventListener('click', function() {
    var carta4 = document.getElementById('carta4');
    carta4.classList.toggle('visible');
    carta2.classList.remove('visible');
    carta3.classList.remove('visible');
    carta1.classList.remove('visible');
    carta5.classList.remove('visible');
});


document.getElementById('toggleCarta5').addEventListener('click', function() {
    var carta5 = document.getElementById('carta5');
    carta5.classList.toggle('visible');
    carta2.classList.remove('visible');
    carta3.classList.remove('visible');
    carta4.classList.remove('visible');
    carta1.classList.remove('visible');
});