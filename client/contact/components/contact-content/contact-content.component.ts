import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";
declare const module: any;

@Component({
    selector:'gota-home-content',
    moduleId :  module.id,
    templateUrl: './contact-content.component.html',
    styleUrls: ['./contact-content.component.css']
})
export class ContactContentComponent extends RenderingUIAbstractComponent {
    renderUI() {

    }

}