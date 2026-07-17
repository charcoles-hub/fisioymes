// Contenido por idioma. CA = primario (original de fisioymes.com). ES = versión oficial de la web.
export type Lang = 'ca' | 'es';

// Prefijo base del despliegue (p.ej. '/fisioymes/' en GitHub Pages, '/' en dominio propio).
const B = import.meta.env.BASE_URL;

// Slugs de cada página por idioma (rutas estáticas → buen SEO local).
export const routes: Record<Lang, Record<string, string>> = {
  ca: { home: B, treatments: B + 'tractaments/', team: B + 'equip/', clinic: B + 'la-clinica/', prices: B + 'tarifes/', booking: B + 'reservar-cites/' },
  es: { home: B + 'es/', treatments: B + 'es/tratamientos/', team: B + 'es/equipo/', clinic: B + 'es/la-clinica/', prices: B + 'es/tarifas/', booking: B + 'es/reservar-citas/' },
};

export const t = {
  ca: {
    langName: 'CA',
    other: { code: 'es', name: 'ES' },
    nav: { home: 'Inici', treatments: 'Tractaments', team: 'Equip', clinic: 'La Clínica', prices: 'Tarifes', booking: 'Reservar Cita' },
    cta: { book: 'Reservar cita', contact: 'Contacte', whatsapp: 'Contacta per WhatsApp', seeTreatments: 'Veure tractaments', callUs: 'Truca’ns', seePrices: 'Veure tarifes' },
    hero: {
      title: 'Benvingut/da a Fisioymés',
      text: 'Un equip compromès amb la teva salut. Apostem per una fisioteràpia basada en l’evidència, el tracte proper i tractaments adaptats a cada persona per ajudar-te a mantenir una vida activa i saludable.',
      ratingText: 'sobre 66 ressenyes a Google',
    },
    lesions: {
      title: 'Lesions més freqüents que tractem',
      subtitle: 'Recuperem la teva mobilitat i el teu benestar amb un pla personalitzat. Toca cada lesió per saber-ne més.',
      more: 'Veure més lesions',
      items: [
        { name: 'Cervicàlgia', desc: 'Dolor al coll, causat per tensions o lesions als músculs i articulacions del coll. Pot empitjorar amb moviments específics.' },
        { name: 'Dorsàlgies', desc: 'Dolor a l’esquena per lesions musculars, hèrnies discals o problemes de la columna vertebral. Varia en intensitat i localització.' },
        { name: 'Lumbàlgies', desc: 'Dolor a la part baixa de l’esquena, sovint per esquinçaments als discos o problemes a les articulacions lumbars. Empitjora amb l’estrès o la mala postura.' },
        { name: 'Radiculopaties', desc: 'Dolors que afecten els nervis que surten de la columna, amb formigueig, entumiment o dolor que s’irradia cap a cames o braços.' },
        { name: 'Migranyes i cefalees tensionals', desc: 'Mals de cap per tensió muscular, canvis hormonals o problemes de circulació. Atacs de dolor intens, sovint a un costat del cap.' },
        { name: 'Rigidesa articular', desc: 'Dificultat per moure una articulació per pèrdua de mobilitat. Causada per lesions, artritis o falta de lubricació articular.' },
        { name: 'Tendinopaties', desc: 'Inflamacions dels tendons, que connecten els músculs amb els ossos. Dolor i rigidesa, especialment després de l’activitat física.' },
        { name: 'Hèrnies discals', desc: 'Protrusions dels discos intervertebrals fora de la seva posició normal, que causen dolor i molèsties a l’esquena i les extremitats.' },
        { name: 'Sobrecàrregues musculars', desc: 'Lesions per ús excessiu d’un múscul o grup muscular, amb dolor, debilitat i rigidesa a la zona afectada.' },
        { name: 'Trencaments musculars', desc: 'Lesions que ocorren quan un múscul es trenca, amb dolor intens, immobilitat i debilitat a la zona afectada.' },
        { name: 'Limfedema', desc: 'Acumulació de líquid limfàtic. El drenatge limfàtic ajuda a eliminar-ne l’excés i alleuja el dolor i la inflamació.' },
        { name: 'Punts gallet', desc: 'Àrees sensibles als músculs que, en pressionar-les, poden causar dolor o molèsties en altres parts del cos.' },
        { name: 'Disfuncions del sòl pelvià', desc: 'Quan els músculs, lligaments i teixits del sòl pelvià no funcionen correctament. Donen suport a òrgans com la bufeta, l’úter i el recte.' },
        { name: 'Articulació temporomandibular', desc: 'Articulació que connecta la mandíbula amb el crani. El dolor pot venir de lesions, artritis, bruxisme o alteracions posturals.' },
        { name: 'Rehabilitació postquirúrgica', desc: 'Procés de recuperació i enfortiment després d’una cirurgia, per millorar la mobilitat, la funció i el benestar del pacient.' },
      ],
    },
    treatments: {
      title: 'Els nostres tractaments',
      subtitle: 'Teràpia manual i tecnologia avançada per reduir al màxim els temps de recuperació.',
      cards: [
        { name: 'Massatge terapèutic', img: B + 'assets/tx-massatge.jpg', text: 'La nostra eina més potent per tractar lesions musculars, tendinoses i lligamentoses. Personalitzat per a cada pacient: descontracturant, esportiu, relaxant o drenatge limfàtic.' },
        { name: 'Fisioteràpia esportiva', img: B + 'assets/tx-esportiva.jpg', text: 'Prevenció, tractament i rehabilitació de lesions en esportistes. Tècniques i exercicis per millorar força, flexibilitat i mobilitat, i optimitzar el rendiment.' },
        { name: 'Pilates terapèutic', img: B + 'assets/tx-pilates.jpg', text: 'Enforteix, flexibilitza i tonifica el teu cos amb classes adaptades al grup. La primera classe és gratuïta i sense compromís.', badge: '1a classe gratuïta' },
      ],
    },
    testimonials: { title: 'Què diuen de Fisioymés', subtitle: 'Ressenyes reals dels nostres pacients a Google.', swipe: 'Llisca per veure’n més' },
    partners: { title: 'Treballen amb nosaltres' },
    contact: {
      title: 'Contacte',
      text: 'Tens algun dubte o necessites més informació? Som aquí per ajudar-te.',
      name: 'Nom', email: 'Correu electrònic', message: 'Missatge', send: 'Enviar',
      or: 'o', prefer: 'Prefereixes reservar directament?',
    },
    footer: { hours: 'Horari', follow: 'Segueix-nos', rights: 'Tots els drets reservats.', tagline: 'Fisioteràpia esportiva · Pilates · Massatge terapèutic' },
    days: ['Dilluns','Dimarts','Dimecres','Dijous','Divendres','Dissabte','Diumenge'],
    pages: {
      treatments: { title: 'Els nostres tractaments', subtitle: 'Teràpia manual i tecnologia avançada per reduir al màxim els temps de recuperació.' },
      team: { title: 'El nostre equip', intro: 'A Fisioymés treballem en equip per oferir una atenció personalitzada i de qualitat. Compartim coneixement i experiència clínica per dissenyar plans de tractament adaptats a cada pacient.' },
      clinic: { title: 'La clínica', subtitle: 'Fisioteràpia a Sant Cugat del Vallès amb tracte proper i tecnologia avançada.', galleryTitle: 'Les nostres instal·lacions' },
      prices: { title: 'Tarifes', subtitle: 'Preus clars i sense sorpreses.', note: 'Primera classe de pilates gratuïta.' },
      booking: { title: 'Reservar cita', text: 'Reserva la teva cita online en menys d’un minut, quan et vagi bé.', fallback: 'Si no veus el sistema de reserva, obre’l aquí', phoneAlt: 'o truca’ns al' },
    },
  },
  es: {
    langName: 'ES',
    other: { code: 'ca', name: 'CA' },
    nav: { home: 'Inicio', treatments: 'Tratamientos', team: 'Equipo', clinic: 'La Clínica', prices: 'Tarifas', booking: 'Reservar Cita' },
    cta: { book: 'Reservar cita', contact: 'Contacto', whatsapp: 'Contacta por WhatsApp', seeTreatments: 'Ver tratamientos', callUs: 'Llámanos', seePrices: 'Ver tarifas' },
    hero: {
      title: 'Bienvenido/a a Fisioymés',
      text: 'Un equipo comprometido con tu salud. Apostamos por una fisioterapia basada en la evidencia, el trato cercano y tratamientos adaptados a cada persona para ayudarte a mantener una vida activa y saludable.',
      ratingText: 'sobre 66 reseñas en Google',
    },
    lesions: {
      title: 'Lesiones más frecuentes que tratamos',
      subtitle: 'Recuperamos tu movilidad y bienestar con un plan personalizado. Toca cada lesión para saber más.',
      more: 'Ver más lesiones',
      items: [
        { name: 'Cervicalgia', desc: 'Dolor en el cuello, causado por tensiones o lesiones en los músculos y articulaciones. Puede empeorar con movimientos específicos.' },
        { name: 'Dorsalgias', desc: 'Dolor en la espalda por lesiones musculares, hernias discales o problemas de la columna vertebral. Varía en intensidad y localización.' },
        { name: 'Lumbalgias', desc: 'Dolor en la parte baja de la espalda, a menudo por desgarros en los discos o problemas en las articulaciones lumbares. Empeora con el estrés o la mala postura.' },
        { name: 'Radiculopatías', desc: 'Dolores que afectan a los nervios que salen de la columna, con hormigueo, entumecimiento o dolor que se irradia hacia piernas o brazos.' },
        { name: 'Migrañas y cefaleas tensionales', desc: 'Dolores de cabeza por tensión muscular, cambios hormonales o problemas de circulación. Ataques de dolor intenso, a menudo en un lado de la cabeza.' },
        { name: 'Rigidez articular', desc: 'Dificultad para mover una articulación por pérdida de movilidad. Causada por lesiones, artritis o falta de lubricación articular.' },
        { name: 'Tendinopatías', desc: 'Inflamaciones de los tendones, que conectan los músculos con los huesos. Dolor y rigidez, especialmente tras la actividad física.' },
        { name: 'Hernias discales', desc: 'Protrusiones de los discos intervertebrales fuera de su posición normal, que causan dolor y molestias en la espalda y las extremidades.' },
        { name: 'Sobrecargas musculares', desc: 'Lesiones por uso excesivo de un músculo o grupo muscular, con dolor, debilidad y rigidez en la zona afectada.' },
        { name: 'Roturas musculares', desc: 'Lesiones que ocurren cuando un músculo se rompe, con dolor intenso, inmovilidad y debilidad en la zona afectada.' },
        { name: 'Linfedema', desc: 'Acumulación de líquido linfático. El drenaje linfático ayuda a eliminar el exceso y alivia el dolor y la inflamación.' },
        { name: 'Puntos gatillo', desc: 'Áreas sensibles en los músculos que, al presionarlas, pueden causar dolor o molestias en otras partes del cuerpo.' },
        { name: 'Disfunciones del suelo pélvico', desc: 'Cuando los músculos, ligamentos y tejidos del suelo pélvico no funcionan correctamente. Dan soporte a órganos como la vejiga, el útero y el recto.' },
        { name: 'Articulación temporomandibular', desc: 'Articulación que conecta la mandíbula con el cráneo. El dolor puede venir de lesiones, artritis, bruxismo o alteraciones posturales.' },
        { name: 'Rehabilitación postquirúrgica', desc: 'Proceso de recuperación y fortalecimiento tras una cirugía, para mejorar la movilidad, la función y el bienestar del paciente.' },
      ],
    },
    treatments: {
      title: 'Nuestros tratamientos',
      subtitle: 'Terapia manual y tecnología avanzada para reducir al máximo los tiempos de recuperación.',
      cards: [
        { name: 'Masaje terapéutico', img: B + 'assets/tx-massatge.jpg', text: 'Nuestra herramienta más potente para tratar lesiones musculares, tendinosas y ligamentosas. Personalizado para cada paciente: descontracturante, deportivo, relajante o drenaje linfático.' },
        { name: 'Fisioterapia deportiva', img: B + 'assets/tx-esportiva.jpg', text: 'Prevención, tratamiento y rehabilitación de lesiones en deportistas. Técnicas y ejercicios para mejorar fuerza, flexibilidad y movilidad, y optimizar el rendimiento.' },
        { name: 'Pilates terapéutico', img: B + 'assets/tx-pilates.jpg', text: 'Fortalece, flexibiliza y tonifica tu cuerpo con clases adaptadas al grupo. La primera clase es gratuita y sin compromiso.', badge: '1ª clase gratis' },
      ],
    },
    testimonials: { title: 'Qué dicen de Fisioymés', subtitle: 'Reseñas reales de nuestros pacientes en Google.', swipe: 'Desliza para ver más' },
    partners: { title: 'Trabajan con nosotros' },
    contact: {
      title: 'Contacto',
      text: '¿Tienes alguna duda o necesitas más información? Estamos aquí para ayudarte.',
      name: 'Nombre', email: 'Correo electrónico', message: 'Mensaje', send: 'Enviar',
      or: 'o', prefer: '¿Prefieres reservar directamente?',
    },
    footer: { hours: 'Horario', follow: 'Síguenos', rights: 'Todos los derechos reservados.', tagline: 'Fisioterapia deportiva · Pilates · Masaje terapéutico' },
    days: ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
    pages: {
      treatments: { title: 'Nuestros tratamientos', subtitle: 'Terapia manual y tecnología avanzada para reducir al máximo los tiempos de recuperación.' },
      team: { title: 'Nuestro equipo', intro: 'En Fisioymés trabajamos en equipo para ofrecer una atención personalizada y de calidad. Compartimos conocimiento y experiencia clínica para diseñar planes de tratamiento adaptados a cada paciente.' },
      clinic: { title: 'La clínica', subtitle: 'Fisioterapia en Sant Cugat del Vallès con trato cercano y tecnología avanzada.', galleryTitle: 'Nuestras instalaciones' },
      prices: { title: 'Tarifas', subtitle: 'Precios claros y sin sorpresas.', note: 'Primera clase de pilates gratis.' },
      booking: { title: 'Reservar cita', text: 'Reserva tu cita online en menos de un minuto, cuando mejor te vaya.', fallback: 'Si no ves el sistema de reserva, ábrelo aquí', phoneAlt: 'o llámanos al' },
    },
  },
} as const;

