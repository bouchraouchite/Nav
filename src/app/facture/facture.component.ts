import { Component } from '@angular/core';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {

  factures=[

    {id:120,datefacture:"19/08/2024",montant:2399},
    {id:154,datefacture:"19/08/2024",montant:2300},

  ];
factureid:any;
  supprimerFacture(){
    console.log(this.factureid);
    let index =this.factures.findIndex(f=>f.id==this.factureid);
    console.log(index);
    if (index!== -1){this.factures.splice(index,1);}


  }

}
