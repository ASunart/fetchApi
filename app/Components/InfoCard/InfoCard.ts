export enum Attribute {
    'name' = 'name',
    'status' = 'status',
    'species' = 'species',
    'gender' = 'gender',
    'origin' = 'origin',
    'image' = 'image'
}

class InfoCard extends HTMLElement {
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
    origin?: string;
    image?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute,null> ={
            name: null,
            status: null,
            species: null,
            gender: null,
            origin: null,
            image: null
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        oldValue: string | undefined,
        newValue: string | undefined
    ){
        this[propName] = newValue;
        this.render();
    }
    

    render(){
        if(this.shadowRoot){
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