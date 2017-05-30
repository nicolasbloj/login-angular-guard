import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { MainContentComponent } from './shell/main-content/main-content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ShellComponent, HeaderComponent, TopBarComponent, MainContentComponent],
  exports:[ShellComponent]
})
export class CoreModule { }
