import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
  hide = true;
  user:User;
  token:string;

  //constructor(private loginService: LoginService, private user: User, private token: string) { }

constructor(private loginService: LoginService){
  
}
ngOnInit() {
  this.user = new User();
}
  public enterInMatrix(){
    this.loginService.postLogin(this.user)
    //.subscribe(tkn => localStorage.setItem(this.token, tkn));
    .subscribe(tkn => console.log(this.token, tkn));
  }

  public onSubmit(){
    this.enterInMatrix();
  
  }


}