// Reseñas reales de Google (se muestran en su idioma original en ambas versiones).
export const testimonials = [
  { name: 'Carlos de Viguri', text: 'Hasta ahora el mejor centro que he probado nunca, lo tienen absolutamente todo: amabilidad, comprensión y empatía irrefutable con el paciente. Entras con dolor y sales nuevo.' },
  { name: 'Victoria Corral', text: 'La rehabilitación de mi codo después de una fractura y operación muy complicada ha sido absolutamente excelente. La recuperación de la movilidad ha sobrepasado todas las expectativas médicas.' },
  { name: 'Isabel De Gregorio', text: 'Recomiendo totalmente este centro. Me atiende Diana, gran profesional experta en localizar y tratar las disfunciones con métodos eficaces. Muy contenta con los resultados.' },
  { name: 'Nil Jaimejuan', text: 'Fa anys que hi vaig i no puc estar més content. Tots són súper professionals i simpàtics. Recomano 100%. Tracte immillorable.' },
  { name: 'Anna Codes', text: 'Fa més d’un any que vaig a sessions de pilates i és el que m’ha anat millor. El tracte és excepcional i es respira un ambient molt agradable i familiar.' },
  { name: 'Teresa Gallego', text: 'Estoy muy contenta, me tratan genial. Tuve un ictus cerebral y poco a poco me estoy recuperando. No sabría pasar sin ellas.' },
];

