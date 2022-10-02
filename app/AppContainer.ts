import {getData} from './data.js';
import './Components/Import.js';
import InfoCard , {Attribute} from './Components/InfoCard/InfoCard.js';

class AppContainer extends HTMLElement {
    cards: InfoCard[] = [];

    constructor(){
        super();
        this.attachShadow({mode: 'open'});

    }

    async connectedCallback(){
        const data = await getData();
        this.render(data);
    }

    render(data: any){
        data.forEach((user: any) => {
            const info  = this.ownerDocument.createElement('info-card') as InfoCard;
            info.setAttribute(Attribute.name, user.name);
            info.setAttribute(Attribute.status, user.status);
            info.setAttribute(Attribute.species, user.species);
            info.setAttribute(Attribute.gender, user.gender);
            info.setAttribute(Attribute.origin, user.origin.name);
            info.setAttribute(Attribute.image, user.image);
            this.cards.push(info);
        });
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = '';
            this.cards.forEach((card)=>{
                this.shadowRoot?.appendChild(card);
            });
    }

    }
}
customElements.define('app-container', AppContainer);