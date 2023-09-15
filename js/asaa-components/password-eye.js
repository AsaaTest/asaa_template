/**
 * Clase PasswordEye
 *
 * Una clase que proporciona una funcionalidad de alternar la visibilidad de la contraseña en un campo de entrada HTML.
 *
 * @class
 */
class PasswordEye {
    /**
     * Crea una instancia de PasswordEye.
     *
     * @constructor
     * @param {HTMLInputElement} inputElement - El elemento de entrada HTML que representa la contraseña.
     */
    constructor(inputElement) {
        /**
         * El elemento de entrada HTML que representa la contraseña.
         * @type {HTMLInputElement}
         * @private
         */
        this.inputElement = inputElement;

        // Crea el icono del ojo y configura los oyentes de eventos.
        this.createEyeIcon();
        this.setupListeners();
    }

    /**
     * Crea y agrega el icono del ojo al DOM.
     *
     * @private
     */
    createEyeIcon() {
        const eyeIcon = document.createElement("i");
        eyeIcon.className = "password-eye-icon fas fa-eye-slash";
        eyeIcon.addEventListener("click", () => {
            this.togglePasswordVisibility();
        });

        // Agrega el icono del ojo como un hermano adyacente al campo de entrada.
        this.inputElement.parentNode.appendChild(eyeIcon);

        /**
         * Referencia al icono del ojo.
         * @type {HTMLElement}
         * @private
         */
        this.eyeIcon = eyeIcon;
    }

    /**
     * Alterna la visibilidad de la contraseña.
     *
     * @private
     */
    togglePasswordVisibility() {
        if (this.inputElement.type === "password") {
            this.inputElement.type = "text";
            this.eyeIcon.classList.remove("fa-eye-slash");
            this.eyeIcon.classList.add("fa-eye");
        } else {
            this.inputElement.type = "password";
            this.eyeIcon.classList.remove("fa-eye");
            this.eyeIcon.classList.add("fa-eye-slash");
        }
    }

    /**
     * Configura los oyentes de eventos para el campo de entrada.
     *
     * @private
     */
    setupListeners() {
        // Verifica si el atributo 'data-as-trigger' es igual a 'password-eye'.
        if (this.inputElement.getAttribute("data-as-trigger") === "password-eye") {
            // Configura el evento de enfoque (focus).
            this.inputElement.addEventListener("focus", () => {
                this.inputElement.type = "password";
            });

            // Configura el evento de desenfoque (blur).
            this.inputElement.addEventListener("blur", () => {
                this.inputElement.type = "password";
            });
        }
    }
}

export default PasswordEye;
