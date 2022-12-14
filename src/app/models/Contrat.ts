import {Specialite} from "../enums/Specialite";

export class Contrat{

  idContrat: number;
  dateDebutContrat: Date;
  dateFinContrat: Date;
  specialite: Specialite;
  archive: boolean;
  montantContrat: number;


  constructor(idContrat: number, dateDebutContrat: Date, dateFinContrat: Date, specialite: Specialite, archive: boolean, montantContrat: number) {
    this.idContrat = idContrat;
    this.dateDebutContrat = dateDebutContrat;
    this.dateFinContrat = dateFinContrat;
    this.specialite = specialite;
    this.archive = archive;
    this.montantContrat = montantContrat;
  }
}
