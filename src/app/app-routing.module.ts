import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UniversiteListComponent} from "./universite-list/universite-list.component";
import {AddUniversiteComponent} from "./add-universite/add-universite.component";
import {HomeComponent} from "./home/home.component";
import {DepartementListComponent} from "./departement-list/departement-list.component";
import {AddDepartementComponent} from "./add-departement/add-departement.component";
import {EditDepartementComponent} from "./edit-departement/edit-departement.component";
import {EquipeListComponent} from "./equipe-list/equipe-list.component";
import {AddEquipeComponent} from "./add-equipe/add-equipe.component";
import {EditEquipeComponent} from "./edit-equipe/edit-equipe.component";
import {ContratListComponent} from "./contrat-list/contrat-list.component";
import {AddContratComponent} from "./add-contrat/add-contrat.component";
import {EditContratComponent} from "./edit-contrat/edit-contrat.component";

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "university",
    children:[
      {path: 'list',  component: UniversiteListComponent,},
      {path: 'add',  component: AddUniversiteComponent,},
    ]   },
  { path: "department",
    children:[
      {path: 'list',  component: DepartementListComponent,},
      {path: 'add',  component: AddDepartementComponent,},
    ]   },
  { path: "team",
    children:[
      {path: 'list',  component: EquipeListComponent,},
      {path: 'add',  component: AddEquipeComponent,},
      {path: 'edit/:idEq',  component: EditEquipeComponent,},
    ]   },
  { path: "contract",
    children:[
      {path: 'list',  component: ContratListComponent,},
      {path: 'add',  component: AddContratComponent,},
      {path: 'edit/:idC',  component: EditContratComponent,},
    ]   },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
