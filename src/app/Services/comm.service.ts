import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../DTO/login-response';
import { Contract } from '../DTO/contract';

@Injectable({
  providedIn: 'root'
})
export abstract class CommService {

  constructor() { }
  abstract Login(value:any):Observable<LoginResponse>
  abstract getContracts(userName:string):Observable<Array<Contract>>
}
