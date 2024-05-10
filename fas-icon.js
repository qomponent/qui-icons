import { FontAwesomeIcon} from './fontawesome-icon.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas);

/**
 * Font Awesome Solid Icon UI Component 
 */
export class FasIcon extends FontAwesomeIcon {
    prefix(){
        return 'fas';
    }
}

customElements.define('fas-icon', FasIcon);