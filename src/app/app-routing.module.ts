import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpagaComponent } from './mainpaga/mainpaga.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { SectionsComponent } from './components/sections/sections.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: MainpagaComponent },
  { path: 'registro', component: UserregisterComponent },
  { path: 'playground', component: SectionsComponent },
  { path: 'perfil', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
