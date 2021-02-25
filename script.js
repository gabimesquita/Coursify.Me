//------------Set Image---------------------------------------------------------------------

function setImage() {
  var settings = {
    primeiraImg: function () {
      elemento = document.querySelector("#slider a:first-child");
      elemento.classList.add("ativo");
      this.legenda(elemento);
    },

    //------------Carousel Function-------------------------------------------------------------

    slide: function () {
      elemento = document.querySelector(".ativo");
      if (elemento.nextElementSibling) {
        elemento.nextElementSibling.classList.add("ativo");
        settings.legenda(elemento.nextElementSibling);
        elemento.classList.remove("ativo");
      } else {
        elemento.classList.remove("ativo");
        settings.primeiraImg();
      }
    },

    //------------Next Image--------------------------------------------------------------------

    proximo: function () {
      clearInterval(intervalo);
      elemento = document.querySelector(".ativo");
      if (elemento.nextElementSibling) {
        elemento.nextElementSibling.classList.add("ativo");
        settings.legenda(elemento.nextElementSibling);
        elemento.classList.remove("ativo");
      } else {
        elemento.classList.remove("ativo");
        settings.primeiraImg();
      }

      intervalo = setInterval(settings.slide, 4000);
    },

    //------------Previous Image----------------------------------------------------------------

    anterior: function () {
      clearInterval(intervalo);
      elemento = document.querySelector(".ativo");
      if (elemento.previousElementSibling) {
        elemento.previousElementSibling.classList.add("ativo");
        settings.legenda(elemento.previousElementSibling);
        elemento.classList.remove("ativo");
      } else {
        elemento.classList.remove("ativo");
        elemento = document.querySelector("a:last-child");
        elemento.classList.add("ativo");
        this.legenda(elemento);
      }

      intervalo = setInterval(settings.slide, 4000);
    },

    legenda: function (obj) {
      var legenda = obj.querySelector("img").getAttribute("alt");
      document.querySelector("figcaption").innerHTML = legenda;
    },
  };

  //------------Slide--------------------------------------------------------------------------

  settings.primeiraImg();

  //------------Set Slide Time-----------------------------------------------------------------

  var intervalo = setInterval(settings.slide, 4000);
  document
    .querySelector(".next")
    .addEventListener("click", settings.proximo, false);
  document
    .querySelector(".prev")
    .addEventListener("click", settings.anterior, false);
}

window.addEventListener("load", setImage, false);

//------------Form--------------------------------------------------------------------

function mostrar(id) {
  if (document.getElementById(id).style.display !== "none") {
    document.getElementById(id).style.display = "none";
    return;
  }
  Array.from(document.getElementsByClassName("hidden")).forEach(
    (div) => (div.style.display = "none")
  );
  document.getElementById(id).style.display = "block";
}
