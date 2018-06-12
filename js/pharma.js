// Pharmacie

export class Pharma {
    constructor(name) {
        this.name = name;
        this.contenu = [];
        this.argent = 1000;
    }

    Heal(patient, cemetery) {
        switch (patient.maladie) {
            case "mal indenté":
                if (patient.argent >= 60) { patient.etatSante = "traité" }
                else {
                    cemetery.contenu.push(this.contenu[0])
                    this.contenu.splice(0, 1)
                    patient.etatSante = "mort"
                    patient.maladie = null;
                    patient.argent = null;
                    patient.traitement = null;
                }
                break;
            case "unsave":
                if (patient.argent >= 100) { patient.etatSante = "traité" }
                else {
                    cemetery.contenu.push(this.contenu[0])
                    this.contenu.splice(0, 1)
                    patient.etatSante = "mort"
                    patient.maladie = null;
                    patient.argent = null;
                    patient.traitement = null;
                }
                break;
            case "404":
                if (patient.argent >= 35) { patient.etatSante = "traité" }
                else {
                    cemetery.contenu.push(this.contenu[0])
                    this.contenu.splice(0, 1)
                    patient.etatSante = "mort"
                    patient.maladie = null;
                    patient.argent = null;
                    patient.traitement = null;
                }
                break;
            case "azmatique":
                if (patient.argent >= 40) { patient.etatSante = "traité" }
                else {
                    cemetery.contenu.push(this.contenu[0])
                    this.contenu.splice(0, 1)
                    patient.etatSante = "mort"
                    patient.maladie = null;
                    patient.argent = null;
                    patient.traitement = null;
                }
                break;
            case "mal syntaxError":
                if (patient.argent >= 20) { patient.etatSante = "traité" }
                else {
                    cemetery.contenu.push(this.contenu[0])
                    this.contenu.splice(0, 1)
                    patient.etatSante = "mort"
                    patient.maladie = null;
                    patient.argent = null;
                    patient.traitement = null;
                }
                break;

        }
    }
}