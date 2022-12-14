import { Component, OnInit } from '@angular/core';
import {Contrat} from "../models/Contrat";
import {ContratService} from "../services/ContratService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contrat-list',
  templateUrl: './contrat-list.component.html',
  styleUrls: ['./contrat-list.component.css']
})
export class ContratListComponent implements OnInit {

  constructor(
    private contratService: ContratService,
    private router: Router
  ) { }

  contracts: Contrat[]= []

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.contratService.getData().subscribe((res:any)=>{
      this.contracts= res
    })
  }

  toEdit(contract: Contrat){
    this.router.navigate(['/contract/edit', contract.idContrat])
  }
}
