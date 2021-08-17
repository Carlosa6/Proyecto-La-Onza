"use strict";

document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("show");
});
var dictionary = {
  greet: {
    eng: "La Onza is a mining project that began in 2016 with the exploration of 11 mineralized veins, reaching" + "to 25 today. It is located in the department of La Libertad, province of Pataz, district of" + "Tayabamba, La Victoria peasant community, within the geotectonic unit of the Cordillera" + "Oriental; It comprises 4,211 hectares of mining claims whose owner is Compañía Minera La Onza S.A. " + "Currently La Onza is in the pre-feasibility phase (local exploration), during the +" + "which was done:" + "Geological mapping on a local scale, along 730 hectares;" + "Surface rock sampling over 1600 hectares, mining searches and drilling" + "diamond, obtaining a total of 637 samples (includes 52 QA / QC samples), identifying" + "Mineralized veins with values ​​up to 105.65 g / t Au @ 0.50 m (sample 8534);" + "Topographic survey of an approximate area of ​​9000 m2 (including mining searches) and" + "remote sensors of an approximate area of ​​21 km2;" + "Metallurgical tests, of two groups of samples, one for oxides and the other for sulfides," + "Obtaining in both cases recoveries of between 83 and 91%, with an optimal consumption of reagents;" + "Geophysics, using induced polarization and magnetometry methods, along" + "10.5 km (21 lines of 500 m), from which possible areas of interest were identified that" + "They served to define the diamond drilling program;" + "Drilling of 3 diamond holes, with 1120 m drilled in total, recognizing veins" + "mineralized with values ​​up to 6.7 g / t Au @ 0.55 m (sample 8651 from hole DDH-LO18-01);" + "Spectrometry with TerraSpec of 42 samples of altered rock, obtaining as a result" + "the marked presence of chlorite alteration and to a lesser degree carbonation, silicification and" + "sericitization;" + "Petromineragraphy of drilling samples, within which the study was considered" + "Mineragraphic of 4 samples with which paragenesis was defined, supported by the" + "Pearson's correlation coefficients, and the petrographic study of 4 samples with which it is" + "he classified the metamorphic rocks as neis and the sericitic alteration of the" + "box rocks.",
    esp: "La Onza es un proyecto minero que inició el año 2016 con el cateo de 11 vetas mineralizadas, llegando" + "a 25 en la actualidad. Se ubica en el departamento de La Libertad, provincia de Pataz, distrito de" + "Tayabamba, comunidad campesina La Victoria, dentro de la unidad geotectónica de la Cordillera" + "Oriental; comprende 4211 hectáreas de denuncios mineros cuyo titular es Compañía Minera La Onza S.A." + "En la actualidad La Onza se encuentra en la fase de prefactibilidad (exploración local), durante la+" + "cual se realizó:" + "Cartografiado geológico a escala local, a lo largo de 730 hectáreas;" + "Muestreo de rocas en superficie a lo largo de 1600 hectáreas, cateos mineros y sondajes" + "diamantinos, obteniendo un total de 637 muestras (incluye 52 muestras QA/QC), identificando" + "vetas mineralizadas con valores de hasta 105,65 g/t Au @ 0,50 m (muestra 8534);" + "Levantamiento topográfico de un área aproximada de 9000 m2 (incluyendo cateos mineros) y" + "sensores remotos de un área aproximada de 21 km2;" + "Pruebas metalúrgicas, de dos grupos de muestras, uno de óxidos y otro de sulfuros," + "obteniendo en ambos casos recuperaciones de entre 83 y 91%, con un consumo óptimo de reactivos;" + "Geofísica, usando los métodos de polarización inducida y magnetometría, a lo largo de" + "10,5 km (21 líneas de 500 m), a partir de la cual se identificaron posibles zonas de interés que" + "sirvieron para definir el programa de perforación diamantina;" + "Perforación de 3 sondajes diamantinos, con 1120 m perforados en total, reconociendo vetas" + "mineralizadas con valores de hasta 6,7 g/t Au @ 0,55 m (muestra 8651 del sondaje DDH-LO18-01);" + "Espectrometría con TerraSpec de 42 muestras de roca alterada, obteniendo como resultado" + "la marcada presencia de alteración clorítica y en menor grado carbonatización, silicificación y" + "sericitización;" + "Petromineragrafía de muestras de sondajes, dentro la cual se consideró el estudio" + "mineragráfico de 4 muestras con las que se definió la paragénesis, soportada por los" + "coeficientes de correlación de Pearson, y el estudio petrográfico de 4 muestras con las que se" + "clasificó a las rocas metamórficas como neis y se identificó la alteración sericítica de las" + "rocas de caja."
  }
};
var langs = ["esp", "eng"];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function () {
  current_lang_index = ++current_lang_index % 2;
  current_lang = langs[current_lang_index];
  translate();
};

function translate() {
  $("[data-translate]").each(function () {
    var key = $(this).data("translate");
    $(this).html(dictionary[key][current_lang] || "N/A");
  });
}

translate();