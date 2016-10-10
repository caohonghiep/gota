import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";
declare const module: any;

@Component({
    selector: 'gota-footer',
    moduleId :  module.id,// || __moduleName,
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent extends RenderingUIAbstractComponent {
    renderUI() {
        
    }

}