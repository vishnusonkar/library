import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexmodule',
  templateUrl: './indexmodule.component.html',
  styleUrls: ['./indexmodule.component.css']
})
export class IndexmoduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('hii from index module : with route solution-admin/index');
    
  }

}
