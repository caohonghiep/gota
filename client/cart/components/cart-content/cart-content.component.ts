import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";

@Component({
    selector:'gota-cart-content',
    moduleId :  module.id || __moduleName,
    templateUrl: './cart-content.component.html',
    styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent extends RenderingUIAbstractComponent {
    renderUI() {

    }

}