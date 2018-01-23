import { Component } from '@angular/core';
//import { Http} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab7';
  // heroesUrl :string  = 'http://localhost:8080'
  private sectionsUrl = 'sections'; // URL to web api
  sections: Section[];

  readSections() {
    this.getSections().subscribe(sections =>{
      this.readSections();
    });
  }
  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.sectionsUrl);
  }
  constructor(private http: HttpClient) {
    this.readSections();
  }
}


export interface Section {
  _id?: string;
  title: string;
}
