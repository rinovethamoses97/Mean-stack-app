import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { contact } from './contact';
import { ContactlistComponent } from './contactlist/contactlist.component';

const approutes: Routes=[
  {
    path:'index',component:ContactComponent,
  },
  {
    path:'contactlist',component:ContactlistComponent
  },
  
];
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactlistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
