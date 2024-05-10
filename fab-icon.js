import { FontAwesomeIcon} from './fontawesome-icon.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab);

/**
 * Font Awesome Brand Icon UI Component 
 */
export class FabIcon extends FontAwesomeIcon {
    prefix(){
        return 'fab';
    }
}

customElements.define('fab-icon', FabIcon);