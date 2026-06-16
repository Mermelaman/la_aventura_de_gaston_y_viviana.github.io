// ============================================
// CONFIGURACIÓN DE LA BODA
// Editá estos valores para personalizar tu invitación
// ============================================

export const CONFIG = {
  // Nombres de los novios
  couple: {
    name1: 'Viviana',
    name2: 'Gastón',
  },

  // Detalles del evento
  wedding: {
    date: '17 de Julio',
    time: '13:50 hs',
    venue: 'Jardín Japonés',
    address: 'Av. Casares 3450, CABA',
    dressCode: 'Como gusten (¡se aprecia freaky o colorido!)',
    ceremony: 'Después podemos ir a tomar algo si gustan.',
  },

  // Confirmación de asistencia
  rsvp: {
    enabled: true,
    // Podés usar un link de WhatsApp, Google Form, o lo que prefieras
    url: 'https://wa.me/5491160187623?text=S%C3%AD%20asistir%C3%A9%20al%20evento%20del%2017%20de%20julio%20a%20las%2013:50%20hs%20en%20el%20jard%C3%ADn%20japon%C3%A9s.%20Firma:%20',
    buttonText: 'Confirmar Asistencia',
  },

  // Paleta de colores del juego
  theme: {
    primary: '#e84393',
    primaryLight: '#fd79a8',
    secondary: '#6c5ce7',
    secondaryLight: '#a29bfe',
    gold: '#ffeaa7',
    goldBright: '#fdcb6e',
    dark: '#0a0a1a',
  },
};
