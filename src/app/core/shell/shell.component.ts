import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nab-shell',
  template: ` <nab-header></nab-header>
              <nab-top-bar></nab-top-bar>
              <nab-main-content></nab-main-content>
               `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
