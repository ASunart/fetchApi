var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getData } from './data.js';
import './Components/Import.js';
import { Attribute } from './Components/InfoCard/InfoCard.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.cards = [];
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield getData();
            this.render(data);
        });
    }
    render(data) {
        data.forEach((user) => {
            const info = this.ownerDocument.createElement('info-card');
            info.setAttribute(Attribute.name, user.name);
            info.setAttribute(Attribute.status, user.status);
            info.setAttribute(Attribute.species, user.species);
            info.setAttribute(Attribute.gender, user.gender);
            info.setAttribute(Attribute.origin, user.origin.name);
            info.setAttribute(Attribute.image, user.image);
            this.cards.push(info);
        });
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
            this.cards.forEach((card) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);
            });
        }
    }
}
customElements.define('app-container', AppContainer);
