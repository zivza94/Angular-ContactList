import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from '../DTO/contract';
import { CommService } from './comm.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  getContracts(userName: String):Observable<Array<Contract>> {
    return this.commService.getContracts(userName);
  }

  constructor(private commService:CommService) { }
}
