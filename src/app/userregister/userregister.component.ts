import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user'

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(form): void {
    console.log('formulario ', form.value);
    const data: User = {
      id: null,
      userData: {
          name: form.value.name,
          lastname: form.value.lastname,
          secondlastname: form.value.secondlastname,
          age: form.value.age,
          school: form.value.school,
          schoolgrade: form.value.schoolgrade,
          appdata: {
              currentleverl: 0,
              groups: null,
              performance: [{subject: 'Total', score: 0}]
          }
      },
      tuthordata: {
          name: form.value.tname,
          lastname: form.value.tlastname,
          secondlastname: form.value.tsecondlastname,
          terms: form.value.terms
      },
      email: form.value.email,
      password: form.value.password
    }
    console.log('newObject ', data.userData.appdata.performance[0]);
    this.authService.register(data).subscribe(res => {
      
      this.router.navigateByUrl('/perfil');
    })
  }

}
