export const STORY = {
  chapters: [
    // ── Chapter 1: Cap. 1: Paseo la plaza ───
    {
      num: 1,
      title: 'Cap. 1: Paseo la plaza',
      bgClass: 'bg-plaza',
      melody: 'twist',
      particleType: 'snow',
      introDialogues: [
        { name: 'Narrador', text: 'Todo comienza cuando los aventureros Viviana y Gastón son convocados en la taberna para héroes "Paseo La Plaza" para combatir hombres lobo...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '...pero de un momento a otro fueron atacados por un demonio mentolado helado!', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Un Helado de Menta Granizada salvaje apareció!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'menta', name: 'Menta Granizada', emoji: '🍦', spriteId: 'helado', hp: 30, maxHp: 30, color: '#55efc4', projEmoji: '❄️', imageUrl: 'assets/menta.png' },
      battleScript: [
        { turn: 'player', text: { novio: '¡Gastón ataca con una servilleta!', novia: '¡Viviana usa alquimia de servilletas!' }, damage: 15 },
        { turn: 'enemy', text: 'El helado te congela la mano.', damage: 5 },
        { turn: 'player', text: { novio: '¡Gastón lanza un mordisco crítico de amor!', novia: '¡Viviana da un beso congelante crítico!' }, damage: 15 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: '¡El helado fue devorado con gran valentía!', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Y desde ese momento comenzaron la party de sus vidas.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Primera cita y hombres lobo ✨', portrait: '✨', color: '#e17055', textColor: '#e17055' }
      ],
      allyIndex: 'other_hero',
      allyDialogues: [
        { name: 'Tu otra mitad', text: '¡Llegué justo a tiempo! Esta aventura la hacemos juntos.', portrait: '💖', color: '#e84393' }
      ]
    },

    // ── Chapter 2: Cap. 2: Ataca el System ──────────────────────────────
    {
      num: 2,
      title: 'Cap. 2: Ataca el System',
      bgClass: 'bg-plaza',
      melody: 'system',
      particleType: 'sparkle',
      introDialogues: [
        { name: 'Narrador', text: 'Viviana, la alquimista cromática y Gastón el bárbaro cocinero se encuentran en la fortaleza de G\'BA, en la búsqueda del gran Banana Terracota Pie.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'El cielo se vuelve escarlata, unos seres oscuros comienzan a correr en círculos, entonan cánticos arcanos...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '...y formando un remolino que abre el portal del Gran Terracota Pie!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'banana', name: 'Banana Pie', emoji: '🍌', spriteId: 'banana', hp: 40, maxHp: 40, color: '#ffd700', projEmoji: '🍌', imageUrl: 'assets/banana.png' },
      battleScript: [
        { turn: 'player', text: { novio: '¡Gastón ataca con un pogo extremo!', novia: '¡Viviana hace headbanging mágico!' }, damage: 20 },
        { turn: 'enemy', text: 'La Banana te tira relleno caliente.', damage: 10 },
        { turn: 'player', text: { novio: '¡Gastón grita el estribillo perfecto!', novia: '¡Viviana canta una nota agua destructiva!' }, damage: 20 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'La batalla fue dura pero nuestros héroes lograron prevalecer.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Ahora más fortalecidos, el Gran Terracota Pie los premia con las melodías de un encantamiento místico de protección dual...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '...ya que el verdadero amor está en la lucha conjunta para no caer en el sistema de la oscuridad.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Banana terracota pie ✨', portrait: '✨', color: '#fdcb6e', textColor: '#fdcb6e' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 3: Cap. 3: Vampiros de Zar'Ate ──────────────────────────
    {
      num: 3,
      title: 'Cap. 3: Vampiros de Zar\'Ate',
      bgClass: 'bg-tablada',
      melody: 'cotton',
      particleType: 'mosquitos',
      introDialogues: [
        { name: 'Narrador', text: 'Mientras Viviana y Gastón planeaban sus próximas hazañas escucharon los rumores de unas criaturas enormes, longevas y que bebían sangre humana, cruzando el puente flotante de Zar\'Ate.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'De inmediato se lanzaron a la aventura, viajaron durante días, hasta que llegaron a un barco abandonado e ingresaron caminando por tablas de madera crujientes y delgadas.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Apenas pisaron al interior del barco escucharon zumbidos fuertes que les impedían oír algo más...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Notaron que en realidad no eran vampiros, sino algo más aterrador: mosquitos gigantes, adaptados para vivir de los campistas!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'mosquito', name: 'Mosquito Gigante', emoji: '🦟', spriteId: 'mosquito', hp: 50, maxHp: 50, color: '#888', projEmoji: '🦟', imageUrl: 'assets/mosquito.png' },
      battleScript: [
        { turn: 'player', text: { novio: '¡Gastón ataca con repelente vencido!', novia: '¡Viviana invoca un escudo anti-insectos!' }, damage: 20 },
        { turn: 'enemy', text: 'El Mosquito te pica el tobillo.', damage: 15 },
        { turn: 'player', text: { novio: '¡Gastón da un golpe de revista enrollada!', novia: '¡Viviana lanza un hechizo atrapa-moscas!' }, damage: 30 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'Luego de una batalla ardua los vencieron...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '...¡y consolidaron su party!', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ El primer viaje ✨', portrait: '✨', color: '#00b894', textColor: '#00b894' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 4: Cap. 4: Base en Ra’mos ─────────────────────────────
    {
      num: 4,
      title: 'Cap. 4: Base en Ra\'mos',
      bgClass: 'bg-tablada',
      melody: 'vidaloca',
      particleType: 'limpieza',
      introDialogues: [
        { name: 'Narrador', text: 'Después de varias travesías juntos, Viviana y Gastón deciden que lo más conveniente era tener una base, donde puedan reunirse, planificar nuevas aventuras y recuperarse de hazañas fallidas.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Luego de una ardua búsqueda encuentran un refugio en lo alto de un roble añoso, que se encontraba en la región de Ram\'Os.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Y como todo tiene un costo, para poder vivir allí debían vencer al demonio del desorden y la suciedad.', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'golem', name: 'Golem de Limpieza', emoji: '🧹', spriteId: 'golem', hp: 45, maxHp: 45, color: '#8b4513', projEmoji: '🧹', imageUrl: 'assets/limpieza.png' },
      battleScript: [
        { turn: 'player', text: { novio: '¡Gastón ataca con la escoba vieja!', novia: '¡Viviana hace levitar los trapos!' }, damage: 25 },
        { turn: 'enemy', text: 'El Golem lanza un splash de suciedad.', damage: 10 },
        { turn: 'player', text: { novio: '¡Gastón le tira agua limpia y se derrite!', novia: '¡Viviana purifica con luz estelar!' }, damage: 20 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'Después de una ardua pelea lo lograron vencer, pero no del todo...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '...pasó a ser un ente pegado a Viviana y Gastón, haciendo de las suyas para que nunca olvidemos al ahora llamado fantasma del desorden.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Nuestra primera casita ✨', portrait: '✨', color: '#fd79a8', textColor: '#fd79a8' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 5: Cap. 5: Dulce Recompensa ──────────────────────────────
    {
      num: 5,
      title: 'Cap. 5: Dulce Recompensa',
      bgClass: 'bg-cemic',
      melody: 'angeles',
      particleType: 'salud',
      introDialogues: [
        { name: 'Narrador', text: 'Ya instalados en su base, Viviana y Gastón deciden hacer un gran banquete mágico que duró varios días y noches...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Desayunos con mermeladas ácidas de slime, pan de lembas y agua miel. Almuerzos con jamón de jabalí cuernos de oro y huevos fritos de hipogrifa. Cena de mantícoras rellenas de hongos envueltas en tocino.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'No se dieron cuenta que esos alimentos tenían mucha carga de maná, ¡tanta que se sobrecargó Viviana!', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Tuvieron que buscar una médica especialista en exceso de maná que a toda costa quería que Viviana eliminara esa energía.', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'diabetologa', name: 'Médica de Maná', emoji: '👩‍⚕️', spriteId: 'hospital', hp: 60, maxHp: 60, color: '#3498db', projEmoji: '🍬', imageUrl: 'assets/diabetologa.png', flip: true },
      battleScript: [
        { turn: 'player', text: '¡Canalizan el exceso de maná en un rayo purificador!', damage: 20 },
        { turn: 'enemy', text: 'La médica ataca con un análisis de maná estricto.', damage: 15 },
        { turn: 'player', text: '¡Un hechizo de drenaje disipa la tensión energética!', damage: 40 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'Luego de muchos hechizos y lucha, Viviana logró liberar todo ese maná, pero no en forma de energía, sino en un nuevo ser...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡De esa energía pura nace Valentina, la ama de las bestias, y se une a la party!', portrait: '🎉', color: '#27ae60' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Magia y nueva vida ✨', portrait: '✨', color: '#a29bfe', textColor: '#a29bfe' }
      ],
      allyIndex: 0,
      allyDialogues: [
        { name: 'Valentina', text: 'Todas las bestias están a mi diestra y bajo mi mando, me sigue una sombra de gatos que hacen mi voluntad. ¡Todo michi es mío y hermoso. Gataquen!', portrait: '🐾', color: '#27ae60' }
      ]
    },

    // ── Chapter 6: Cap. 6: Camino a Tabla'Dah ─────────────────────
    {
      num: 6,
      title: 'Cap. 6: Camino a Tabla\'Dah',
      bgClass: 'bg-tablada',
      melody: 'burger',
      particleType: 'comida',
      introDialogues: [
        { name: 'Narrador', text: 'Ya siendo tres en la party, la base les quedaba chica, así que tuvieron que buscar un nuevo rumbo en la región de Tab\'lada.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Zona que Gastón recorrió de pequeño, conocido como Gastón "el niño piro" porque quemaba todo lo que estaba a su paso.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Se hace de noche y aparece un vendedor misterioso que les recomienda la hamburguesa con queso monstruo y papas fritas, advirtiendo que si la comen "mal" les pateará el hígado.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Pasan por alto el comentario. Al apoyar el paquete en la mesa, ¡empieza a moverse solo! Salen tentáculos amarillos de cheddar y vuelan papas fritas...', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'burger', name: 'Burger Mutante', emoji: '🍔', spriteId: 'burger', hp: 60, maxHp: 60, color: '#d2691e', projEmoji: '🍔', imageUrl: 'assets/burguer.png' },
      battleScript: [
        { turn: 'player', text: '¡Ataque de tenedor afilado!', damage: 30 },
        { turn: 'enemy', text: 'Lanza chorro de ketchup y cheddar radiactivo.', damage: 20 },
        { turn: 'player', text: '¡Te comés la mutación con papas fritas!', damage: 30 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'Comienza la batalla a mordiscos, golpes y encantamientos. Después de un gran esfuerzo, ¡los tres lograron comerse todo el combo!', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Terminaron agotados y decidieron solo comer lo que se cocina en casa, la comida a domicilio puede ser muy peligrosa.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Que bueno es comer juntos ✨', portrait: '✨', color: '#e84393', textColor: '#e84393' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 7: Cap. 7: Amor Amarillo ───────────────────────────────────
    {
      num: 7,
      title: 'Cap. 7: Amor Amarillo',
      bgClass: 'bg-cemic',
      melody: 'militar',
      particleType: 'salud',
      introDialogues: [
        { name: 'Narrador', text: 'Como equipo de tres, Viviana empezó a organizar las alacenas de pócimas, estantes de armas, cofres y hasta las aventuras. Se llenó de responsabilidades y se volvió súper estricta.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Gastón y Valentina ya no lo soportaban, así que decidieron llevar a Viviana a El bastión médico Strictus para que le drenen esa energía.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Esa acumulación de energía amarilla obstruía sus canales de magia. La única forma era enfrentarse a alguien aún más mandona que Viviana...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Y así aparece la temible Enfermera Serverus!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'militar', name: 'Enfermera Serverus', emoji: '👩‍⚕️', spriteId: 'militar', hp: 55, maxHp: 55, color: '#e74c3c', projEmoji: '💊', imageUrl: 'assets/militar.png', flip: true },
      battleScript: [
        { turn: 'player', text: '¡Atacan con paciencia y mucho amor!', damage: 25 },
        { turn: 'enemy', text: 'La enfermera ataca con luz azul y pesadas reglas.', damage: 15 },
        { turn: 'player', text: '¡Un abrazo cargado de paciencia y amor logra purificar el lugar!', damage: 30 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'La enfermera Serverus, con su energía mágica azulina, logró liberar los canales de magia de Viviana.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Como era una cantidad de energía enorme, al liberarla nació un nuevo ser brillante, enérgico y temperamental...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Margarita la pícara berserker se une a la party!', portrait: '🎉', color: '#e67e22' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Bienvenida, ahora si estamos todos! ✨', portrait: '✨', color: '#e67e22', textColor: '#e67e22' }
      ],
      allyIndex: 1,
      allyDialogues: [
        { name: 'Margarita', text: '¡Pase, salto, rondo, spagat y decapitación! Bromear, atacar, ágil y brutal. ¡Se acabó la rigidez!', portrait: '🤸‍♀️', color: '#e67e22' }
      ]
    },

    // ── Chapter 8: Cap. 8: Aventura Congelada ───────────────────────────
    {
      num: 8,
      title: 'Cap. 8: Aventura Congelada',
      bgClass: 'bg-militar',
      melody: 'yeti',
      particleType: 'snow',
      introDialogues: [
        { name: 'Narrador', text: 'Viviana la maga, Gastón el bárbaro, Valentina la druida y Margarita la pícara acróbata se preparan para una aventura en las laderas nevadas de la cordillera Andin, que separa Chill\'e y Argent\'ina.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Tienen la misión de encontrar unos fragmentos de seres ancestrales que pueden generar maná ilimitado.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Pasaron por el lago Agrio (lleno de ácido sulfúrico) y rodearon las paredes del volcán Copahue humeante y oloroso...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Pero al llegar se encuentran con el guardián de los fragmentos: un Yeti de 4 metros completamente de hielo y nieve!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'yeti', name: 'Yeti de hielo', emoji: '❄️', spriteId: 'yeti', hp: 80, maxHp: 80, color: '#e0f7fa', projEmoji: '❄️', imageUrl: 'assets/yeti.png' },
      battleScript: [
        { turn: 'player', text: '¡Ataque de bola de nieve traicionera!', damage: 30 },
        { turn: 'enemy', text: 'El Yeti ruge creando una ventisca.', damage: 25 },
        { turn: 'player', text: '¡Le ofrecés chocolate caliente y se calma!', damage: 50 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'Lucharon los cuatro con todas sus fuerzas y lograron obtener los fragmentos.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Los fragmentos conformaron una nueva orbe y vencieron al Yeti!', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Una aventura congelada ✨', portrait: '✨', color: '#74b9ff', textColor: '#74b9ff' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 9: Cap. 9: Rey Gato ────────────────────────────────────────
    {
      num: 9,
      title: 'Cap. 9: Rey Gato',
      bgClass: 'bg-tablada',
      melody: 'reygato',
      particleType: 'hearts',
      introDialogues: [
        { name: 'Narrador', text: 'Descansando en su refugio, empiezan a notar movimientos extraños: sombras rápidas, comida que desaparece de las alacenas y carne devorada de la heladera.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Una noche escuchan ruidos extraños en el comedor. Al encender la luz ven algo que les erizó la piel...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Un cúmulo de seres que ronroneaban y maullaban sentados en un trono (¿de dónde salió?). Valentina traduce que dicen ser los dueños de todo y que no pueden evitarlo.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Es hora de enfrentarse al Rey Gato!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'gato', name: 'Rey Gato', emoji: '🐈', spriteId: 'gato', hp: 70, maxHp: 70, color: '#f1c40f', projEmoji: '🐾', imageUrl: 'assets/gatos.png' },
      battleScript: [
        { turn: 'player', text: '¡Agitás un láser rojo rápidamente!', damage: 30 },
        { turn: 'enemy', text: 'Zarpazo real de desdén absoluto.', damage: 10 },
        { turn: 'player', text: '¡Abrís una lata de paté premium!', damage: 40 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'Sabían que la batalla tenía que ser larga; debían aguantar hasta que al Rey Gato le diera sueño...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Lucharon hasta que el cúmulo de gatos se durmió y se debilitó, diciendo: "pueden ser nuestros sirvientes y nosotros los ayudaremos, cuando tengamos ganas".', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Así consiguieron al último aliado de la party, el Rey Gato!', portrait: '🎉', color: '#f1c40f' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Miau miau miau! ✨', portrait: '✨', color: '#f1c40f', textColor: '#f1c40f' }
      ],
      allyIndex: 2,
      allyDialogues: [
        { name: 'Multigato', text: 'Miau, maumau Miau mau. (Nosotros los ayudaremos, cuando tengamos ganas de hacerlo).', portrait: '🐾', color: '#f1c40f' }
      ]
    },

    // ── Chapter 10: Cap. 10: Mensaje de la Luna ──────────────────────────
    {
      num: 10,
      title: 'Cap. 10: Mensaje de la Luna',
      bgClass: 'bg-tablada',
      melody: 'mistica',
      particleType: 'stars',
      image: 'assets/luna.png',
      introDialogues: [
        { name: 'Narrador', text: 'Fueron encomendados por una Clériga Selenita para recibir el mensaje que debía darles la Diosa Lunar.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Atravesaron la selva espesa solo guiados por la luz lunar. Al acostumbrarse su vista, vieron la sombra de un Leviatán en los ríos, pájaros azules brillantes y los ojos de un yaguarundí.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Comenzaron a oír el rugido potente proveniente de una de las caídas de agua más grandes que nunca olvidarán: las cataratas sagradas de Igua\'zu.', portrait: '📖', color: '#a29bfe' },
        { name: 'Diosa Selenita', text: 'Llegaron hasta acá después de muchas aventuras. Para poder pasar de nivel deben enfrentarse al Cerezo ancestral.', portrait: '🌙', color: '#dfe6e9' },
        { name: 'Diosa Selenita', text: 'Les entrego mi halo lunar de protección para su próxima batalla.', portrait: '🌙', color: '#dfe6e9' },
        { name: 'Narrador', text: 'Un anillo de luz descendió y se grabó en el dedo anular de Gastón y Viviana.', portrait: '📖', color: '#a29bfe' }
      ],
      enemy: null,
      battleScript: [],
      resolutionDialogues: [
        { name: 'Narrador', text: 'El agua y la luna brillan con intensidad. Con la bendición de los halos de luz grabados en sus dedos, avanzan.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ La luna llena y la propuesta ✨', portrait: '✨', color: '#dfe6e9', textColor: '#dfe6e9' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 11: Cap. 11: El Cerezo milenario ──────────────────────────
    {
      num: 11,
      title: 'Cap. 11: El Cerezo milenario',
      bgClass: 'bg-jardin',
      melody: 'epica',
      particleType: 'hearts',
      introDialogues: [
        { name: 'Narrador', text: 'Los 4 viajeros, más el Rey Gato fueron a enfrentarse al Cerezo.', portrait: '🌸', color: '#fd79a8' },
        { name: 'El Cerezo Milenario', text: '¡Alto ahí, simples mortales! ¿Están seguros de que se aman lo suficiente como para portar estos anillos?', portrait: '🌸', color: '#fd79a8' },
        { name: 'Narrador', text: 'Sus hechizos y espadas no logran hacerle ni un rasguño. ¡Lo único que les queda es el poder de los orbes de recuerdos que ganaron!', portrait: '📖', color: '#a29bfe' }
      ],
      enemy: { id: 'cerezo', name: 'El Cerezo Milenario', emoji: '🌸', spriteId: 'cerezo', hp: 150, maxHp: 150, color: '#fd79a8', projEmoji: '🌸', imageUrl: 'assets/cerezo.png', defeatText: 'El Cerezo Milenario está profundamente conmovido...' },
      battleScript: [
        { turn: 'player', text: '¡Le ofrecen el Orbe de Paseo la plaza: Primera cita y hombres lobo!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Ataca el System: Banana terracota pie!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Vampiros de Zar\'Ate: El primer viaje!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Base en Ra\'mos: Nuestra primera casita!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Dulce Recompensa: Magia y nueva vida!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Camino a Tabla\'Dah: Que bueno es comer juntos!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Amor Amarillo: Bienvenida, ahora si estamos todos!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Aventura Congelada: Una aventura congelada!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe del Rey Gato: Miau miau miau!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Mensaje de la Luna: La luna llena y la propuesta!', damage: 15 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'Lanzaron los orbes uno a uno, y la magia de esos recuerdos empezó a resquebrajar la corteza del Cerezo, rindiéndose.', portrait: '🌸', color: '#fd79a8' },
        { name: 'El Cerezo Milenario', text: 'Esos bellos e irremplazables recuerdos, la cantidad de energía magica que tienen y a pesar de ello los están sacrificando por algo que no saben si vale la pena...', portrait: '🌸', color: '#fd79a8' },
        { name: 'El Cerezo Milenario', text: '...eso me conmueve en lo más profundo de mis raices. Aquí tienen sus enlaces físico-espiritual.', portrait: '🌸', color: '#fd79a8' },
        { name: 'Narrador', text: 'Los halos de luz se materializaron en anillos de compromiso.', portrait: '💍', color: '#fdcb6e' },
        { name: 'Viviana', text: 'Con nuestras hazañas, sean victoriosas o desastrosas no se deben olvidar, lo principal es aprender la causa y efecto de nuestras acciones y a partir de esto fluir, transformar el ego y dolor en sabiduría y amor.', portrait: '✨', color: '#9b59b6' },
        { name: 'Gastón', text: 'Cuantos años hace que salimos al mundo sin saber lo que habia afuera. Aventura, dolores y alegrias. Me alegro tanto de quienes estan en esta party lluchando y compartiendo la mesa conmigo <3.', portrait: '🍳', color: '#e74c3c' },
        { name: 'Valentina', text: 'Un viaje largo pero ya somos una manada y las manadas son para siempre, nos podemos pelear pero nunca nos separamos.', portrait: '🦁', color: '#27ae60' },
        { name: 'Margarita', text: 'Cada uno es la colchoneta del otro, si uno se cae evitamos que se lo coma el Yeti.', portrait: '🤸‍♀️', color: '#e67e22' },
        { name: 'Multigatos', text: 'Miau, maumau Miau mau.', portrait: '🐈', color: '#f1c40f' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 12: Cap. 12: Gruya del destino ──────────────────────────
    {
      num: 12,
      title: 'Cap. 12: Gruya del destino',
      bgClass: 'bg-jardin',
      melody: 'grulla',
      particleType: 'sparkle',
      image: 'assets/gruya.png',
      introDialogues: [
        { name: 'Narrador', text: 'Una grulla majestuosa descendió de las nubes portando un pergamino brillante...', portrait: '📖', color: '#a29bfe' },
        { name: 'Grulla de la Buenaventura', text: 'Estás invitado a presenciar el momento culmine de esta hermosa aventura...', portrait: '🦩', color: '#fff' },
        { name: 'Grulla de la Buenaventura', text: 'Te esperamos el viernes 17 de julio del 2026 a las 13:50 en el jardín japonés.', portrait: '🦩', color: '#fff' }
      ],
      enemy: null,
      battleScript: [],
      resolutionDialogues: [],
      allyIndex: null,
      allyDialogues: null
    }
  ],

  finaleDialogues: [
    { name: 'Narrador', text: 'Han vencido los obstáculos más raros del conurbano.', portrait: '📖', color: '#a29bfe' },
    { name: 'Narrador', text: 'Y han formado un equipo imparable...', portrait: '📖', color: '#a29bfe' },
    { name: 'Narrador', text: '¡Porque el objetivo final siempre fue celebrar el AMOR!', portrait: '💖', color: '#e84393' }
  ]
};
