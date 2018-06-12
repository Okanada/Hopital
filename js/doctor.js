// Doctor

export class Doctor {
    constructor(name) {
        this.name = name;
        this.argent = null;
        this.cabinet = [];
    }

    diagnostiquer(patient) {
        patient.etatSante = "diagnostiquer";
        switch (patient.maladie) {
            case "mal indenté": patient.traitement = "ctrl+maj+f"
                break;
            case "unsave": patient.traitement = "saveonFocuschange"
                break;
            case "404": patient.traitement = "ChekLinkRelation"
                break;
            case "azmatique": patient.traitement = "VentoLine"
                break;
            case "mal syntaxError": patient.traitement = "f12+doc"
                break;
        }
    }

    patientIn(waitingroom) {
        this.cabinet.push(waitingroom.contenu[0]);// --> Le patient1 rentre dans le cabinet
        waitingroom.contenu.splice(0, 1);// --> Le patient1 est sorti de la waitingromm


    }

    patientOut(pharmacie) {
        pharmacie.unshift(this.cabinet[0]); //--> Le patient va à la pharmacie
        this.cabinet.splice(0, 1); //--> Le patient1 quitte le cabinet

    }
}