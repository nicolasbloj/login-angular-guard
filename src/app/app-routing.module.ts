import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SimpleAuthGuard } from "app/_guards/simple-auth.guard";

const routes: Routes = [

    {
        path: '',
        loadChildren: './home/home.module#HomeModule'  //LAZY LOADING
        
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',  //LAZY LOADING
        canActivate: [SimpleAuthGuard]
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule 
    ],
    providers:[SimpleAuthGuard]
})
export class AppRoutingModule { }