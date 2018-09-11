export class Hide {

    constructor(
        public $toHide:boolean
    ) {

    }


    isHidden() {
        return !!this.$toHide;
    }

    setHidden(value){
        this.$toHide = value;
    }

}