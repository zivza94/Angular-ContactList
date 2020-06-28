import { Component, OnInit } from '@angular/core';
import { ContractService } from '../Services/contract.service';
import { Contract } from '../DTO/contract';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contracts:Array<Contract>
  image:ImageBitmap
  constructor(private contractService:ContractService) { }

  ngOnInit(): void {
  }
  getcontracts(userName:String){
    this.contractService.getContracts(userName)
    .subsribe()
  }

}
