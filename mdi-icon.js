import { AbstractIcon, html} from './abstract-icon.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/**
 * MDI Icon UI Component 
 */
export class MDIIcon extends AbstractIcon {

    updated(changedProperties) {
        if (changedProperties.has('icon')) {
            this.loadIcon();
        }
        if (changedProperties.has('size')) {
            this.updateSize();
        }
        if (changedProperties.has('color')) {
            this.updateColor();
        }
    }

    async loadIcon() {
        const iconPath = `./node_modules/@mdi/svg/svg/${this.icon}.svg`;
        try {
            const response = await fetch(iconPath);
            const svgText = await response.text();
            this._svgContent = svgText;
            this.requestUpdate();
        } catch (error) {
            console.error('Failed to fetch icon:', error);
            this._svgContent = '';
        }
    }

    render() {
        return html`
            ${unsafeHTML(this._svgContent)}
        `;
    }
}

customElements.define('mdi-icon', MDIIcon);