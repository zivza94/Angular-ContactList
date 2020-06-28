import { Component, OnInit } from '@angular/core';
import { ContactService } from '../Services/contact.service';
import { Contact } from '../DTO/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Array<Contact>
  image: ImageBitmap
  constructor(private contractService: ContactService) { }

  ngOnInit(): void {
  }
  getcontracts(userName: string) {
    this.contractService.getContracts(userName)
      .subscribe()
  }

}
