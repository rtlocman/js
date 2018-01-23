import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs/Observable";
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  private sectionsUrl = 'sections'; // URL to web api
  sections: Section[];
  activeSection: Section;

  readSections() {
    this.getSections().subscribe(sections =>{
      // this.readSections();
      if (this.activeSection == null && this.sections.length>0) {
        this.showSection(this.sections[0]);
      }
    });
  }
  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.sectionsUrl);
  }
  constructor(private http: HttpClient) {
    this.readSections();
  }
  showSection(section:Section) {
    this.activeSection = section;
  }

  ngOnInit() {
  }

}


export interface Section {
  _id?: string;
  title: string;
}
