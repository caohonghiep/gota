import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";
declare const module: any;
declare const __moduleName: any;
@Component({
    selector:'gota-home-content',
    moduleId :  module.id ? module.id : __moduleName,
    templateUrl: './related-products-carousel.component.html',
    styleUrls: ['./related-products-carousel.component.css']
})
export class RelatedProductsCarouselComponent extends RenderingUIAbstractComponent {
    renderUI() {

    }

}