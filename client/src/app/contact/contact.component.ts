import { Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {contact} from '../contact';
import {sample} from '../sample';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
   
  contacts:contact[];
  ab:contact;
  s:sample;
  myform: FormGroup;
  name: FormControl;
  age: FormControl;
  title:String;
  constructor(private configService:ContactService) { }

  ngOnInit() {
   
    this.createFormControls();
    this.createForm();
  }
  createFormControls(){
    this.title="r";
    this.name= new FormControl();
    this.age = new FormControl();
  }
  createForm(){
    this.myform=new FormGroup({
      name:this.name,
      age:this.age
    });

  }
  onClick() { 
        this.configService.getConfig()
        .subscribe((data:any) => this.contacts=data);
  }
  onClickSubmit(data){
    this.ab=data;
    this.configService.addContact(this.ab)
    .subscribe((d:any) => {
       console.log(d.msg);
       if(d.msg=="Success"){
          alert("Inserted");        
       }
       else{
          alert("Failed");
       }
    });
  }
  
  submit(){
      if(this.myform.valid){
        this.s=this.myform.value;
        if(this.s.name==null || this.s.age==null){
          alert("Fields cannot be empty");
          return;
        }
        this.configService.addSample(this.s)
        .subscribe((d:any) => {
           console.log(d.msg);
           if(d.msg=="Success"){
              alert("Inserted");
              this.myform.reset();
           }
           else{
              alert("Failed");
           }
        });
      }
  }
 
}
