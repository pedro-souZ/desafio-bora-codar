const colorPreview = document.querySelector(".preview");
const colorSlider = document.getElementById("hue-slider");
const brightnessSlider = document.getElementById("brightness-slider");
const contrastSlider = document.getElementById("contrast-slider");

colorSlider.addEventListener("input", function () {
  const hue = this.value; // esse value é o valor que defini no html

  //conforme eu vou alterando o input o valor vai sendo alterado também
  const color = `hsl(${hue},100%,50%)`; // 100% -> brilho /50% -> contraste

  // mudando o estilo de acordo com o movimento do input
  colorPreview.style.backgroundColor = color;
  colorPreview.style.boxShadow = `0px 0px 53px 13px ${color}`;
});

brightnessSlider.addEventListener("input", function () {
  const brightness = this.value;
  colorPreview.style.filter = `brightness(${brightness}%)`;
});

contrastSlider.addEventListener("input", function () {
  const contrast = this.value;
  colorPreview.style.filter = `contrast(${contrast}%)`;
});