// Horario (índice de día → texto). Domingo cerrado.
export const hours = ['9:00 – 21:00','9:00 – 21:00','9:00 – 21:00','9:00 – 21:00','9:00 – 20:00','10:00 – 14:00', null];

// ---- Contenido de páginas internas ----

export interface Treatment { name: string; img: string; text: string; }
export const treatmentsList: Record<Lang, Treatment[]> = {
  ca: [
    { name: 'Massatge terapèutic', img: B + 'assets/tx2-massatge.jpg', text: 'El massatge és la nostra eina terapèutica més potent per tractar tot tipus de lesions musculars, tendinoses i lligamentoses. És completament personalitzat per a cada pacient. Realitzem massatge descontracturant, esportiu, relaxant i drenatge limfàtic manual.' },
    { name: 'Fisioteràpia esportiva', img: B + 'assets/tx2-esportiva.jpg', text: 'Prevenció, tractament i rehabilitació de lesions en esportistes amb tècniques i exercicis específics per millorar força, flexibilitat i mobilitat, i optimitzar el rendiment.' },
    { name: 'Teràpia manual', img: B + 'assets/tx2-manual.jpg', text: 'Conjunt de tècniques aplicades amb les mans del fisioterapeuta per valorar, tractar i prevenir disfuncions musculoesquelètiques: mobilitzacions articulars, manipulacions i tècniques miofascials per modular el dolor, normalitzar el to muscular i millorar la mobilitat.' },
    { name: 'Radiofreqüència / Tecarteràpia', img: B + 'assets/tx2-tecarterapia.jpg', text: 'Tecnologia que utiliza corrents d’alta freqüència per generar un augment controlat de temperatura als teixits profunds. Estimula la microcirculació, incrementa l’oxigenació cel·lular i afavoreix la reparació tissular. Indicada en lesions agudes i cròniques.' },
    { name: 'Tractament del sòl pèlvic', img: B + 'assets/tx2-suelo-pelvico.jpeg', text: 'Durant l’embaràs i el postpart cuidem el cos de la dona: alleugem molèsties com el mal d’esquena i la tensió pèlvica, preparem el cos per al part i treballem la recuperació del sòl pelvià i la faixa abdominal.' },
    { name: 'Ones de xoc', img: B + 'assets/tx2-ondas-choque.jpg', text: 'Polsos acústics d’alta energia aplicats sobre la zona lesionada. Estimulen la circulació, promouen la regeneració cel·lular i ajuden a descompondre dipòsits de calci en tendons i lligaments. Indicades en tendinitis, fascitis plantar, epicondilitis, esperó calcani i contractures.' },
    { name: 'Magnetoteràpia', img: B + 'assets/tx2-magnetoterapia.jpg', text: 'Teràpia superinductiva basada en un camp electromagnètic d’alta intensitat. Alleuja el dolor, accelera la recuperació de fractures i edemes ossis, relaxa i estimula la musculatura i regenera el teixit, amb efecte neuromodulador.' },
    { name: 'Punció seca', img: B + 'assets/tx2-puncio-seca.jpg', text: 'Tècnica ràpida i efectiva en problemes musculars: actua sobre la placa motora del múscul i desencadena una reacció reflexa que baixa el to muscular. També tracta els punts gallet, causants de dolors referits.' },
    { name: 'Electròlisi percutània (EPTE)', img: B + 'assets/tx2-epte.jpg', text: 'Tècnica revolucionària per al tractament de tendinopaties. Aplica microcorrents a través d’una agulla d’acupuntura, de manera pràcticament indolora, per accedir al teixit danyat i induir-ne l’autorecuperació, escurçant els temps de recuperació.' },
    { name: 'Ecografia', img: B + 'assets/tx2-ecografia.jpg', text: 'Eina avançada de diagnòstic que visualitza en temps real músculs, tendons i lligaments. Permet identificar l’origen de la lesió, valorar-ne l’abast, fer seguiment de l’evolució i guiar amb precisió tècniques invasives.' },
    { name: 'Hipopressius', img: B + 'assets/tx2-hipopresius.webp', text: 'Tècnica d’entrenament que activa i enforteix el core i el sòl pelvià mitjançant postures específiques i respiració diafragmàtica. Millora la postura, redueix la cintura, prevé la incontinència urinària i millora el rendiment esportiu.' },
    { name: 'Articulació temporomandibular (ATM)', img: B + 'assets/tx2-atm.webp', text: 'Tractament multifactorial de la disfunció de l’ATM (traumatismes, estrès, bruxisme, alteracions posturals) mitjançant treball postural de columna cervical i dorsal, teràpia manual i estiraments.' },
  ],
  es: [
    { name: 'Masaje terapéutico', img: B + 'assets/tx2-massatge.jpg', text: 'El masaje es nuestra herramienta más potente para tratar lesiones musculares, tendinosas y ligamentosas. Totalmente personalizado: descontracturante, deportivo, relajante y drenaje linfático manual.' },
    { name: 'Fisioterapia deportiva', img: B + 'assets/tx2-esportiva.jpg', text: 'Prevención, tratamiento y rehabilitación de lesiones en deportistas con técnicas y ejercicios específicos para mejorar fuerza, flexibilidad y movilidad, y optimizar el rendimiento.' },
    { name: 'Terapia manual', img: B + 'assets/tx2-manual.jpg', text: 'Conjunto de técnicas aplicadas con las manos del fisioterapeuta para valorar, tratar y prevenir disfunciones musculoesqueléticas: movilizaciones articulares, manipulaciones y técnicas miofasciales para modular el dolor, normalizar el tono muscular y mejorar la movilidad.' },
    { name: 'Radiofrecuencia / Tecarterapia', img: B + 'assets/tx2-tecarterapia.jpg', text: 'Tecnología que utiliza corrientes de alta frecuencia para generar un aumento controlado de temperatura en los tejidos profundos. Estimula la microcirculación, incrementa la oxigenación celular y favorece la reparación tisular. Indicada en lesiones agudas y crónicas.' },
    { name: 'Tratamiento del suelo pélvico', img: B + 'assets/tx2-suelo-pelvico.jpeg', text: 'Durante el embarazo y el postparto cuidamos el cuerpo de la mujer: aliviamos molestias como el dolor de espalda y la tensión pélvica, preparamos el cuerpo para el parto y trabajamos la recuperación del suelo pélvico y la faja abdominal.' },
    { name: 'Ondas de choque', img: B + 'assets/tx2-ondas-choque.jpg', text: 'Pulsos acústicos de alta energía aplicados sobre la zona lesionada. Estimulan la circulación, promueven la regeneración celular y ayudan a descomponer depósitos de calcio en tendones y ligamentos. Indicadas en tendinitis, fascitis plantar, epicondilitis, espolón calcáneo y contracturas.' },
    { name: 'Magnetoterapia', img: B + 'assets/tx2-magnetoterapia.jpg', text: 'Terapia superinductiva basada en un campo electromagnético de alta intensidad. Alivia el dolor, acelera la recuperación de fracturas y edemas óseos, relaja y estimula la musculatura y regenera el tejido, con efecto neuromodulador.' },
    { name: 'Punción seca', img: B + 'assets/tx2-puncio-seca.jpg', text: 'Técnica rápida y efectiva en problemas musculares: actúa sobre la placa motora del músculo y desencadena una reacción refleja que baja el tono muscular. También trata los puntos gatillo, causantes de dolores referidos.' },
    { name: 'Electrólisis percutánea (EPTE)', img: B + 'assets/tx2-epte.jpg', text: 'Técnica revolucionaria para el tratamiento de tendinopatías. Aplica microcorrientes a través de una aguja de acupuntura, de forma prácticamente indolora, para acceder al tejido dañado e inducir su autorrecuperación, acortando los tiempos de recuperación.' },
    { name: 'Ecografía', img: B + 'assets/tx2-ecografia.jpg', text: 'Herramienta avanzada de diagnóstico que visualiza en tiempo real músculos, tendones y ligamentos. Permite identificar el origen de la lesión, valorar su alcance, hacer seguimiento de la evolución y guiar con precisión técnicas invasivas.' },
    { name: 'Hipopresivos', img: B + 'assets/tx2-hipopresius.webp', text: 'Técnica de entrenamiento que activa y fortalece el core y el suelo pélvico mediante posturas específicas y respiración diafragmática. Mejora la postura, reduce la cintura, previene la incontinencia urinaria y mejora el rendimiento deportivo.' },
    { name: 'Articulación temporomandibular (ATM)', img: B + 'assets/tx2-atm.webp', text: 'Tratamiento multifactorial de la disfunción de la ATM (traumatismos, estrés, bruxismo, alteraciones posturales) mediante trabajo postural de columna cervical y dorsal, terapia manual y estiramientos.' },
  ],
};

