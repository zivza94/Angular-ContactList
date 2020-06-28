import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../DTO/contact';
import { CommService } from './comm.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getContracts(userName: string): Observable<Array<Contact>> {
    return this.commService.getContracts(userName);
  }

  constructor(private commService: CommService) { }
}
