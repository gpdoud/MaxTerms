import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  term: string = "Database";
  definition: string = `A database is a collection of tables`;
  
  constructor() { }

  ngOnInit() {
  }

}
