XiaomiTech ONE PAGE

Dominio:
https://robotlimpieza.com.es/

Teléfono SOLO en caja de información:
+34 910 05 40 92

Teléfono de todos los botones telefónicos:
+34 914 46 85 03

Diagnóstico:
20 € + IVA.
NO indicar diagnóstico gratuito.

Incluye:
- WhatsApp 24/365
- Solicitud de recogida
- Atención telefónica
- Google Business
- YouTube
- Cal.com
- Formulario SMTP
- Chatbot n8n
- Mapa
- SEO One Page

Variables SMTP compartidas en Vercel:
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada únicamente en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

El correo de soporte no aparece visible en el HTML; solo se utiliza en /api/contacto.

Google Analytics:
G-LCFXLT9V01

REVISIÓN (fixes aplicados):
- Ya tenía menú móvil funcional, colisión del chatbot corregida y borde
  blanco en el botón del chat (aplicado en un commit anterior); no se ha
  tocado nada de eso.
- Ya tenía datos schema.org LocalBusiness; no se ha tocado.
- Banner de cookies: no existía. Añadido (Aceptar / Rechazar / Política
  de privacidad → https://kelatos.com/privacy-policy/), con diseño
  apilado a ancho completo en móvil.
- Añadida sección de contenido SEO propio (#guia), enlazada en el menú.
- Botón de teléfono del menú (.navcall): acortado a solo el número (iba
  a partirse en dos líneas dentro de la píldora, como se detectó en
  RowentaTech); añadido white-space:nowrap como salvaguarda.

REDIRECCIÓN DE URLS ANTIGUAS:
Este sitio era antes multipágina (tenía /modelos/..., eliminados en
commits anteriores al pasar a one-page). Añadido middleware.mjs:
cualquier URL que no sea "/" redirige (301) a la home. Añadida la
dependencia "@vercel/functions" en package.json.

REVISIÓN ADICIONAL (esta pasada, a petición del cliente):
- H1 no cumplía el estilo de la familia: era una frase larga (21
  palabras), con interrogación implícita en el planteamiento y la
  palabra condicional "si merece la pena". Reescrito, corto y
  totalmente afirmativo: "Tu robot aspirador Xiaomi dejó de limpiar.
  Lo reparamos hoy." Tamaño del H1 aumentado al estándar de la
  familia: clamp(38-58px) → clamp(46-74px) en escritorio, 40px →
  48px en móvil (no había ninguna decisión previa documentada de
  reducirlo en este repo).
- Fondo del hero cambiado a negro (antes degradado naranja, añadido
  en commits "Fondo del hero anaranjado" y "Naranja del hero más
  oscuro"). Ajustados el resto de elementos del hero para mantener
  buen contraste sobre negro:
  - .hero-tag ("Robot aspirador Xiaomi · Madrid"): tenía fondo #111
    (casi negro), invisible sobre el nuevo fondo negro. Cambiado a
    fondo naranja de marca (var(--orange)) con texto blanco.
  - .pickup (botón "Solicita tu recogida ahora"): tenía fondo #111,
    mismo problema de contraste. Cambiado a naranja de marca.
  - El resto de elementos del hero (h1, .eyebrow, .accent, .hero-ring,
    los botones WhatsApp/teléfono, la tarjeta de información) ya
    tenían fondos propios o colores claros que mantienen buen
    contraste sobre negro sin necesidad de cambios.

REVISIÓN ADICIONAL 2 (a petición del cliente — diversidad de H1):
- El H1 anterior ("dejó de limpiar. Lo reparamos hoy.") seguía la
  misma plantilla de dos cláusulas (síntoma + solución) usada en
  TaurusMyCook y otros repos. Reescrito con una estructura de una
  sola frase, imperativa, sin ese patrón: "Repara tu robot aspirador
  Xiaomi en el mismo día." (9 palabras).

REVISIÓN ADICIONAL 3 (checklist unificado de la familia, a petición del cliente):
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario.
- Añadida franja de aviso de servicio técnico independiente debajo
  del menú (no existía).
- Enlace de política de privacidad: la casilla existía pero sin
  enlace. Añadido a https://kelatos.com/privacy-policy/, en azul y
  subrayado.
- Botón "Atención Telefónica..." sin icono, a diferencia del de
  WhatsApp. Añadido.
- Verificado: schema.org ya usaba el teléfono de la caja de
  información (correcto); texto decorativo del hero ya se ocultaba en
  móvil; formulario correctamente conectado a /api/contacto. Sin
  cambios en ninguno de estos.

REVISIÓN ADICIONAL (a petición del cliente, regla general de la familia):
- Quitada la pestaña/etiqueta rotada del hero (.hero-chip o
  .hero-tag) que sobresalía y se solapaba visualmente con la caja de
  información en anchos de tablet/escritorio medio (detectado con
  captura en vivo en AcerTech). Regla para toda la familia: no volver
  a añadir este tipo de elemento decorativo.
