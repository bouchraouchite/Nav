import { Component } from '@angular/core';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent {

  personnels=[

    {id:120,nom:'bouchra',age:23},
    {id:120,nom:'ahmad',age:24},

  ];
  idPerson: number=0;
  nomPerson: string="";
  AgePerson:number=0;
  selectedPerson:any=null;

AjouterPersonne(){
  console.log(this.idPerson);
  console.log(this.nomPerson);
  console.log(this.AgePerson);
  
 const t={id:this.idPerson,nom:this.nomPerson,age:this.AgePerson }

  this.personnels.push(t);

 }

 updatePerson() {
  if (this.selectedPerson) {
    // Update the selected person's properties
    this.selectedPerson.id = this.idPerson;
    this.selectedPerson.nom = this.nomPerson;
    this.selectedPerson.age = this.AgePerson;

    // Clear the form fields after updating the person
    this.idPerson = 0;
    this.nomPerson = "";
    this.AgePerson = 0;

    // Reset the selected person
    this.selectedPerson = null;
  } else {
    console.log("No person selected for update.");
  }
}



selectPerson(person: any) {
  this.selectedPerson = person;
  this.idPerson = person.id;
  this.nomPerson = person.nom;
  this.AgePerson = person.age;
}
}

