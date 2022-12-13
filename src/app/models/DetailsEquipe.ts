export class DetailsEquipe{

  idDetailEquipe: number;
  salle: number;
  thematique: string;


  constructor(idDetailEquipe: number, salle: number, thematique: string) {
    this.idDetailEquipe = idDetailEquipe;
    this.salle = salle;
    this.thematique = thematique;
  }
}
