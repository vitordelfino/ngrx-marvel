import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  { path: 'home',
    /* loadChildren: 'app/home/home.module#HomeModule' */
    component: HomeComponent
  },
  {
    path: 'character',
    /* loadChildren: 'app/character/character.module#CharacterModule' */
    component: CharacterComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
