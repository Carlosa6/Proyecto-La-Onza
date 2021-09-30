$.getJSON("./json/lang.json", function(json){
  if(!localStorage.getItem("lang")){
    localStorage.setItem("lang", "en");
  }
  var lang = localStorage.getItem("lang");
  var doc = json;
  $('.lang').each(function(index, element){
    $(this).text(doc[lang][$(this).attr('key')]);
  });//Each

  $('.translate').click(function(){
    localStorage.setItem("lang", $(this).attr('id')) ;
    var lang = $(this).attr('id');
    var doc = json;
      $('.lang').each(function(index, element){
        $(this).text(doc[lang][$(this).attr('key')]);
      }); //Each
  }); //Funcion click
});//Get json AJAX




// var dictionary = {
//   inicio:{
//     eng: "Home",
//     esp:"Inicio"
//   },
//   compania:{
//     eng:"Company",
//     esp:"Compañía"
//   },
//   historia:{
//     eng: "History",
//     esp:"Historia"
//   },
//   actualidad:{
//     eng: "Actuality",
//     esp:"Actualidad"
//   },
//   contactanos:{
//     eng: "Contact us",
//     esp:"Contáctanos"
//   },
//   direccion:{
//     esp:"Dirección",
//     eng:"Address"
//   },
//   enlaces:{
//     esp:"Enlaces",
//     eng:"Links"
//   },
//   contacto:{
//     esp:"Contacto",
//     eng:"Contact"
//   },

//   titulo:{
//     esp:"Proyecto La onza",
//     eng:"The Ounce Project"
//   },
//   img1:{
//      esp:"Ver más imágenes",
//      eng:"See more images"
//   },
//   img2:{
//     esp:"Ver más imágenes",
//     eng:"See more images"
//  },
//  img3:{
//   esp:"Ver más imágenes",
//   eng:"See more images"
// },
// img4:{
//   esp:"Ver más imágenes",
//   eng:"See more images"
// },
// img5:{
//   esp:"Ver más imágenes",
//   eng:"See more images"
// },
// accesos:{
//   esp:"Accesos",
//   eng:"Access"
// },
// campamento:{
//   esp:"Campamento",
//   eng:"Camp"
// },
// geologia:{
//   esp:"Geologia",
//   eng:"Geology"
// },
// geología_muestreo:{
//   esp:"Geología Muestreo",
//   eng:"Geology Sampling"
// },
// perforación_DHH:{
//   esp:"Perforación DHH",
//   eng:"DHH drilling"
// },
// actualidad:{
//    esp:"Actualidad",
//    eng:"Present"
// },
// titulo2:{
//   esp:"Siembre y entrega de pinos a la comunidad Victoria",
//   eng:"Plant and deliver pines to the Victoria community"
// },
// contáctanos:{
//     esp:"Contáctanos",
//     eng:"contact us"
// },
// direccion:{
//   esp:"Dirección",
//   eng:"Address"
// },
// correo:{
//   esp:"Correo",
//   eng:"Mail"
// },
// telefono:{
//   esp:"Telefono",
//   eng:"Telephone"
// }

// };
// var langs = ["esp", "eng"];
// var current_lang_index = 0;
// var current_lang = langs[current_lang_index];

// window.change_lang = function () {
//   current_lang_index = ++current_lang_index % 2;
//   current_lang = langs[current_lang_index];
//   document.getElementById('idioma').textContent = current_lang;
//   translate();
// };

// function translate() {
//   $("[data-translate]").each(function () {
//     var key = $(this).data("translate");
//     $(this).html(dictionary[key][current_lang] || "N/A");
//   });

// }

// translate();
