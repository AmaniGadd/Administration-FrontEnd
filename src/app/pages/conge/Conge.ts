import { Employe } from '../employe/Employe';

export class Conge {
    public dateDebut: Date;
    public dateFin: Date;
    public cause: string;
    public reponse: string;
    public causeRefus: string;
    public dureeConge: string;
    public typeConge: string;
    public pieceJointe: string;
    public employe = new Employe();
    constructor() { }
  }
