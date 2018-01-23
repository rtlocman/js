import { Component, OnInit } from '@angular/core';
import {Section} from "../sections/sections.component";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  section :Section;
  constructor() { }

  ngOnInit() {
  }

}
