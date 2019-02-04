import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroMusicComponent } from './cadastro-music/cadastro-music.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'cadastroMusic', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cadastroMusic', component:CadastroMusicComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
