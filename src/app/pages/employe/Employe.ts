import { Equipe } from '../equipe/Equipe';
export class Employe {
    public id: number;
    public nom: string;
    public prenom: string;
    public matricule: string;
    public poste: string;
    public equipe = new Equipe();
   
    constructor() { }
  }