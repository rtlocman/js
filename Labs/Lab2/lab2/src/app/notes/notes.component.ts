import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  notes: Note[] ;
  text: string;
  private notesUrl = 'http://localhost:8080/notes'; // URL to web api

  constructor(private http: HttpClient) {
    this.notes  =  [
    {text:'Note one'},
    {text:'Note two'}
  ] ;
  }

  ngOnInit() {

  }
  add() {
    const note = { text: this.text }
    this.notes.push(note);
    this.text = '';
  }
  remove(idx) {
    this.notes.splice(idx,1);
  }
  // getNotes(): Observable <Note[]> {
  //  return this.http.get<Note[]>(this.notesUrl);
  // }
}

interface Note {
  text: string;
}
