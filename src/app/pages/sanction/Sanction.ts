import { Employe } from '../employe/Employe';

export class Sanction {
    public dateSanction: Date;
    public typeSanction: string;
    public cause: string;
    public ajoutePar: string;
    
    public employe = new Employe();
    constructor() { }
  }