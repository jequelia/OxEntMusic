import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../service/cadastro.service';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  musicas: Array<any> = new Array<any>();


  constructor(private srv: CadastroService) { }

  ngOnInit() {
    this.srv.get('').subscribe(resposta => {
      console.log(resposta);
      this.musicas = resposta;
    });
  }
  delete(musica : User){
    this.srv.delete('', musica.id).subscribe(resposta =>{
      console.log(resposta);
    });
  }
  aparece(){
    return this.musicas.length > 0;
  }

}
