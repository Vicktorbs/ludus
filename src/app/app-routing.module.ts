import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpagaComponent } from './mainpaga/mainpaga.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserlogComponent } from './userlog/userlog.component';
import { SectionsComponent } from './components/sections/sections.component';
import { MathComponent } from './components/math/math.component';

const routes: Routes = [
  { path: '', component: MainpagaComponent },
  { path: 'registro', component: UserregisterComponent },
  { path: 'playground', component: SectionsComponent },
  { path: 'matematicas', component: MathComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
