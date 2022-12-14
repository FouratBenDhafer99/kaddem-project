import { Component, OnInit } from '@angular/core';
import {ContratService} from "../services/ContratService";
import {ActivatedRoute} from "@angular/router";
import {Validators} from "@angular/forms";
import {Contrat} from "../models/Contrat";
import {Specialite} from "../enums/Specialite";

@Component({
  selector: 'app-edit-contrat',
  templateUrl: './edit-contrat.component.html',
  styleUrls: ['./edit-contrat.component.css']
})
export class EditContratComponent implements OnInit {

  constructor(
    private contratService: ContratService,
    private ac: ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.loadData()
  }


  dateDeb= {year:0, month:0, day:0}
  dateFin= {year:0, month:0, day:0}
  contract: Contrat= new Contrat(0, new Date(), new Date(), Specialite.IA, false, 0)

  specialties= Object.values(Specialite)

  loadData(){

    this.ac.params.subscribe((param:any)=> {
      let id = param['idC']
      this.contratService.getOneById(id).subscribe((res:any)=>{
        this.contract= res
        this.dateDeb={
          year: new Date(this.contract.dateDebutContrat).getFullYear(),
          month: new Date(this.contract.dateDebutContrat).getMonth(),
          day: new Date(this.contract.dateDebutContrat).getDay(),
        }
        this.dateFin={
          year: new Date(this.contract.dateFinContrat).getFullYear(),
          month: new Date(this.contract.dateFinContrat).getMonth(),
          day: new Date(this.contract.dateFinContrat).getDay(),
        }


        })
      })
  }

  updateContract(){
    console.log(this.contract)
  }

}
