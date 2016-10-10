import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";

@Component({
    selector:'gota-blog-content',
    moduleId :  module.id ? module.id : __moduleName,
    templateUrl: './blog-content.component.html',
    styleUrls: ['./blog-content.component.css']
})
export class BlogContentComponent extends RenderingUIAbstractComponent {
    renderUI() {

    }

}