import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";
declare const module: any;

@Component({
    selector:'gota-menu',
    moduleId :  module.id,// || __moduleName,
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
})
export class MenuComponent extends RenderingUIAbstractComponent {
    renderUI() {

    }

}