import { Component } from '@angular/core';
import {RenderingUIAbstractComponent} from "../main/components/rendering-iu/rendering-ui.abstract.component";

//noinspection TypeScriptValidateTypes
@Component({
    template:  `
    <gota-home-content></gota-home-content>
  `
})
export class HomeComponent extends RenderingUIAbstractComponent{
    renderUI():void{

    }
}