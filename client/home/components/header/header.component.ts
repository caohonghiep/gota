import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";
declare const module: any;

@Component({
    selector:'gota-header',
    moduleId :  module.id,// || __moduleName,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent extends RenderingUIAbstractComponent {
    renderUI() {
        
    }

}