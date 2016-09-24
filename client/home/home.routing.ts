import {HomeComponent} from "./home.component";
import {Routes, RouterModule} from "@angular/router";
import {HomeContentComponent} from "./components/home-content/home-content.component";
import {ModuleWithProviders} from "@angular/core";
const homeRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        component: HomeComponent
    }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);