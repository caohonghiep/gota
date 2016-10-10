import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";

@Component({
    selector:'gota-home-content',
    moduleId :  module.id ? module.id : __moduleName,
    templateUrl: './products-content.component.html',
    styleUrls: ['./products-content.component.css']
})
export class ProductsContentComponent extends RenderingUIAbstractComponent {


    renderUI() {

    }

    onSelect(hero: any) {
        this.router.navigate([crisis.id], { relativeTo: this.route });
        this.router.navigate(['/hero', hero.id]);
    }
}