const fs = require('fs');
const path = require('path');

// Translation data for each language
const translations = {
  es: {
    "hotAirBalloon.title": "Globo Aerostático",
    "hotAirBalloon.subtitle": "ELÉVATE SOBRE EL MAGNÍFICO PAISAJE DESÉRTICO PARA UNA PERSPECTIVA AÉREA INOLVIDABLE",
    "hotAirBalloon.imageAlt": "Globo Aerostático sobre Wadi Rum",
    "hotAirBalloon.duration": "1-2 horas (tiempo de vuelo: 40-60 minutos)",
    "hotAirBalloon.guests": "De 1 a 8 pasajeros por globo",
    "hotAirBalloon.description1": "Experimenta la belleza impresionante de Wadi Rum desde una perspectiva completamente diferente con nuestra aventura en globo aerostático. Mientras te elevas suavemente sobre el suelo del desierto, el vasto paisaje se despliega debajo de ti, revelando la verdadera escala y majestuosidad de este sitio del Patrimonio Mundial de la UNESCO de una manera que es imposible apreciar desde el suelo.",
    "hotAirBalloon.description2": "Nuestros vuelos en globo aerostático suelen realizarse al amanecer, cuando el aire del desierto está tranquilo y la luz es mágica. Cuando el sol corona las montañas orientales, baña las formaciones de arenisca con un cálido resplandor dorado, creando un paraíso para fotógrafos y una experiencia visual inolvidable. Desde tu punto de vista elevado, verás los intrincados patrones de cañones, las curvas amplias de dunas de arena y las dramáticas formaciones rocosas que hacen que Wadi Rum sea tan único.",
    "hotAirBalloon.description3": "El globo es piloteado por profesionales experimentados con un amplio conocimiento de las condiciones locales, asegurando tanto la seguridad como la mejor ruta de vuelo posible para mostrar los aspectos más destacados del desierto. La canasta es espaciosa y cómoda, permitiéndote relajarte y sumergirte completamente en la experiencia. La sensación de flotar silenciosamente sobre el desierto, con solo el estallido ocasional del quemador rompiendo la tranquilidad, crea una atmósfera pacífica y casi meditativa que contrasta bellamente con el paisaje accidentado debajo.",
    "hotAirBalloon.rates.perPerson": "Por Persona",
    "hotAirBalloon.rates.perPerson.price": "200 JOD",
    "hotAirBalloon.rates.2to6": "2-6 Personas",
    "hotAirBalloon.rates.2to6.price": "185 JOD por persona",
    "hotAirBalloon.rates.children": "Niños 5-12 Años",
    "hotAirBalloon.rates.children.price": "100 JOD",
    "hotAirBalloon.rates.kids": "Niños menores de 5 años",
    "hotAirBalloon.rates.kids.notRecommended": "No recomendado",
    "hotAirBalloon.programTitle": "Programa Detallado",
    "hotAirBalloon.programSubtitle": "Todo lo que necesitas saber",
    "hotAirBalloon.programIntro": "Tu aventura en globo aerostático comienza muy temprano en la mañana, típicamente alrededor de 1-2 horas antes del amanecer. Te recogeremos de tu alojamiento en Wadi Rum Village o nuestro campamento y te transportaremos al sitio de lanzamiento en el desierto.",
    "hotAirBalloon.preFlightBriefing.title": "Sesión Informativa Previa al Vuelo:",
    "hotAirBalloon.preFlightBriefing.desc": "Al llegar al sitio de lanzamiento, conocerás a tu piloto y tripulación que te darán una sesión informativa completa sobre seguridad. Explicarán qué esperar durante el vuelo, los procedimientos adecuados de embarque y aterrizaje, y responderán cualquier pregunta que puedas tener.",
    "hotAirBalloon.balloonInflation.title": "Inflado del Globo:",
    "hotAirBalloon.balloonInflation.desc": "Serás testigo del fascinante proceso de inflado del globo. A medida que se acerca el amanecer, la tripulación comenzará a preparar e inflar el enorme globo con aire frío de potentes ventiladores, antes de calentar el aire con los quemadores para llevar el globo a posición vertical. Este espectáculo es una parte fotogénica de la experiencia.",
    "hotAirBalloon.boardingTakeoff.title": "Embarque y Despegue:",
    "hotAirBalloon.boardingTakeoff.desc": "Una vez que el globo esté completamente inflado y asegurado, subirás a bordo de la cómoda canasta. Cuando el sol comience a salir, el piloto aumentará el calor en el globo, y despeg arás suavemente del suelo, comenzando tu aventura aérea sobre Wadi Rum.",
    "hotAirBalloon.theFlight.title": "El Vuelo:",
    "hotAirBalloon.theFlight.desc": "Durante tu vuelo de 40-60 minutos, flotarás pacíficamente sobre el paisaje desértico, disfrutando de vistas panorámicas de las montañas, valles y dunas de Wadi Rum. El piloto señalará puntos de referencia significativos y compartirá información interesante sobre la geología e historia del área. La ruta de vuelo varía dependiendo de las condiciones del viento, asegurando que cada experiencia sea única.",
    "hotAirBalloon.sunriseExperience.title": "Experiencia del Amanecer:",
    "hotAirBalloon.sunriseExperience.desc": "Uno de los momentos destacados del vuelo es ver el amanecer sobre el desierto. A medida que el sol sube sobre el horizonte, ilumina el paisaje con una cálida luz dorada, creando una atmósfera mágica y oportunidades espectaculares para fotografías.",
    "hotAirBalloon.landing.title": "Aterrizaje:",
    "hotAirBalloon.landing.desc": "Tu piloto identificará un sitio de aterrizaje adecuado basado en las condiciones del viento. El aterrizaje suele ser suave, aunque recibirás instrucciones sobre la posición adecuada de aterrizaje para garantizar la seguridad. El equipo de tierra seguirá al globo en vehículos y estará esperando en el sitio de aterrizaje para ayudar.",
    "hotAirBalloon.postFlight.title": "Celebración Post-Vuelo:",
    "hotAirBalloon.postFlight.desc": "Después del aterrizaje, participarás en una ceremonia tradicional de globo aerostático, que a menudo incluye un desayuno ligero o refrigerios y un certificado de vuelo para conmemorar tu aventura. Este es un momento perfecto para compartir tus experiencias con otros pasajeros y tomar fotos finales.",
    "hotAirBalloon.returnTransfer.title": "Traslado de Regreso:",
    "hotAirBalloon.returnTransfer.desc": "Después de la celebración, serás transportado de regreso a tu alojamiento en Wadi Rum Village o nuestro campamento, generalmente llegando a media mañana, dejándote el resto del día libre para otras actividades.",
    "hotAirBalloon.weatherNote": "Ten en cuenta que los vuelos en globo aerostático dependen del clima por razones de seguridad. En caso de condiciones climáticas inadecuadas (vientos fuertes, lluvia o mala visibilidad), los vuelos pueden ser reprogramados o reembolsados. Siempre priorizamos la seguridad por encima de todo.",
    "hotAirBalloon.included.transportation": "Transporte de ida y vuelta desde tu alojamiento en Wadi Rum Village o nuestro campamento",
    "hotAirBalloon.included.pilot": "Piloto de globo profesional y licenciado",
    "hotAirBalloon.included.safetyBriefing": "Sesión informativa completa sobre seguridad",
    "hotAirBalloon.included.flight": "Vuelo en globo aerostático de 40-60 minutos",
    "hotAirBalloon.included.refreshments": "Refrigerios ligeros después del vuelo",
    "hotAirBalloon.included.certificate": "Certificado de vuelo",
    "hotAirBalloon.included.insurance": "Cobertura de seguro básica",
    "hotAirBalloon.notIncluded.photography": "Servicios de fotografía profesional (disponibles por una tarifa adicional)",
    "hotAirBalloon.notIncluded.transportationToWadiRum": "Transporte hacia/desde Wadi Rum (se puede organizar por una tarifa adicional)",
    "hotAirBalloon.notIncluded.comprehensiveInsurance": "Seguro de viaje integral",
    "hotAirBalloon.faqDescription": "Preguntas comunes sobre nuestra experiencia de Globo Aerostático y visitando Wadi Rum",
    "hotAirBalloon.relatedTours.fullDayJeep.title": "Tour en Jeep de Día Completo",
    "hotAirBalloon.relatedTours.fullDayJeep.subtitle": "Exploración Completa del Desierto",
    "hotAirBalloon.relatedTours.fullDayJeep.desc": "Un tour en jeep completo de 7 horas explorando la vasta belleza de Wadi Rum, incluyendo cañones ocultos e inscripciones antiguas.",
    "hotAirBalloon.relatedTours.fullDayJeep.duration": "7 horas",
    "hotAirBalloon.relatedTours.fullDayJeep.price": "65 JOD",
    "hotAirBalloon.relatedTours.allInOne.title": "Todo en Un Día",
    "hotAirBalloon.relatedTours.allInOne.subtitle": "Múltiples Actividades en Un Día",
    "hotAirBalloon.relatedTours.allInOne.desc": "Experimenta múltiples actividades en un solo día, incluyendo tour en jeep, paseo en camello y caminata corta para una experiencia completa del desierto.",
    "hotAirBalloon.relatedTours.allInOne.duration": "Día completo",
    "hotAirBalloon.relatedTours.allInOne.price": "90 JOD",
    "hotAirBalloon.relatedTours.tentedCamp.title": "Nuestro Campamento de Tiendas",
    "hotAirBalloon.relatedTours.tentedCamp.subtitle": "Alojamiento Cómodo en el Desierto",
    "hotAirBalloon.relatedTours.tentedCamp.desc": "Alójate en nuestro cómodo campamento de tiendas con comodidades modernas, hospitalidad beduina tradicional y vistas impresionantes del desierto.",
    "hotAirBalloon.relatedTours.tentedCamp.duration": "Noche",
    "hotAirBalloon.relatedTours.tentedCamp.price": "50 JOD"
  }
};

// Files to update
const files = [
  { lang: 'es', path: '../translations/es.json' }
];

// Update each file
files.forEach(({ lang, path: filePath }) => {
  const fullPath = require.resolve(filePath);
  const content = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

  // Add new translations
  Object.assign(content, translations[lang]);

  // Write back
  fs.writeFileSync(fullPath, JSON.stringify(content, null, 2) + '\n');
  console.log(`Updated ${lang}.json`);
});

console.log('All translations added successfully!');
