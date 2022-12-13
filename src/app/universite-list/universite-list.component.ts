import { Component, OnInit } from '@angular/core';
import {UniversiteService} from "../services/UniversiteService";
import {Universite} from "../models/Universite";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {

  constructor(
    private universiteService: UniversiteService,
    public router: Router,
    public ac: ActivatedRoute)
  { }

  //univesities: Universite= new Universite(0, "", [])
  universities: Universite[]= []
  isEdit: boolean[]=[]
  index=0

  ngOnInit(): void {
    this.getUniversities()

  }

  getUniversities(): void{
    this.universiteService.getData()
      .subscribe((res: any)=> {
        this.universities = res
        this.isEdit= new Array<boolean>(res.length)
        this.isEdit.fill(false)

        console.log(this.isEdit)
      })
  }

  setEdit(pos: number){
    this.isEdit[pos]= true
    console.log(this.isEdit)
  }

}
