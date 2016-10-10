import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";
import 'js/pignose.layerslider.js'
import 'js/easyResponsiveTabs.js';
declare const module: any;
declare const __moduleName: any;
declare const jQuery: any;
@Component({
    selector: 'gota-home-content',
    moduleId : module.id,//__moduleName
    templateUrl: './home-content.component.html',
    styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent extends RenderingUIAbstractComponent {
    renderUI() {
        setTimeout(function(){
            jQuery('#visual').pignoseLayerSlider({
                play    : '.btn-play',
                pause   : '.btn-pause',
                next    : '.btn-next',
                prev    : '.btn-prev'
            });
            jQuery('#horizontalTab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true   // 100% fit in a container
            });
        },50);
    }
}