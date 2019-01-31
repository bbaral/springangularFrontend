import { Component, OnInit } from '@angular/core';
import {ContactModel} from '../models/Contact.model';
import {NgForm} from '@angular/forms';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: ContactModel[];
  newContact: ContactModel = new ContactModel();
  editing: boolean = false;
  editingMode: ContactModel = new ContactModel();

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe((value) => {
      this.contact = value;
      console.log(value);
    });
  }

  createContact(form: NgForm) {
    this.contactService.createContact(this.newContact).subscribe((value) => {
      form.reset();
      this.newContact =  value;
      this.contact.unshift(value);
    });
  }

  deleteContact(id: string) {

  }

  updateContact(contact: ContactModel): void {

  }

  toggleCompleted(contact: ContactModel): void {

  }

  editContact(todo: ContactModel): void {

  }

  clearEditing(): void {

  }

}
