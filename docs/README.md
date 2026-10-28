# viazcan
Viazcan new generation

## Bootstrap

El sitio usa Bootstrap 5.3.8 (licencia MIT), distribuido localmente:

- `css/bootstrap.min.css`: estilos oficiales.
- `js/bootstrap.min.js`: bundle oficial con Popper incluido.
- `Source/bootstrap.css`: copia sin minificar de los estilos oficiales.

No requiere npm ni un proceso de compilacion. Servir el directorio por HTTP, por
ejemplo con Live Server, para permitir la carga del footer mediante `fetch`.
Se conserva jQuery para Owl Carousel, Circle Progress y el JavaScript de la plantilla;
Bootstrap 5 no depende de jQuery.

Los componentes usan atributos `data-bs-toggle`, `data-bs-target` y `data-bs-parent`.
Las utilidades migradas incluyen `me-4` y `text-lg-end`. El estado visual de los
acordeones depende de `aria-expanded`, gestionado por Bootstrap.

## Iconos

Bootstrap Icons 1.13.1 (licencia MIT) esta disponible en todas las paginas mediante
`css/bootstrap-icons.min.css`, con las fuentes locales en `css/fonts/`.
Ejemplo: `<i class="bi bi-whatsapp" aria-hidden="true"></i>`.
Font Awesome y Flaticon se conservan para los iconos existentes durante el rediseno.

## Footer

`footer.html` contiene el footer compartido por las siete paginas del sitio.
`js/footer.js` lo carga en el contenedor `#contacto` de cada pagina y actualiza el
copyright al ano actual. Para editar servicios, horarios y enlaces del footer,
modificar unicamente `footer.html`.