import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";

@Component({
    selector:'gota-sidebar',
    moduleId :  module.id ? module.id : __moduleName,
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent extends RenderingUIAbstractComponent {
    renderUI() {

    }

}