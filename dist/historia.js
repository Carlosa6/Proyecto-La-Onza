  //Leer json de imágenes
  function cargarImgCampamento() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./json/historia-campamento.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        // console.log(datos);
        const compania = document.getElementById('slide-campamento')
        compania.innerHTML = ''
  
        datos.map(function(imagen){
          compania.innerHTML += `
            <div id="${imagen.id}" class="swiper-slide">
              <img src="${imagen.img}" alt="${imagen.id}" />
            </div>
          `
        })
      }
    };
  }

  function cargarImgGeologia() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./json/historia-geologia.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        // console.log(datos);
        const compania = document.getElementById('slide-geologia')
        compania.innerHTML = ''
  
        datos.map(function(imagen){
          compania.innerHTML += `
            <div id="${imagen.id}" class="swiper-slide">
              <img src="${imagen.img}" alt="${imagen.id}" />
            </div>
          `
        })
      }
    };
  }





