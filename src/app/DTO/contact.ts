import { Group } from './group';
import { ContactWay } from './contact-way';

export class Contact {
    constructor(
        public name:string,
        public groups:Array<Group>,
        public image:ImageBitmap,
        public contactWays:Array<ContactWay>
    ){}
}
