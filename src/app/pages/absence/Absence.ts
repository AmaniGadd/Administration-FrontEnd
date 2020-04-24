import { Employe } from '../employe/Employe';

export class Absence {
    public dateAbs: Date;
    public dateRetour: Date;
    public dureeAbs: string;
    public certif: string;
    public pieceJointe: string;
    public employe = new Employe();
   
    constructor() { }
  }