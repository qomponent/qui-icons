import { FontAwesomeIcon} from './fontawesome-icon.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';


library.add(far);

/**
 * Font Awesome Regular Icon UI Component 
 */
export class FarIcon extends FontAwesomeIcon {
    prefix(){
        return 'far';
    }
}

customElements.define('far-icon', FarIcon);