import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactModel} from '../models/Contact.model';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class ContactService {

  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<ContactModel[]> {
    return this.httpClient.get(this.baseUrl + '/api/contact').pipe(
      map((response: any[]) => {
        const data = response as ContactModel[];
        return data;
      })).pipe(catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }

  createContact(contact: ContactModel): Observable<ContactModel> {
    return this.httpClient.post(this.baseUrl + '/api/contact', contact).pipe(
      map((response) => {
        const data = response as ContactModel;
        return data;
      })).pipe(catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
