import { AboutMeComponent } from './components/about-me/about-me.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes:Routes = [
    {
        path: '',
        component: AboutMeComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class AboutMeRoutingModule{}