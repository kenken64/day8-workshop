import { SwInterface } from './swinterface.intf';

export class Common implements SwInterface{

    constructor(
        public url: string
    ) {

    }
}