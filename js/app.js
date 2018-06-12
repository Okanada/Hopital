// Créer le objets Imports des classes------------------------------------------------

import { Patient } from "./patient.js";
import { Doctor } from "./doctor.js";
import { Cat } from "./chat.js";
import { waitingroom } from "./waitingromm.js";
import { Pharma } from "./pharma.js";
import { cimetiere } from "./cimetière.js";


// Créer les objets----------------------------------------------------------

// Patient

let Patient1 = new Patient("Marcus", "mal indenté", "100")
let Patient2 = new Patient("Optimus", "unsave", "200")
let Patient3 = new Patient("Sangoku", "404", "80")
let Patient4 = new Patient("DarthVader", "azmatique", "110")
let Patient5 = new Patient("Semicolon", "mal syntaxError", "60")


//Docteur

let docteur1 = new Doctor("Debugger");

// Chat

let chat1 = new Cat("Sphynx", "Watson");

// Salle D'attente

waitingroom.contenu.push(Patient1, Patient2, Patient3, Patient4, Patient5, )

// Pharmacie

let Apothek = new Pharma("pharmacie");

// Cimetière

let cerceuil = new cimetiere("cimetière");





while (waitingroom.contenu.length > 0) {

    // Le docteur fait rentrer son premier patient--------------------------------

    docteur1.patientIn(waitingroom);

    // Le docteur diagnosique le patient et lui donne le traitement------------------------------------------


    docteur1.diagnostiquer(docteur1.cabinet[0]);


    // Le patient paye le docteur-------------------------------------------------
    docteur1.cabinet[0].paye(50, docteur1);

    // Le docteur fait sortir le patient et l'envoi vers la pharmacie------------------------------------------

    docteur1.patientOut(Apothek.contenu);


    // La pharmacie donne son remède au patient ---------------------------------

    Apothek.Heal(Apothek.contenu[0], cerceuil);

    // Le patient prend le remède--------------------------

};




// EXERCICE TERMINEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE OUIIIIIII