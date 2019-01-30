import { Vehicule } from "./Vehicule";

export  class Camion extends Vehicule{

    constructor(){
        
        super();
        this.type="Camio poid lourd";
        this.klax="piiip";
    console.log('nouveau camio créer ...');

    }

    cdr=200;
}