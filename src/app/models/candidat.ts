// Version 1
// export class Candidat {
//   id: number;
//   prenom: string;
//   nom: string;

//   constructor(id: number, prenom: string, nom: string) {
//     this.id = id;
//     this.prenom = prenom;
//     this.nom = nom;
//   }
// }
export class Candidat {
  constructor(
    public id: number,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {}
}
