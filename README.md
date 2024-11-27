# Proyecto Altempo

Este es un proyecto de front-end desarrollado utilizando [Vite](https://vitejs.dev/), una herramienta de construcción rápida y moderna para aplicaciones web. Este README proporciona información sobre cómo ejecutar el proyecto, así como detalles sobre el proceso de desarrollo, decisiones técnicas y la implementación de funcionalidades clave.

## Proceso de Desarrollo

El desarrollo de este proyecto se centró en la **optimización del rendimiento** y en la mejora de la **estructura del código**. Uno de los puntos clave fue la **composición de los pasos de registro**, para mejorar la carga inicial de la aplicación. Para ello, se utilizó **lazy loading** (carga diferida) para cargar los componentes de manera más eficiente. Esto permitió una carga más rápida de la página y mejoró la experiencia del usuario.

Además, se optó por **separar las traducciones por página** para mantener el proyecto más organizado y facilitar la gestión de los textos según la ruta de la aplicación.

## Decisiones Técnicas Importantes

### 1. **Elección de la Librería UI/UX**

Una de las decisiones más importantes en este proyecto fue la elección de la **librería de UI/UX**. Para facilitar el desarrollo, se optó por usar una librería que brindara componentes listos para usar. Esto evitó la necesidad de crear componentes personalizados desde cero, lo que no solo aceleró el proceso de desarrollo. La decisión de no reinventar la rueda permitió un desarrollo más rápido y un enfoque más limpio y consistente.

### 2. **Uso de Lazy Loading**

El uso de **lazy loading** para los componentes de registro fue fundamental para mejorar la carga de la aplicación. De esta manera, los componentes solo se cargan cuando son necesarios, lo que reduce el tiempo de carga inicial y mejora la velocidad de la aplicación.

## Implementación de Funcionalidades

Aunque no se implementaron muchas funcionalidades, se hicieron progresos importantes en la implementación de **steps en el proceso de registro** y en la **validación de los datos** durante dicho proceso.

### Funcionalidades Implementadas:

1. **Proceso de Registro con Steps**: 
   - Se dividió el proceso de registro en varios componentes para facilitar la carga y experiencia del usuario. 

2. **Validación de Campos**: 
   - La validación de los campos se implementó para garantizar que los usuarios ingresaran información válida en cada uno de los pasos.

### Funcionalidades Pendientes:

Aunque no se implementaron todas las funcionalidades necesarias para completar el proceso de registro, los cambios realizados en la estructura del proyecto y la implementación de los steps y la validación fueron los principales logros. Se requieren más pasos y validaciones para completar el flujo de registro en su totalidad.

## Enfoque en Diseño y Código Limpio

Durante el desarrollo, se puso un énfasis especial en el **diseño** y la **estructura del proyecto**. La estructura del código fue organizada de manera que facilite el mantenimiento a largo plazo, y se siguieron buenas prácticas de desarrollo para garantizar que el código sea claro, comprensible y fácil de modificar.

### En resumen:

- **Foco en diseño** y en proporcionar una experiencia de usuario agradable.
- **Estructura limpia** del código para facilitar el mantenimiento.
- **Uso de lazy loading** para mejorar el rendimiento.


## Cómo Ejecutar el Proyecto

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   - `git clone <url-del-repositorio>`

2. Navega al directorio del proyecto:
   - `cd nombre-del-directorio`

3. Instala las dependencias:
   - `pnpm install`

4. Ejecuta el proyecto en modo de desarrollo:
   - `pnpm run dev`

5. Abre tu navegador y visita `http://localhost:5173` para ver la aplicación en funcionamiento.

## Tecnologías Usadas

- **Vite**: Herramienta de construcción rápida para proyectos modernos.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **PrimeReact**: Librería de componentes UI/UX para interfaces modernas.
- **React Router**: Para la gestión de rutas.
- **Tailwind CSS**: Framework de CSS para una rápida creación de interfaces.
- **Yup**: Para la validación de formularios.

---
