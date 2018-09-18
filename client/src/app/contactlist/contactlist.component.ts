import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {contact} from '../contact';
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  contacts:contact[];
  constructor(private configService:ContactService) { }

  ngOnInit() {
    this.configService.getConfig()
        .subscribe((data:any) => this.contacts=data);
  }

}
