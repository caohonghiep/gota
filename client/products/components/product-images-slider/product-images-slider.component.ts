import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";

@Component({
    selector:'gota-home-content',
    moduleId :  module.id ? module.id : __moduleName,
    templateUrl: './product-images-slider.component.html',
    styleUrls: ['./product-images-slider.component.css']
})
export class ProductImageSliderComponent extends RenderingUIAbstractComponent {
    renderUI() {

    }

}