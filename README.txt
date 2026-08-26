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
