const fs = require('fs');
const path = require('path');

const translations = {
  "announcement.wifi": "Nuestro campamento tiene conexión Wi-Fi",
  "announcement.groupDiscount": "Ofrecemos descuentos para grupos",
  "announcement.taxi": "Podemos organizar un taxi para ti desde cualquier ciudad de Jordania con los mejores precios",
  "announcement.hotAirBalloon": "Globo aerostático ahora disponible con nosotros",

  "umAddami.title": "Escalada al Jebel Um Addami",
  "umAddami.subtitle": "ALCANZA LA CUMBRE DE LA MONTAÑA MÁS ALTA DE JORDANIA PARA VISTAS IMPRESIONANTES",
  "umAddami.heroAlt": "Escalada al Jebel Um Addami en Wadi Rum",
  "umAddami.galleryAlt": "Escalada al Jebel Um Addami",
  "umAddami.duration": "1 Día / 7 horas",
  "umAddami.guests": "De 1 a 6 huéspedes",
  "umAddami.experienceTitle": "Experiencia en el Desierto",
  "umAddami.description1": "El Jebel Um Addami es la montaña más alta de Jordania, con una impresionante altitud de 1.854 metros (6.083 pies) sobre el nivel del mar. Ubicado en el extremo sur de Wadi Rum, cerca de la frontera con Arabia Saudita, este majestuoso pico ofrece una emocionante aventura de escalada y recompensa a los escaladores exitosos con impresionantes vistas panorámicas que se extienden por dos países.",
  "umAddami.description2": "Esta experiencia de día completo combina un pintoresco viaje en jeep por el desierto del sur con una caminata moderadamente desafiante hasta la cumbre. La escalada en sí no es técnicamente difícil: es principalmente una ruta de senderismo con algunas secciones de trepa, lo que la hace accesible para cualquier persona con una condición física razonable y espíritu de aventura. Nuestros experimentados guías beduinos conocen la montaña íntimamente y te guiarán por la ruta más segura y pintoresca hasta la cima.",
  "umAddami.description3": "Estar en la cumbre del Um Addami es una experiencia verdaderamente especial. En días despejados, las vistas se extienden hacia el sur hasta Arabia Saudita y hacia el norte a través de la vasta extensión de Wadi Rum. La sensación de logro, combinada con la ubicación remota y las vistas espectaculares, crea un momento inolvidable de cualquier visita a Jordania. Esta aventura es perfecta para quienes buscan un desafío físico, perspectivas únicas y el derecho de presumir de haber escalado el pico más alto de Jordania.",

  "umAddami.rates.1person": "1 Persona",
  "umAddami.rates.1person.price": "85 JOD",
  "umAddami.rates.2to3": "2-3 Personas",
  "umAddami.rates.2to3.price": "75 JOD por persona",
  "umAddami.rates.4to6": "4-6 Personas",
  "umAddami.rates.4to6.price": "65 JOD por persona",
  "umAddami.rates.children12to16": "Niños de 12-16 Años",
  "umAddami.rates.children12to16.price": "Igual que adultos (con supervisión parental)",
  "umAddami.rates.childrenUnder12": "Niños menores de 12",
  "umAddami.rates.childrenUnder12.price": "No recomendado",

  "umAddami.programIntro": "Tu aventura al Jebel Um Addami comienza temprano en la mañana en el Pueblo de Wadi Rum, donde conocerás a tu experimentado guía beduino y abordarás tu jeep 4x4. Después de una breve introducción e información de seguridad, partirás hacia el desierto, dirigiéndote al sur hacia la frontera con Arabia Saudita donde se encuentra Um Addami.",
  "umAddami.jeepJourney.title": "Viaje en Jeep a Um Addami (1.5-2 horas):",
  "umAddami.jeepJourney.desc": "El viaje a la base de Um Addami es una aventura en sí misma, llevándote a través de algunas de las áreas más remotas y hermosas del Área Protegida de Wadi Rum. Viajarás a través de vastas llanuras abiertas, pasarás por cañones estrechos y verás paisajes desérticos únicos que pocos visitantes experimentan. El viaje toma aproximadamente 1.5-2 horas, dependiendo de las condiciones, y tu guía señalará características interesantes en el camino.",
  "umAddami.safetyBriefing.title": "Briefing de Seguridad y Preparación:",
  "umAddami.safetyBriefing.desc": "Al llegar a la base de Um Addami, tu guía proporcionará un briefing de seguridad integral y explicará la ruta de escalada. Tendrás tiempo para preparar tu equipo, tomar agua y hacer cualquier pregunta antes de comenzar el ascenso. El guía evaluará el nivel de condición física y experiencia del grupo para adaptar el ritmo en consecuencia.",
  "umAddami.climb.title": "La Escalada (2-3 horas):",
  "umAddami.climb.desc1": "La escalada a la cumbre es principalmente una ruta de senderismo con algunas secciones de trepa. Sigue un camino natural hacia la montaña, con algún terreno rocoso pero sin escalada técnica requerida. Tu guía liderará el camino, señalando la mejor ruta y ofreciendo asistencia cuando sea necesario. El ascenso típicamente toma 2-3 horas, dependiendo del ritmo y nivel de condición física del grupo.",
  "umAddami.climb.desc2": "A medida que escalas más alto, las vistas se vuelven cada vez más espectaculares, con el vasto paisaje desértico desplegándose debajo de ti. Hay varios buenos lugares para descansar en el camino, permitiéndote recuperar el aliento y tomar fotos. El enfoque final a la cumbre involucra una trepa fácil sobre grandes rocas.",
  "umAddami.summit.title": "En la Cumbre:",
  "umAddami.summit.desc1": "Alcanzar la cumbre de Um Addami es una experiencia gratificante. A 1.854 metros sobre el nivel del mar, estarás parado en el punto más alto de Jordania, con vistas panorámicas que se extienden hacia el sur hasta Arabia Saudita y hacia el norte a través de la vasta extensión de Wadi Rum. En días despejados, puedes ver cientos de kilómetros en todas direcciones. Tu guía señalará puntos de referencia y compartirá historias sobre el área.",
  "umAddami.summit.desc2": "Tendrás tiempo para descansar, tomar fotos y simplemente absorber el magnífico paisaje. Muchos escaladores eligen firmar el libro de registro de la cumbre, que se guarda en una pequeña caja metálica en la cima. Este también es un lugar perfecto para un refrigerio o bebida de celebración.",
  "umAddami.descent.title": "Descenso (1.5-2 horas):",
  "umAddami.descent.desc": "Después de disfrutar la cumbre, comenzarás el descenso, que sigue la misma ruta que el ascenso. Bajar a veces puede ser más rápido que subir, pero tu guía asegurará un ritmo seguro, particularmente en las secciones más empinadas. El descenso típicamente toma 1.5-2 horas.",
  "umAddami.lunchBreak.title": "Pausa para Almorzar:",
  "umAddami.lunchBreak.desc": "Al regresar a la base de Um Addami, disfrutarás de un merecido almuerzo a la sombra. Tu guía preparará una comida beduina tradicional, típicamente incluyendo pan fresco, hummus, ensaladas y té. Este es un momento perfecto para relajarte, reflexionar sobre tu logro y hacer preguntas a tu guía sobre la vida beduina o el área circundante.",
  "umAddami.returnJourney.title": "Viaje de Regreso:",
  "umAddami.returnJourney.desc": "Después del almuerzo, abordarás el jeep para el viaje de regreso al Pueblo de Wadi Rum. La ruta de regreso puede incluir paradas en otros sitios interesantes del desierto, dependiendo del tiempo y tus preferencias. Llegarás de vuelta al pueblo a última hora de la tarde, típicamente entre las 4:00 y las 5:00 PM.",
  "umAddami.conclusion": "Durante todo el día, tu guía asegurará tu seguridad y comodidad, compartiendo su profundo conocimiento del desierto y la cultura beduina. La experiencia de escalada a Um Addami es una aventura desafiante pero inmensamente gratificante que combina logro físico con conocimientos culturales y belleza natural.",

  "umAddami.included.jeepTransport": "Transporte en jeep 4x4 con conductor/guía beduino",
  "umAddami.included.climbingGuide": "Guía de escalada experimentado",
  "umAddami.included.bedouinLunch": "Almuerzo beduino tradicional",
  "umAddami.included.water": "Agua embotellada (2 litros por persona)",
  "umAddami.included.tea": "Té beduino tradicional",
  "umAddami.included.entranceFees": "Todas las tarifas de entrada al Área Protegida de Wadi Rum",
  "umAddami.included.pickupDropoff": "Recogida y devolución en el Centro de Visitantes de Wadi Rum",
  "umAddami.included.accommodation": "Alojamiento en nuestro campamento de tiendas",
  "umAddami.included.meals": "Comidas Desayuno y Cena (Almuerzo bajo petición)",

  "umAddami.notIncluded.expenses": "Gastos personales y recuerdos",
  "umAddami.notIncluded.gratuities": "Propinas para guías (opcional pero apreciado)",
  "umAddami.notIncluded.insurance": "Seguro de viaje",
  "umAddami.notIncluded.transportation": "Transporte hacia/desde Wadi Rum (se puede organizar por un cargo adicional)",
  "umAddami.notIncluded.equipment": "Equipo de escalada especializado (normalmente no necesario pero se puede organizar si se solicita)",
  "umAddami.notIncluded.snacks": "Refrigerios adicionales o barras energéticas (se recomienda traer los tuyos)",
  "umAddami.notIncluded.anything": "Cualquier cosa no mencionada en la lista \"Incluido\"",

  "umAddami.faqDescription": "Preguntas comunes sobre nuestra Escalada al Jebel Um Addami y visitar Wadi Rum",

  "umAddami.relatedTours.burdah.title": "Escalada al Arco de Burdah",
  "umAddami.relatedTours.burdah.subtitle": "Aventura al Puente de Roca",
  "umAddami.relatedTours.burdah.desc": "Desafíate a ti mismo con una escalada guiada al icónico Puente de Roca de Burdah, una de las formaciones naturales más impresionantes de Wadi Rum.",
  "umAddami.relatedTours.burdah.price": "Desde 80 JOD",

  "umAddami.relatedTours.jebelKhash.title": "Ruta Jebel Khash",
  "umAddami.relatedTours.jebelKhash.subtitle": "Paisajes Desérticos Únicos",
  "umAddami.relatedTours.jebelKhash.desc": "Explora la espectacular ruta Jebel Khash, con formaciones rocosas únicas y vistas impresionantes.",
  "umAddami.relatedTours.jebelKhash.price": "Desde 75 JOD",

  "umAddami.relatedTours.trekking.title": "Trekking en la Naturaleza",
  "umAddami.relatedTours.trekking.subtitle": "Senderismo Guiado en el Desierto",
  "umAddami.relatedTours.trekking.desc": "Explora Wadi Rum a pie con nuestras aventuras de trekking guiadas, ofreciendo una conexión más íntima con el paisaje desértico.",
  "umAddami.relatedTours.trekking.price": "Desde 45 JOD",
  "umAddami.relatedTours.bookNow": "Reservar Ahora",

  "umAddami.expertTeam.title": "Nuestro Equipo Experto",
  "umAddami.expertTeam.subtitle": "Estamos aquí para ayudar, 24/7.",
  "umAddami.expertTeam.description": "Conéctate con nuestros consultores expertos de viajes para planificar tu próximo viaje.",
  "umAddami.expertTeam.chatWhatsapp": "Chatear en Whatsapp"
};

const filePath = path.join(__dirname, '..', 'translations', 'es.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Replace placeholders
let replaced = 0;
for (const [key, value] of Object.entries(translations)) {
  if (data[key] && data[key].startsWith('[ES]')) {
    data[key] = value;
    replaced++;
  }
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
console.log(`Replaced ${replaced} Spanish translations`);
