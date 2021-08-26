var dictionary = {
  greet: {
    eng:
      "La Onza is a mining project that began in 2016 with the exploration of 11 mineralized veins, reaching" +
      "to 25 today. It is located in the department of La Libertad, province of Pataz, district of" +
      "Tayabamba, La Victoria peasant community, within the geotectonic unit of the Cordillera" +
      "Oriental; It comprises 4,211 hectares of mining claims whose owner is Compañía Minera La Onza S.A. ",

    esp:
      "La Onza es un proyecto minero que inició el año 2016 con el cateo de 11 vetas mineralizadas, llegando" +
      "a 25 en la actualidad. Se ubica en el departamento de La Libertad, provincia de Pataz, distrito de" +
      "Tayabamba, comunidad campesina La Victoria, dentro de la unidad geotectónica de la Cordillera" +
      "Oriental; comprende 4211 hectáreas de denuncios mineros cuyo titular es Compañía Minera La Onza S.A.",
  },
  greet21:{
    esp:"En la actualidad La Onza se encuentra en la fase de prefactibilidad (exploración local), durante la cual se realizó:",
    eng:"La Onza is currently in the pre-feasibility phase (local exploration), during which it was carried out:"
  },
  greet22:{
    eng:"Geological mapping at local scale, over 730 hectares;",
    esp:"Cartografiado geológico a escala local, a lo largo de 730 hectáreas;"
  },
  greet23:{
    eng:"Rock sampling on surface over 1600 hectares, mining and diamond drilling, obtaining a total of 637 samples (including 52 QA/QC samples), identifying mineralized veins with values up to 105.65 g/t Au @ 0.50 m (sample 8534);",
    esp:"Muestreo de rocas en superficie a lo largo de 1600 hectáreas, cateos mineros y sondajes diamantinos, obteniendo un total de 637 muestras (incluye 52 muestras QA/QC), identificando vetas mineralizadas con valores de hasta 105,65 g/t Au @ 0,50 m (muestra 8534);"
  },
  greet24:{
    eng:"Topographic survey of an approximate area of 9000 m2 (including mining surveys) and remote sensing of an approximate area of 21 km2;",
    esp:"Levantamiento topográfico de un área aproximada de 9000 m2 (incluyendo cateos mineros) y sensores remotos de un área aproximada de 21 km2;"
  },
  greet25:{
    eng:"Metallurgical tests on two groups of samples, one of oxides and the other of sulfides, obtaining in both cases recoveries between 83 and 91%, with an optimum consumption of reagents;",
    esp:"Pruebas metalúrgicas, de dos grupos de muestras, uno de óxidos y otro de sulfuros, obteniendo en ambos casos recuperaciones de entre 83 y 91%, con un consumo óptimo de reactivos;"
  },
  greet26:{
    eng:"Geophysics, using induced polarization and magnetometry methods, along 10.5 km (21 lines of 500 m), from which potential zones of interest were identified and used to define the diamond drilling program;",
    esp:"Geofísica, usando los métodos de polarización inducida y magnetometría, a lo largo de 10,5 km (21 líneas de 500 m), a partir de la cual se identificaron posibles zonas de interés que sirvieron para definir el programa de perforación diamantina;"
  },
  greet27:{
    eng:"Drilling of 3 diamond drill holes, with 1120 m drilled in total, recognizing mineralized veins with values up to 6.7 g/t Au @ 0.55 m (sample 8651 from drill hole DDH-LO18-01);",
    esp:"Perforación de 3 sondajes diamantinos, con 1120 m perforados en total, reconociendo vetas mineralizadas con valores de hasta 6,7 g/t Au @ 0,55 m (muestra 8651 del sondaje DDH-LO18-01);"
  },
  greet28:{
    eng:"TerraSpec spectrometry of 42 samples of altered rock, resulting in the marked presence of chloritic alteration and to a lesser degree carbonatization, silicification and sericitization;",
    esp:"Espectrometría con TerraSpec de 42 muestras de roca alterada, obteniendo como resultado la marcada presencia de alteración clorítica y en menor grado carbonatización, silicificación y sericitización;"
  },
  greet29:{
    eng:"Petromineragraphy of drill hole samples, which included the mineragraphic study of 4 samples used to define the paragenesis, supported by Pearson's correlation coefficients, and the petrographic study of 4 samples used to classify the metamorphic rocks as neis and to identify the sericitic alteration of the box rocks.",
    esp:"Petromineragrafía de muestras de sondajes, dentro la cual se consideró el estudio mineragráfico de 4 muestras con las que se definió la paragénesis, soportada por los coeficientes de correlación de Pearson, y el estudio petrográfico de 4 muestras con las que se clasificó a las rocas metamórficas como neis y se identificó la alteración sericítica de las rocas de caja."
  },
  inicio:{
    eng: "Home",
    esp:"Inicio"
  },
  compania:{
    eng:"Company",
    esp:"Compañía"
  },
  historia:{
    eng: "History",
    esp:"Historia"
  },
  actualidad:{
    eng: "Actuality",
    esp:"Actualidad"
  },
  contactanos:{
    eng: "Contact us",
    esp:"Contáctanos"
  },
  direccion:{
    esp:"Dirección",
    eng:"Address"
  },
  enlaces:{
    esp:"Enlaces",
    eng:"Links"
  },
  contacto:{
    esp:"Contacto",
    eng:"Contact"
  }
};
var langs = ["esp", "eng"];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function () {
  current_lang_index = ++current_lang_index % 2;
  current_lang = langs[current_lang_index];
  document.getElementById('idioma').textContent = current_lang;
  translate();
};

function translate() {
  $("[data-translate]").each(function () {
    var key = $(this).data("translate");
    $(this).html(dictionary[key][current_lang] || "N/A");
  });

}

translate();
