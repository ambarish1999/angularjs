import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Feedback, ContactType } from '../shared/feedback';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;// equals since this is a const not a class
  
  @ViewChild('fform') feedbackFormDirective; //view child allows us to reset the entire form to its pristine value.
  constructor(private fb: FormBuilder){ //injecting form builder service
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''
    });
    
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        telnum: 0,
        email: '',
        agree: false,
        contacttype: 'None',
        message: ''
    });
    //on submit we store the feedback in this.feedback and reset the form
    //the reset method accepts a object to reset the value to what it was when it was initially created

    this.feedbackFormDirective.reset(); //this will ensure total reset of the form to its pristine value
  }
}
