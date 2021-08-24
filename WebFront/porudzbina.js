import {Poslasticara} from "./poslasticara.js";
import {Sto} from "./sto.js";

export class Porudzbina{
    constructor(id, deserti , pice){
        this.id=id;
        this.deserti=deserti;
        this.pice=pice;
        this.kontejnerPoruci=null;

    }

    getID(){
        return this.id;
    }

    getDesert(){
        return this.deserti;
    }

    getPice(){
        return this.pice;
    }

    izmeniNarudzbinu(deserti, pice)
    {
        this.deserti= deserti;
        this.pice = pice;
    }

    otkaziNarudzbinu()
    {
        this.id = 0;
        this.deserti = "";
        this.pice = "";
    }

}