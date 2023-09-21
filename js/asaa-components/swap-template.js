class ContentSwapper {
    constructor(selector = null) {
        this.selector = selector;
        this.triggers = [];

        if (this.selector) {
            this.container = document.querySelector(this.selector);
        } else {
            this.container = document;
        }

        this.init();
    }

    init() {
        // Buscar las opciones que tienen data-as-trigger="swap-template" dentro de selects
        const selectOptions = this.container.querySelectorAll('select option[data-as-trigger="swap-template"]');
        // Buscar los elementos que tienen data-as-trigger="swap-template" (radio buttons y checkboxes)
        const otherTriggers = this.container.querySelectorAll('[data-as-trigger="swap-template"]');
        // Combinar ambas listas de elementos
        this.triggers = [...selectOptions, ...otherTriggers];

        // Iterar sobre los elementos (tanto select options como radio buttons/checkboxes)
        this.triggers.forEach((trigger) => {
            if (trigger.tagName === 'OPTION') {
                // Si el trigger es una opción, agrega el evento change al elemento <select> en lugar de la opción
                const select = trigger.parentElement;
                select.addEventListener('change', () => {
                    this.loadTemplate(trigger);
                });
                select.dispatchEvent(new Event('change'));
            } else {
                // Si el trigger es un radio button o checkbox, agrega el evento change al trigger
                trigger.addEventListener('change', () => {
                    this.loadTemplate(trigger);
                });
                trigger.dispatchEvent(new Event('change'));
            }
        });
    }

    loadTemplate(trigger) {
        const target = trigger.getAttribute('data-as-target');
        const template = trigger.getAttribute('data-as-template');
        const targetElement = document.querySelector(target);
        const customFunctionName = trigger.getAttribute('data-as-function');

        if (trigger.tagName === 'OPTION' ? trigger.selected : trigger.checked) {
            // Cargar el template en el target
            targetElement.innerHTML = document.querySelector(template).innerHTML;
            new ContentSwapper(target);

            // Ejecutar la función personalizada si se proporcionó y existe
            if (customFunctionName && window[customFunctionName] && typeof window[customFunctionName] === 'function') {
                window[customFunctionName](targetElement);
            }
        } else {
            // Si no está marcado, eliminar el contenido solo si es la opción actual del select
            if (trigger.tagName === 'OPTION' && trigger.parentElement.value === trigger.value) {
                targetElement.innerHTML = '';
            }
        }
    }
}

// Exporta la clase ContentSwapper
export default ContentSwapper;


// Para utilizar el componente, instancialo de la siguiente manera:
// const contentSwapper = new ContentSwapper('#modalForm');
// O sin selector, si deseas buscar en todo el documento:
// const contentSwapper = new ContentSwapper();
