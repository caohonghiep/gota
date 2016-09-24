import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";

@Component({
    selector:'gota-categories-sidebar',
    moduleId :  module.id || __moduleName,
    templateUrl: './categories-sidebar.component.html',
    styleUrls: ['./categories-sidebar.component.css']
})
export class CategoriesSidebarComponent extends RenderingUIAbstractComponent {
    renderUI() {

    }

}