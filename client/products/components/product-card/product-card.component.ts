import { Component, Input} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";

@Component({
    selector:'gota-product-card',
    moduleId :  module.id ? module.id : __moduleName,
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent extends RenderingUIAbstractComponent {
    renderUI() {
    }

    @Input() name:string;
    @Input() price:number;
    @Input() imageURL:string;
}