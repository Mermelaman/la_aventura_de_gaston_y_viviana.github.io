export const STORY = {
  chapters: [
    // ── Chapter 1: Peor que un hombre lobo es la menta granizada ───
    {
      num: 1,
      title: 'Peor que un hombre lobo es la menta granizada',
      bgClass: 'bg-plaza',
      melody: 'twist',
      particleType: 'snow',
      introDialogues: [
        { name: 'Narrador', text: 'Un paseo tranquilo por la plaza...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'El aire estaba fresco, todo parecía normal.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Hasta que un Helado de Menta Granizada salvaje apareció!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'menta', name: 'Menta Granizada', emoji: '🍦', spriteId: 'helado', hp: 30, maxHp: 30, color: '#55efc4', imageUrl: 'assets/menta.png' },
      battleScript: [
        { turn: 'player', text: { novio: '¡Gastón ataca con una servilleta!', novia: '¡Viviana usa alquimia de servilletas!' }, damage: 15 },
        { turn: 'enemy', text: 'El helado te congela la mano.', damage: 5 },
        { turn: 'player', text: { novio: '¡Gastón lanza un mordisco crítico de amor!', novia: '¡Viviana da un beso congelante crítico!' }, damage: 15 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: '¡El helado fue devorado!', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Y tu otra mitad aparece para compartir el postre!', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Primera cita y hombres lobo ✨', portrait: '✨', color: '#e17055', textColor: '#e17055' }
      ],
      allyIndex: 'other_hero',
      allyDialogues: [
        { name: 'Tu otra mitad', text: '¡Llegué justo a tiempo! Esta aventura la hacemos juntos.', portrait: '💖', color: '#e84393' }
      ]
    },

    // ── Chapter 2: Atacando al system ──────────────────────────────
    {
      num: 2,
      title: 'Atacando al system',
      bgClass: 'bg-plaza',
      melody: 'system',
      particleType: 'sparkle',
      introDialogues: [
        { name: 'Narrador', text: 'Llegaron al recital de System of a Down.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'La música suena fuerte, la multitud salta.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡BANANA BANANA BANANA PIE!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'banana', name: 'Banana Pie', emoji: '🍌', spriteId: 'banana', hp: 40, maxHp: 40, color: '#ffd700', imageUrl: 'assets/banana.png' },
      battleScript: [
        { turn: 'player', text: { novio: '¡Gastón ataca con un pogo extremo!', novia: '¡Viviana hace headbanging mágico!' }, damage: 20 },
        { turn: 'enemy', text: 'La Banana te tira relleno caliente.', damage: 10 },
        { turn: 'player', text: { novio: '¡Gastón grita el estribillo perfecto!', novia: '¡Viviana canta una nota aguda destructiva!' }, damage: 20 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'La Banana Pie explotó en mil pedazos.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡La multitud enloquece!', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Banana terracota pie ✨', portrait: '✨', color: '#fdcb6e', textColor: '#fdcb6e' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 3: Los vampiros de Zar'Ate ──────────────────────────
    {
      num: 3,
      title: "Los vampiros de Zar'Ate",
      bgClass: 'bg-tablada',
      melody: 'cotton',
      particleType: 'mosquitos',
      introDialogues: [
        { name: 'Narrador', text: 'El barco abandonado parecía una gran idea para explorar...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Pero el zumbido se hizo cada vez más fuerte.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Un Mosquito Gigante bloquea el camino!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'mosquito', name: 'Mosquito Gigante', emoji: '🦟', spriteId: 'mosquito', hp: 50, maxHp: 50, color: '#888', imageUrl: 'assets/mosquito.png' },
      battleScript: [
        { turn: 'player', text: { novio: '¡Gastón ataca con repelente vencido!', novia: '¡Viviana invoca un escudo anti-insectos!' }, damage: 20 },
        { turn: 'enemy', text: 'El Mosquito te pica el tobillo.', damage: 15 },
        { turn: 'player', text: { novio: '¡Gastón da un golpe de revista enrollada!', novia: '¡Viviana lanza un hechizo atrapa-moscas!' }, damage: 30 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'El Mosquito se fue volando mareado.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'La exploración del barco fue un éxito.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ El primer viaje ✨', portrait: '✨', color: '#00b894', textColor: '#00b894' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 4: La base en Ram'Os ─────────────────────────────
    {
      num: 4,
      title: 'La base en Ram\'Os',
      bgClass: 'bg-tablada',
      melody: 'vidaloca',
      particleType: 'limpieza',
      introDialogues: [
        { name: 'Narrador', text: 'Al llegar, el desorden absoluto era tal que dio nacimiento al mismísimo Golem de Limpieza.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Debemos vencerlo si queremos poder habitar nuestra nueva base!', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡A sacar las escobas y los trapos!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'golem', name: 'Golem de Limpieza', emoji: '🧹', spriteId: 'golem', hp: 45, maxHp: 45, color: '#8b4513', imageUrl: 'assets/limpieza.png' },
      battleScript: [
        { turn: 'player', text: { novio: '¡Gastón ataca con la escoba vieja!', novia: '¡Viviana hace levitar los trapos!' }, damage: 25 },
        { turn: 'enemy', text: 'El Golem lanza un splash tóxico de mugre.', damage: 10 },
        { turn: 'player', text: { novio: '¡Gastón le tira agua limpia y se derrite!', novia: '¡Viviana purifica el Golem con luz estelar!' }, damage: 20 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: '¡El Golem fue purificado y la base en Ram\'Os es finalmente habitable!', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Aunque un poco de esa maldición del desorden siempre quedará flotando en el aire...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡El fantasma del desorden los seguirá por siempre!', portrait: '👻', color: '#e17055' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Nuestra primera casita ✨', portrait: '✨', color: '#fd79a8', textColor: '#fd79a8' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 5: Dulces recompensas ──────────────────────────────
    {
      num: 5,
      title: 'Dulces recompensas',
      bgClass: 'bg-cemic',
      melody: 'angeles',
      particleType: 'salud',
      introDialogues: [
        { name: 'Narrador', text: 'Tras un gran banquete con delicias místicas, Viviana quedó con un exceso de maná...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Fueron a ver a un médico especialista en magia para tratar este exceso.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Pero el maná descontrolado atrajo al Fantasma del Azúcar!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'diabetologa', name: 'Fantasma del Azúcar', emoji: '👻', spriteId: 'hospital', hp: 60, maxHp: 60, color: '#3498db', imageUrl: 'assets/diabetologa.png', flip: true },
      battleScript: [
        { turn: 'player', text: '¡Canalizan el exceso de maná en un rayo purificador!', damage: 20 },
        { turn: 'enemy', text: 'El fantasma ataca con un pico de glucosa mágica.', damage: 15 },
        { turn: 'player', text: '¡Un hechizo de insulina mística disipa al fantasma!', damage: 40 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'El fantasma es derrotado y el exceso de maná cristaliza...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡De esa cristalización mágica nace un nuevo ser!', portrait: '✨', color: '#f1c40f' },
        { name: 'Narrador', text: '¡Valentina, Druida y ama de bestias, se une a la party!', portrait: '🎉', color: '#27ae60' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Magia y nueva vida ✨', portrait: '✨', color: '#a29bfe', textColor: '#a29bfe' }
      ],
      allyIndex: 0,
      allyDialogues: [
        { name: 'Valentina', text: '¡Las bestias están bajo control! Vamos a seguir adelante.', portrait: '🦁', color: '#27ae60' }
      ]
    },

    // ── Chapter 6: La nueva Base en Tab'ladah ─────────────────────
    {
      num: 6,
      title: 'La nueva Base en Tab\'ladah',
      bgClass: 'bg-tablada',
      melody: 'burger',
      particleType: 'comida',
      introDialogues: [
        { name: 'Narrador', text: 'Tras el esfuerzo de buscar esta base, solicitaron el envío de provisiones.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Pero algo oscuro se escondía entre los víveres...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Un monstruo de carne y queso se coló y ahora ataca!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'burger', name: 'Burger Mutante', emoji: '🍔', spriteId: 'burger', hp: 60, maxHp: 60, color: '#d2691e', imageUrl: 'assets/burguer.png' },
      battleScript: [
        { turn: 'player', text: '¡Ataque de tenedor afilado!', damage: 30 },
        { turn: 'enemy', text: 'Lanza chorro de ketchup radiactivo.', damage: 20 },
        { turn: 'player', text: '¡Te comés la mutación con papas fritas!', damage: 30 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'Mudanza completada y cena superada.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Que bueno es comer juntos ✨', portrait: '✨', color: '#e84393', textColor: '#e84393' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 7: Hospital Militar ───────────────────────────────────
    {
      num: 7,
      title: 'Hospital Militar',
      bgClass: 'bg-cemic',
      melody: 'militar',
      particleType: 'salud',
      introDialogues: [
        { name: 'Narrador', text: 'Viviana se puso más y más mandona con el tiempo...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'La party lleva a Viviana al bastion medico strictus para sanar su manditis amarilla.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Aparece la temible Enfermera Severus!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'militar', name: 'Enfermera Severus', emoji: '👩‍⚕️', spriteId: 'militar', hp: 55, maxHp: 55, color: '#e74c3c', imageUrl: 'assets/militar.png', flip: true },
      battleScript: [
        { turn: 'player', text: '¡Atacan con paciencia y mucho amor!', damage: 25 },
        { turn: 'enemy', text: 'La enfermera ataca con luz azul y pesadas reglas.', damage: 15 },
        { turn: 'player', text: '¡Un abrazo cargado de paciencia y amor logra purificar el lugar!', damage: 30 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'El ente amarillo expulsado se condensa en una nueva forma...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Da origen a Margarita, la pícara berserker, que se une a la party!', portrait: '🎉', color: '#e67e22' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Bienvenida, ahora si estamos todos! ✨', portrait: '✨', color: '#e67e22', textColor: '#e67e22' }
      ],
      allyIndex: 1,
      allyDialogues: [
        { name: 'Margarita', text: '¡Nada de rigidez! ¡A saltar y romper todo en modo berserker!', portrait: '🤸‍♀️', color: '#e67e22' }
      ]
    },

    // ── Chapter 8: La aventura congelada ───────────────────────────
    {
      num: 8,
      title: 'La aventura congelada',
      bgClass: 'bg-militar',
      melody: 'yeti',
      particleType: 'snow',
      introDialogues: [
        { name: 'Narrador', text: 'En su travesía para encontrar la aventura última...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'El frío congela los huesos en las nieves eternas.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Un inmenso Yeti de hielo bloquea el paso!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'yeti', name: 'Yeti de hielo', emoji: '❄️', spriteId: 'yeti', hp: 80, maxHp: 80, color: '#e0f7fa', imageUrl: 'assets/yeti.png' },
      battleScript: [
        { turn: 'player', text: '¡Ataque de bola de nieve traicionera!', damage: 30 },
        { turn: 'enemy', text: 'El Yeti ruge creando una ventisca.', damage: 25 },
        { turn: 'player', text: '¡Le ofrecés chocolate caliente y se calma!', damage: 50 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'El Yeti de hielo se va caminando feliz con su chocolate.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Una aventura congelada -pero no es frozen eh!- ✨', portrait: '✨', color: '#74b9ff', textColor: '#74b9ff' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 9: Rey Gato ────────────────────────────────────────
    {
      num: 9,
      title: 'Rey Gato',
      bgClass: 'bg-tablada',
      melody: 'reygato',
      particleType: 'hearts',
      introDialogues: [
        { name: 'Narrador', text: 'En el living, sobre un trono de cartón...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'El verdadero dueño de la casa revela su identidad.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Es el Rey Gato: una masa de gatos aglomerados exigiendo tributo!', portrait: '⚔️', color: '#e17055' }
      ],
      enemy: { id: 'gato', name: 'Rey Gato', emoji: '🐈', spriteId: 'gato', hp: 70, maxHp: 70, color: '#f1c40f', imageUrl: 'assets/gatos.png' },
      battleScript: [
        { turn: 'player', text: '¡Agitás un láser rojo rápidamente!', damage: 30 },
        { turn: 'enemy', text: 'Zarpazo real de desdén absoluto.', damage: 10 },
        { turn: 'player', text: '¡Abrís una lata de paté premium!', damage: 40 }
      ],
      resolutionDialogues: [
        { name: 'Narrador', text: 'El Rey Gato y sus súbditos aceptan el tributo.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡Multigatos se unen a la party (cuando tienen ganas)!', portrait: '🎉', color: '#f1c40f' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ Miau miau miau! ✨', portrait: '✨', color: '#f1c40f', textColor: '#f1c40f' }
      ],
      allyIndex: 2,
      allyDialogues: [
        { name: 'Multigatos', text: '¡Miau! ¡Miau! (Nos unimos a esta hermosa familia)', portrait: '🐾', color: '#f1c40f' }
      ]
    },

    // ── Chapter 10: Igua'zu (cinematic) ──────────────────────────
    {
      num: 10,
      title: 'Igua\'zu',
      bgClass: 'bg-tablada',
      melody: 'mistica',
      particleType: 'stars',
      image: 'assets/luna.png',
      introDialogues: [
        { name: 'Narrador', text: 'Llegaron a las Cataratas del Iguazú.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'El agua ruge y cae con fuerza infinita...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'No hay enemigos aquí.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'En el cielo nocturno, aparece la Luna Oracular.', portrait: '🌙', color: '#dfe6e9' },
        { name: 'Narrador', text: 'El camino recorrido los ha traído hasta aquí...', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Prepárense para la prueba final...', portrait: '📖', color: '#a29bfe' }
      ],
      enemy: null,
      battleScript: [],
      resolutionDialogues: [
        { name: 'Narrador', text: 'El agua y la luna brillan con intensidad.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'La party avanza con determinación.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: 'Obtuvieron: Orbe de buenos recuerdos', portrait: '🔮', color: '#0984e3' },
        { name: 'Orbe de Recuerdos', text: '✨ La luna llena y la propuesta ✨', portrait: '✨', color: '#dfe6e9', textColor: '#dfe6e9' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 11: BOSS – El Cerezo Milenario ──────────────────────────
    {
      num: 11,
      title: 'El cerezo milenario',
      bgClass: 'bg-jardin',
      melody: 'epica',
      particleType: 'hearts',
      introDialogues: [
        { name: 'Narrador', text: 'Frente a ustedes se yergue el imponente Cerezo Milenario.', portrait: '🌸', color: '#fd79a8' },
        { name: 'El Cerezo Milenario', text: '¡Alto ahí, simples mortales!', portrait: '🌸', color: '#fd79a8' },
        { name: 'El Cerezo Milenario', text: '¿Están seguros de que se aman lo suficiente como para portar estos anillos?', portrait: '🌸', color: '#fd79a8' }
      ],
      enemy: { id: 'cerezo', name: 'El Cerezo Milenario', emoji: '🌸', spriteId: 'cerezo', hp: 150, maxHp: 150, color: '#fd79a8', imageUrl: 'assets/cerezo.png', defeatText: 'El Cerezo Milenario está profundamente conmovido...' },
      battleScript: [
        { turn: 'player', text: '¡Le ofrecen el Orbe de Peor que un hombre lobo es la menta granizada: Primera cita y hombres lobo!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Atacando al system: Banana terracota pie!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Los vampiros de Zar\'Ate: El primer viaje!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de La base en Ram\'Os: Nuestra primera casita!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Dulces recompensas: Magia y nueva vida!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de La nueva Base en Tab\' Ladah: Que bueno es comer juntos!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de Amor amarillo: Bienvenida, ahora si estamos todos!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de La aventura congelada: nieve volcanes y el viaje al oeste!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe del Rey Gato: Miau miau miau!', damage: 15 },
        { turn: 'player', text: '¡Le ofrecen el Orbe de la Luna Oracular: La luna llena y la propuesta!', damage: 15 }
      ],
      resolutionDialogues: [
        { name: 'El Cerezo Milenario', text: '¡Ah! ¡Tantos recuerdos hermosos juntos... me llenan de alegría!', portrait: '🌸', color: '#fd79a8' },
        { name: 'Narrador', text: 'El Cerezo absorbe los orbes y derrama su bendición sobre ustedes.', portrait: '✨', color: '#f1c40f' },
        { name: 'Narrador', text: 'De pronto, florece radiante e ilumina todo el jardín con pétalos mágicos.', portrait: '✨', color: '#f1c40f' },
        { name: 'Narrador', text: 'De sus ramas bajó flotando el regalo final.', portrait: '📖', color: '#a29bfe' },
        { name: 'Narrador', text: '¡LOS ANILLOS FUERON OBTENIDOS!', portrait: '💍', color: '#fdcb6e' }
      ],
      allyIndex: null,
      allyDialogues: null
    },

    // ── Chapter 12: La Grulla ──────────────────────────
    {
      num: 12,
      title: 'El Final del Camino?',
      bgClass: 'bg-jardin',
      melody: 'grulla',
      particleType: 'sparkle',
      image: 'assets/gruya.png',
      introDialogues: [
        { name: 'Narrador', text: 'El cielo se despeja y el viento trae un suave sonido.', portrait: '📖', color: '#a29bfe' },
        { name: 'Grulla de la buenaventura', text: '¡Kuaaa! Soy la Grulla de la buenaventura.', portrait: '🦩', color: '#fff' },
        { name: 'Grulla de la buenaventura', text: 'Les anuncio que, aunque hayan obtenido los anillos...', portrait: '🦩', color: '#fff' },
        { name: 'Grulla de la buenaventura', text: '¡La verdadera aventura continúa!', portrait: '🦩', color: '#fff' }
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
