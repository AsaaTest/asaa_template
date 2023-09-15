# Documentación de Uso de PasswordEye

La clase `PasswordEye` proporciona una funcionalidad para alternar la visibilidad de una contraseña en un campo de entrada HTML. A continuación, se muestra cómo puedes usar esta clase en tu proyecto:

## Configurar el Atributo "data-as-trigger"

Si deseas que el campo de entrada cambie automáticamente a tipo "password" cuando pierda el foco (blur), asegúrate de configurar el atributo `data-as-trigger` en "password-eye" en tu elemento de entrada HTML:

```html
<input type="password" id="password-input" data-as-trigger="password-eye">
```

## Resultado

Con la instancia de `PasswordEye` creada y configurada, el campo de entrada de contraseña ahora mostrará un icono de ojo. Los usuarios podrán hacer clic en el icono para alternar la visibilidad de la contraseña.

```html
<input type="password" id="password-input" data-as-trigger="password-eye">
<i class="password-eye-icon fas fa-eye-slash"></i>
```

¡Y eso es todo! Ahora los usuarios podrán alternar la visibilidad de la contraseña haciendo clic en el icono del ojo.