import {homeRouting} from "./home.routing";
import {HomeContentComponent} from "./components/home-content/home-content.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {MenuComponent} from "./components/menu/menu.component";

@NgModule({
    imports: [
        homeRouting
    ],
    declarations: [
        HomeComponent,
        HomeContentComponent
    ]
})
export class HomeModule {}
