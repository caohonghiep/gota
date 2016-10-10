import { Component, ElementRef, Input} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../main/components/rendering-iu/rendering-ui.abstract.component";
import 'js/jquery-ui.js';

declare const module: any;
declare const jQuery: any;
@Component({
    selector:'gota-categories-sidebar',
    moduleId :  module.id,// __moduleName,
    templateUrl: './categories-sidebar.component.html',
    styleUrls: ['./categories-sidebar.component.css']
})
export class CategoriesSidebarComponent extends RenderingUIAbstractComponent {
    public display = true;
    constructor(private elementRef:ElementRef){

    }
    renderUI() {
        setTimeout(function(){
            jQuery( "#slider-range" ).slider({
                range: true,
                min: 0,
                max: 9000,
                values: [ 1000, 7000 ],
                slide: function( event, ui ) {  jQuery( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
            });
            jQuery( "#amount" ).val( "$" + jQuery( "#slider-range" ).slider( "values", 0 ) + " - $" + jQuery( "#slider-range" ).slider( "values", 1 ) );

        },250);
        let _this = this;
        setTimeout(function(){
            _this.display=false;
        },1000);
    }

    getSidebarWidth(){
        return this.elementRef.nativeElement.getElementsByClassName('categories-sidebar-content')[0].offsetWidth;
    }
    switchCategoriesSidebar($event: any){
        this.display=!this.display;
        if(this.display){
            document.body.style.overflowY='hidden';
        }else {
            document.body.style.overflowY='scroll';
        }

        /*
        let classList = $event.target.classList;

        if(classList.contains("glyphicon-chevron-right")){
            classList.remove('glyphicon-chevron-right');
            classList.add('glyphicon-chevron-left');
            hideCategoriesSidebar();
        } else {
            classList.remove('glyphicon-chevron-left');
            classList.add('glyphicon-chevron-right');
            showCategoriesSidebar();
        }
*/
    }

    @Input('display')
    set updateInternalVal(display) {
        this.display = display;
    }
}