export interface TeamMember { img: string; name: string; role: string; col: string; bullets: string[]; }
export const teamList: Record<Lang, TeamMember[]> = {
  ca: [
    { img: B + 'assets/team-DIANA-LLONGUERAS.jpg', name: 'Diana Llongueras', role: 'Directora de Fisioymés', col: 'Col. 12.476', bullets: ['Màster en fisioteràpia de l’esport i readaptació', 'Menció en fisioteràpia neurològica (Bobath i Perfetti)', 'Punció seca i fibròlisi instrumental', 'Fisioterapeuta del Club Voleibol Sant Cugat', 'Ecografia musculoesquelètica'] },
    { img: B + 'assets/team-LAIA-TEIXIDO.jpg', name: 'Laia Teixidó', role: 'Fisioterapeuta especialitzada en sòl pelvià', col: 'Col. 11.959', bullets: ['Fisioteràpia uroginecològica: postpart i disfuncions del sòl pelvià', 'Gimnàstica abdominal hipopressiva', 'Exercici terapèutic en l’embaràs', 'Mètode Pilates sòl', 'Ecografia musculoesquelètica'] },
    { img: B + 'assets/team-raulSerra.webp', name: 'Raúl Serra', role: 'Especialista en teràpia manual', col: 'Col. 4212 (CFC)', bullets: ['+20 anys d’experiència', 'Disfuncions cràniomandibulars i ATM', 'Punció seca i dolor miofascial', 'Ones de xoc', 'Fisioteràpia i massatge esportiu'] },
    { img: B + 'assets/team-Dylan-Koelma.webp', name: 'Dylan Koelma', role: 'Fisioterapeuta esportiu', col: 'Col. 17.166', bullets: ['Postgrau Expert en Diagnòstic Diferencial (2025)', 'Formació en Indiba Activ', 'Punció seca', 'Neuromodulació en patologia clínica', 'Especialista en exercici terapèutic'] },
  ],
  es: [
    { img: B + 'assets/team-DIANA-LLONGUERAS.jpg', name: 'Diana Llongueras', role: 'Directora de Fisioymés', col: 'Col. 12.476', bullets: ['Máster en fisioterapia del deporte y readaptación', 'Mención en fisioterapia neurológica (Bobath y Perfetti)', 'Punción seca y fibrólisis instrumental', 'Fisioterapeuta del Club Voleibol Sant Cugat', 'Ecografía musculoesquelética'] },
    { img: B + 'assets/team-LAIA-TEIXIDO.jpg', name: 'Laia Teixidó', role: 'Fisioterapeuta especializada en suelo pélvico', col: 'Col. 11.959', bullets: ['Fisioterapia uroginecológica: postparto y disfunciones del suelo pélvico', 'Gimnasia abdominal hipopresiva', 'Ejercicio terapéutico en el embarazo', 'Método Pilates suelo', 'Ecografía musculoesquelética'] },
    { img: B + 'assets/team-raulSerra.webp', name: 'Raúl Serra', role: 'Especialista en terapia manual', col: 'Col. 4212 (CFC)', bullets: ['+20 años de experiencia', 'Disfunciones craneomandibulares y ATM', 'Punción seca y dolor miofascial', 'Ondas de choque', 'Fisioterapia y masaje deportivo'] },
    { img: B + 'assets/team-Dylan-Koelma.webp', name: 'Dylan Koelma', role: 'Fisioterapeuta deportivo', col: 'Col. 17.166', bullets: ['Posgrado Experto en Diagnóstico Diferencial (2025)', 'Formación en Indiba Activ', 'Punción seca', 'Neuromodulación en patología clínica', 'Especialista en ejercicio terapéutico'] },
  ],
};

