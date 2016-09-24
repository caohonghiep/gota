import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";

@Component({
    selector:'gota-header',
    moduleId :  module.id || __moduleName,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent extends RenderingUIAbstractComponent {
    renderUI() {
        
    }

}