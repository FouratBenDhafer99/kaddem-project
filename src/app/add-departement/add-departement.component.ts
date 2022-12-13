import { Component, OnInit } from '@angular/core';
import {Departement} from "../models/Departement";
import {Universite} from "../models/Universite";
import {UniversiteService} from "../services/UniversiteService";
import {DepartementService} from "../services/DepartementService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  constructor(
    private uniService: UniversiteService,
    private depService: DepartementService,
    private router: Router
  ) { }

  // @ts-ignore
  dep: Departement= new Departement(0, "", new Universite())

  universities: Universite[]= []

  ngOnInit(): void {
    this.getUniversities();
  }

  getUniversities(): void{
    this.uniService.getData()
      .subscribe((res: any)=> {
        this.universities = res.sort((a: Universite,b: Universite)=> a.nom.localeCompare(b.nom))
      })
  }

  addDep():void{
    this.depService.addDepartement(this.dep)
      .subscribe(res=> {

          this.uniService.assignUniToDep(this.dep.universite.idUniv, res.idDepart)
            .subscribe(res=> this.router.navigate(['/department/list']))
        }
      )
  }
}