export const clinicText: Record<Lang, string[]> = {
  ca: [
    'A Fisioymés fusionem coneixements acumulats durant una dècada amb una perspectiva innovadora i actualitzada en fisioteràpia. La nostra ubicació a Sant Cugat del Vallès és l’epicentre del nostre compromís, on cada pacient rep atenció individualitzada per assolir una recuperació eficient i efectiva.',
    'Oferim un ambient acollidor i professional, amb un equip de fisioterapeutes altament capacitats i apassionats per la seva feina. Cada tractament s’adapta amb cura a les necessitats de cada pacient, garantint resultats efectius i una experiència positiva.',
    'No només tractem lesions del sistema musculoesquelètic: construïm una relació de confiança amb cada persona. La combinació d’experiència, dedicació i tecnologia avançada ens fa referents en fisioteràpia a Sant Cugat del Vallès.',
  ],
  es: [
    'En Fisioymés fusionamos conocimientos acumulados durante una década con una perspectiva innovadora y actualizada en fisioterapia. Nuestra ubicación en Sant Cugat del Vallès es el epicentro de nuestro compromiso, donde cada paciente recibe atención individualizada para lograr una recuperación eficiente y efectiva.',
    'Ofrecemos un ambiente acogedor y profesional, con un equipo de fisioterapeutas altamente capacitados y apasionados por su trabajo. Cada tratamiento se adapta con cuidado a las necesidades de cada paciente, garantizando resultados efectivos y una experiencia positiva.',
    'No solo tratamos lesiones del sistema musculoesquelético: construimos una relación de confianza con cada persona. La combinación de experiencia, dedicación y tecnología avanzada nos hace referentes en fisioterapia en Sant Cugat del Vallès.',
  ],
};

