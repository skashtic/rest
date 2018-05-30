import { Component, OnInit } from '@angular/core';
import { JsonsService } from '../jsons.service';
import { JsonFile } from '../json-file';

@Component({
  selector: 'app-child-b-table',
  templateUrl: './child-b-table.component.html',
  styleUrls: ['./child-b-table.component.css']
})
export class ChildBTableComponent implements OnInit {

  constructor(private jsonsService: JsonsService) { }
  jsonsListA: JsonFile[];

  ngOnInit() {
    this.getListelemants();
  }
getListelemants() {
  this.jsonsService.getJSON().subscribe(
    res => {this.jsonsListA = res; console.log(' child-b : JSON.stringify(res) = ' + JSON.stringify(res)); },
    err => {console.log(' child-b : err = ' + err); }
  );
}
}
