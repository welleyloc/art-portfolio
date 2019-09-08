import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      subject: new FormControl('',Validators.required),
      textMessage: new FormControl('', Validators.required)

  })


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("111111");
    var mail = document.createElement("a");
    console.log("22222");
    mail.href = "mailto:orangeandglad@gmail.com";
    console.warn(this.contactForm.value);
  }

  about = "Please use this form for any inquiries. I'll get back to you as soon as I can! You can also follow me  on Twitter and Instagram (@orangeandglad) for updates!";
}
