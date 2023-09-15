## Documentación de Uso del Componente de Intercambio de Contenido Dinámico

El componente de intercambio de contenido dinámico te permite cambiar el contenido de un elemento HTML en función de las opciones de radio, opciones de un select o checkboxes seleccionados. A continuación, se muestra cómo usar este componente:

### 1. HTML Markup

Primero, debes configurar tus elementos HTML de la siguiente manera:

#### Opciones de Radio:

```html
<input type="radio" name="nombre_grupo" id="opción_1" data-as-trigger="swap-template" data-as-target="#contenedor_destino" data-as-template="#plantilla_1">
<label for="opción_1">Etiqueta 1</label>
```

- `name`: Asegúrate de que todos los radios que desees agrupar tengan el mismo nombre.
- `id`: Asigna un ID único a cada radio.
- `data-as-trigger="swap-template"`: Este atributo indica que este radio es un activador del intercambio de contenido.
- `data-as-target`: Debes especificar el selector CSS del elemento donde deseas que se cargue el contenido.
- `data-as-template`: Debes proporcionar el selector CSS de la plantilla que deseas cargar.

#### Select:

```html
<select name="nombre_select" id="select_id">
    <option value="" selected>Seleccione</option>
    <option value="valor_1" data-as-trigger="swap-template" data-as-target="#contenedor_destino" data-as-template="#plantilla_1">Opción 1</option>
    <option value="valor_2" data-as-trigger="swap-template" data-as-target="#contenedor_destino" data-as-template="#plantilla_2">Opción 2</option>
</select>
```

- `name`: Asegúrate de que todos los elementos `option` dentro del select tengan el mismo nombre.
- `id`: Asigna un ID único al select.
- `data-as-trigger="swap-template"`: Este atributo indica que estas opciones son activadores del intercambio de contenido.
- `data-as-target`: Debes especificar el selector CSS del elemento donde deseas que se cargue el contenido.
- `data-as-template`: Debes proporcionar el selector CSS de la plantilla que deseas cargar.

#### Checkboxes:

```html
<input type="checkbox" name="nombre_checkbox" id="checkbox_1" data-as-trigger="swap-template" data-as-target="#contenedor_destino" data-as-template="#plantilla_1">
<label for="checkbox_1">Checkbox 1</label>
```

- `name`: Asegúrate de que todos los checkboxes que desees agrupar tengan el mismo nombre.
- `id`: Asigna un ID único a cada checkbox.
- `data-as-trigger="swap-template"`: Este atributo indica que este checkbox es un activador del intercambio de contenido.
- `data-as-target`: Debes especificar el selector CSS del elemento donde deseas que se cargue el contenido.
- `data-as-template`: Debes proporcionar el selector CSS de la plantilla que deseas cargar.

### 2. Contenedor Destino y Plantillas

Debes definir un contenedor HTML donde se cargará el contenido y crear plantillas ocultas utilizando elementos `<template>`:

```html
<div id="contenedor_destino"></div>
<template id="plantilla_1">
    Contenido de la Plantilla 1
</template>
<template id="plantilla_2">
    Contenido de la Plantilla 2
</template>
```

- `<div id="contenedor_destino">`: Este es el contenedor donde se cargará el contenido dinámicamente.
- `<template id="plantilla_1">` y `<template id="plantilla_2">`: Estas son las plantillas que se cargarán en función de las opciones seleccionadas.

### 3. JavaScript

Debes incluir el código JavaScript del componente en tu archivo:

```javascript
// Crea una instancia del componente ContentSwapper
const contentSwapper = new ContentSwapper();
```

- Puedes crear una instancia del componente `ContentSwapper` sin argumentos si deseas que busque en todo el documento. Si deseas limitar el alcance de búsqueda, puedes proporcionar un selector CSS como argumento al crear la instancia (`const contentSwapper = new ContentSwapper('#modalForm');`).

Con esto, has configurado correctamente el componente de intercambio de contenido dinámico en tu página web. Ahora, cuando los elementos activadores (radios, opciones del select o checkboxes) se seleccionen o deseleccionen, el contenido se cargará o eliminará automáticamente en el contenedor de destino.