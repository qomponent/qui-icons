import { LitElement, html, css} from 'lit';
export * from 'lit';

/**
 * Icon UI Component 
 */
class AbstractIcon extends LitElement {
    
    static styles = css`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            --icon-size: 24px;
            --icon-color: currentColor;
        }
        svg {
            width: var(--icon-size);
            height: var(--icon-size);
            fill: var(--icon-color);
            /* vertical-align: middle; */
        }`;

    static properties = {
        icon: {type: String},
        size: {type: String},
        color: {type: String},
        _svgContent: {state: true}
    };

    constructor(){
        super();
        this.icon = null;
        this.size = 'normal';
        this.color = '';
        this._svgContent = '';
    }

    updateSize() {
        switch (this.size) {
            case 'tiny':
                this.style.setProperty('--icon-size', '12px');
                break;
            case 'small':
                this.style.setProperty('--icon-size', '18px');
                break;
            case 'normal':
                this.style.setProperty('--icon-size', '24px');
                break;    
            case 'large':
                this.style.setProperty('--icon-size', '36px');
                break;
            default:
                this.style.setProperty('--icon-size', this.size);
                break;
        }
    }
    
    updateColor() {
        if (this.color) {
            this.style.setProperty('--icon-color', this.color);
        }
    }
}
export { AbstractIcon };