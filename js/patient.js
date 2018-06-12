//Patient

export class Patient {
    constructor(name, maladie, argent) {
        this.name = name;
        this.maladie = maladie;
        this.argent = argent;
        this.etatSante = "malade";
        this.traitement = null;
        this.localisation
    }

    goTo(endroit) { this.localisation = endroit; }

    takeCare() { }

    paye(argent, beneficiaire) {
        this.argent = this.argent - argent;
        beneficiaire.argent = beneficiaire.argent + argent;




    }

}





