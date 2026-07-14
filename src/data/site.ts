// Datos globales de contacto/marca. Idénticos en CA y ES.
export const site = {
  name: 'Fisioymés',
  phone: '+34 664 76 25 70',
  phoneHref: 'tel:+34664762570',
  whatsapp: '34664762570',
  email: 'info@fisioymes.com',
  address: 'Carrer Xerric 4, Local 1',
  city: 'Sant Cugat del Vallès',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fisioymes+Carrer+Xerric+4+Sant+Cugat+del+Valles',
  facebook: 'https://www.facebook.com/fisioymes/',
  instagram: 'https://www.instagram.com/fisioymes/',
  bookingUrl: 'https://app.clinic-cloud.com/citaonline.php/fisioymes',
  googleRating: '5.0',
  googleReviews: 66,
} as const;

// Menú: [slug relativo al idioma, clave de etiqueta]
export const navKeys = ['home', 'treatments', 'team', 'clinic', 'prices', 'booking'] as const;