export interface GalleryItem { img: string; label: string; }
export const clinicGallery: Record<Lang, GalleryItem[]> = {
  ca: [
    { img: B + 'assets/tx-pilates.jpg', label: 'Sala de pilates' },
    { img: B + 'assets/clinic-gym.webp', label: 'Gimnàs' },
    { img: B + 'assets/clinic-Sala-1-1.jpeg', label: 'Sala 1' },
    { img: B + 'assets/clinic-Sala-2.jpeg', label: 'Sala 2' },
    { img: B + 'assets/clinic-Sala-3-1.jpeg', label: 'Sala 3' },
    { img: B + 'assets/clinic-clinica2.webp', label: 'Recepció' },
  ],
  es: [
    { img: B + 'assets/tx-pilates.jpg', label: 'Sala de pilates' },
    { img: B + 'assets/clinic-gym.webp', label: 'Gimnasio' },
    { img: B + 'assets/clinic-Sala-1-1.jpeg', label: 'Sala 1' },
    { img: B + 'assets/clinic-Sala-2.jpeg', label: 'Sala 2' },
    { img: B + 'assets/clinic-Sala-3-1.jpeg', label: 'Sala 3' },
    { img: B + 'assets/clinic-clinica2.webp', label: 'Recepción' },
  ],
};

