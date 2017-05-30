import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nab-top-bar',
  template: ` <nav>
                <a [routerLink]="['']">home</a>
                <a [routerLink]="['admin']">admin</a>
              </nav>
             ` ,
  styles: []
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
