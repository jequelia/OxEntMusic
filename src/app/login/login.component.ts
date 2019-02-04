import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserLoginService } from '../service/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Intância do formGroup para usar no DOM
  loginForm: FormGroup

  constructor(private form : FormBuilder, private service : UserLoginService, private route: Router ) { }

  ngOnInit() {

    this.loginForm = this.form.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

  submit() {
    let email = this.loginForm.getRawValue().email
    let password = this.loginForm.getRawValue().password

    if( this.loginForm.valid){

      this.service.login(email, password).then(()=>{

        this.route.navigate(['/cadastroMusic'])
      })

      .catch(()=>{

        alert("senha ou email errados.")
      })

    }else{

      alert("Digite os campos corretamente!")
    }
  }

}
