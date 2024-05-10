import { AbstractIcon, html} from './abstract-icon.js';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
export * from './abstract-icon.js';

/**
 * Font Awesome Icon UI Component 
 */
class FontAwesomeIcon extends AbstractIcon {
    
    updated(changedProperties) {
        if (changedProperties.has('icon') || changedProperties.has('size') || changedProperties.has('color')) {
          this._updateIcon();
        }
    }

    _updateIcon() {
        const faIcon = icon({ prefix: this.prefix(), iconName: this.icon });
        if (faIcon) {
          this._svgContent = faIcon.html[0].replace(/fill="[^"]*"/g, '');
          this.updateSize();
          this.updateColor();
          this.requestUpdate();
        } else {
          console.error('Icon not found:', this.icon);
          this._svgContent = '';
        }
    }
    
    prefix(){
      return '';
    }
    
    render() {
      return html`
          ${unsafeHTML(this._svgContent)}
      `;
    }
}
export { FontAwesomeIcon };