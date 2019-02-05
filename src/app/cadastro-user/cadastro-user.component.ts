import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../service/cadastro.service';
import { CadastroUser } from '../models/cadastroUser';
import { USER } from 'src/environments/endpoint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent implements OnInit {

  registerForms : FormGroup
  viewAlert: boolean = false
  CadastroUser : CadastroUser = new CadastroUser()

  constructor( private form: FormBuilder, private request : CadastroService, private route : Router) { }

  ngOnInit() {

    this.registerForms = this.form.group({
      nome: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      dataNascimento:[''],
      senha: ['', Validators.compose([Validators.required])]

    })
  }

  register(){

    let newUser = Object.assign({}, this.CadastroUser, this.registerForms.getRawValue())
    if (this.registerForms.valid) {


      this.request.post(USER, newUser).toPromise().then(()=> {

          alert('Usuário Cadastrado!')
          setTimeout(() => {
            this.route.navigate(['/login'])
          }, 3000);

        })
        .catch(()=> alert('Erro ao cadastrar!')
      )
    }else{
      alert('Preencha os campos corretamente!')
    }
  }
}


