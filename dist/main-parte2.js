document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  //Leer json de imágenes
  function cargarImg() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./json/img-l467.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        // console.log(datos);
        const compania = document.getElementById('compania')
        compania.innerHTML = ''
  
        datos.map(function(imagen){
          compania.innerHTML += `
            <div id="${imagen.id}" class="foto-onza">
              <img src="${imagen.img}" alt="${imagen.id}" />
              <div class="descripcion">
                <p>${imagen.desc}</p>
              </div>
            </div>
          `
        })
      }
    };
  }
  
  window.onload = cargarImg;
  