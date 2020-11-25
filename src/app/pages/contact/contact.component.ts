import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email: string;
  name: string;
  message: string;
  endpoint: string;

  http: HttpClient;

  constructor(http: HttpClient, private router: Router) {
    this.http = http;
  }

  ngOnInit() {
    this.endpoint = "https://lukinstall.ro/data/sendEmail.php";
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    let postVars = {
      email: form.value.email,
      name: form.value.name,
      phone: form.value.phone,
      city: form.value.city,
      message: form.value.message,
      gdpr: form.value.gdpr,
    };

    console.log(postVars)


    this.http.post(this.endpoint, postVars)
      .subscribe(response => {
          console.log(response)
          this.router.navigate(['/mesaj-trimis'])
        }, error => {
          console.log(error)
        });

    form.reset();
  }

}
