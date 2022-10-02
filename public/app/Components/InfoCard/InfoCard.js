export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["status"] = "status";
    Attribute["species"] = "species";
    Attribute["gender"] = "gender";
    Attribute["origin"] = "origin";
    Attribute["image"] = "image";
})(Attribute || (Attribute = {}));
class InfoCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const attrs = {
            name: null,
            status: null,
            species: null,
            gender: null,
            origin: null,
            image: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/Components/InfoCard/styles.css">
            <div class="card">
            <div class="header">
                <div class="image">
                    <img src="${this.image}">
                </div>
                <div class="info">
                    <h2>Name:</h2> <p>${this.name}</p>
                    <h2>Status:</h2><p> ${this.status}</p>
                    <h2>Species:</h2> <p>${this.species}</p>
                    <h2>Gender:</h2> <p>${this.gender}</p>
                    <h2>Origin:</h2> <p>${this.origin}</p>
                </div>
            </div>
        </div>
            `;
        }
    }
}
customElements.define('info-card', InfoCard);
export default InfoCard;