export interface PriceTable { title: string; rows: { label: string; value: string }[]; }
export const pricesTables: Record<Lang, PriceTable[]> = {
  ca: [
    { title: 'Sessió de fisioteràpia', rows: [ { label: '30 min', value: '39 €' }, { label: '50 min', value: '55 €' } ] },
    { title: 'Bons (descompte sobre sessions)', rows: [ { label: '3 sessions', value: '6%' }, { label: '5 sessions', value: '10%' }, { label: '10 sessions', value: '15%' } ] },
    { title: 'Pilates en grup', rows: [ { label: '1 classe/setmana', value: '60 €/mes' }, { label: '2 classes/setmana', value: '90 €/mes' } ] },
    { title: 'Magnetoteràpia superinductiva', rows: [ { label: 'Primera visita / sessió individual', value: '25 €' }, { label: 'Pack 5 sessions', value: '100 €' }, { label: 'Pack 10 sessions', value: '150 €' } ] },
  ],
  es: [
    { title: 'Sesión de fisioterapia', rows: [ { label: '30 min', value: '39 €' }, { label: '50 min', value: '55 €' } ] },
    { title: 'Bonos (descuento sobre sesiones)', rows: [ { label: '3 sesiones', value: '6%' }, { label: '5 sesiones', value: '10%' }, { label: '10 sesiones', value: '15%' } ] },
    { title: 'Pilates en grupo', rows: [ { label: '1 clase/semana', value: '60 €/mes' }, { label: '2 clases/semana', value: '90 €/mes' } ] },
    { title: 'Magnetoterapia superinductiva', rows: [ { label: 'Primera visita / sesión individual', value: '25 €' }, { label: 'Pack 5 sesiones', value: '100 €' }, { label: 'Pack 10 sesiones', value: '150 €' } ] },
  ],
};

// Colaboradores (logos reales de su web).
export const partners = [
  { img: B + 'assets/ELIT-LOGO-ORIGINAL.png', name: 'Elit' },
  { img: B + 'assets/globalmov.png', name: 'Global Mov' },
  { img: B + 'assets/marinoss.png', name: 'Marinoss' },
  { img: B + 'assets/cvsc.jpg', name: 'Club Voleibol Sant Cugat' },
  { img: B + 'assets/moto.png', name: 'Moto' },
];
