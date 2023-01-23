var audio, context, analyser, src, array, logo;

logo = document.getElementById("logo").style;

audio = document.getElementById("audio");

window.onclick = function () {
    preparation();
    audio.play();
}
//старт визуализации
function preparation() {
    context = new AudioContext();
    analyser = context.createAnalyser();
    src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);
    loop();
}
function loop() {
    window.requestAnimationFrame(loop);
    array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);

    logo.minHeight = (array[40]) + "px";
    logo.width = (array[40]) + "px";
}