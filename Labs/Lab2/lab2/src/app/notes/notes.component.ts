import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http"; 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/toPromise';

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
    {text:"Note one"},
    {text:"Note two"}
  ] ;
  }

  ngOnInit() {

  }
  add() {
    let note = { text: this.text }
    this.notes.push(note);
    this.text = "";
  }
  remove(idx) {
    this.notes.splice(idx,1);
  }
  getNotes(): Observable <Hero[]> {
  return this.http.get<Note[]>(this.notesUrl);
  }
}



interface Note {
  text: string;
}
