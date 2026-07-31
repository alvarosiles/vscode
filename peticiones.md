# Peticiones del sitio (vscode-extensions)

Lista de pedidos hechos durante el desarrollo de esta landing page. Sirve como
referencia para volver a pedir lo mismo (por ejemplo, en un sitio nuevo o si
hay que rehacer algo desde cero).

## 1. Landing page base

Crear una landing page en GitHub Pages para presentar extensiones de VS Code,
con marca personal "Alvaro Siles". HTML5 + CSS3 + JS vanilla, sin frameworks.
Archivos: `index.html`, `style.css`, `script.js`.

Estilo: limpio, minimalista, responsive, modo oscuro por defecto, animaciones
suaves al hacer scroll. Evitar exceso de color y de emojis.

Secciones:
- Hero: nombre, título, descripción corta, botones (Ver proyectos / GitHub / Marketplace).
- Proyectos: tarjeta por extensión (nombre, ícono, descripción, features, botón instalar).
- Características: 3 tarjetas (fácil de usar, rápido y ligero, privacidad primero).
- Privacidad: resumen corto en la home + link a política completa.
- Sobre el desarrollador: foto, bio, links a GitHub y web personal.
- Footer: "Created with ❤️ by Alvaro Siles".

Proyectos incluidos:
- Pro VSCode Themes
- Pro AI Assistant
- Pro VSCode Tools
- Pro VSCode Snippets
- Alvaro's Pro Dev Pack

## 2. Página de privacidad (`privacy.html`)

Política de privacidad completa (qué se recopila, uso de localStorage,
servicios de terceros, analítica, hosting, cambios, contacto). Debe ser
**bilingüe español/inglés**, español por defecto, con botones ES/EN. Incluir
también el toggle de tema claro/oscuro.

## 3. Foto real del desarrollador

Reemplazar el avatar con iniciales por una foto real:
`https://avatars.githubusercontent.com/u/242724234?v=4`

## 4. Página de licencia (`license.html`)

Página con el texto completo de la MIT License, mismo estilo visual que el
resto del sitio, con link al archivo `LICENSE` en GitHub.

## 5. Bilingüe en todo el sitio

El toggle ES/EN (al lado del toggle de tema) debe estar en **todas** las
páginas, no solo en privacidad. Español por defecto, preferencia guardada en
`localStorage`.

## 6. Link en el nombre del footer

"Alvaro Siles" en el footer debe redirigir a `https://alvarosiles.cloud/`.

## 7. Más links de contacto

Agregar link a `alvarosiles.cloud` también en:
- La foto de la sección "Sobre mí".
- El nombre "Alvaro Siles" dentro del título de esa sección.

## 8. Links reales al Marketplace

Cada botón "Instalar extensión" debe apuntar al `itemName` real de la
extensión en Visual Studio Marketplace (publisher: `alvarosiles`), no a un
link genérico del publisher.

## 9. Responsive de tablet

Revisar que el menú colapse a hamburguesa también en anchos de tablet (no
solo en celular), para que no se apriete ni desborde.

## 10. Sección activa en el nav

Mientras se hace scroll, el link del nav correspondiente a la sección visible
debe marcarse/resaltarse (igual que se resalta el idioma activo en el toggle
ES/EN).

## 11. Offset de scroll al hacer clic en el nav

Al navegar a una sección desde el nav, el título de esa sección no debe
quedar tapado por el header fijo (sticky) — dejar un margen para que se vea
completo.
