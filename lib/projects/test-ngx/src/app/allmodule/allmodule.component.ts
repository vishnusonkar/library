import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allmodule',
  templateUrl: './allmodule.component.html',
  styleUrls: ['./allmodule.component.css']
})
export class AllmoduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(
      'this is all module page that has been shown : with route index'
    );
    
  }

}
