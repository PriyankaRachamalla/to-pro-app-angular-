import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts }  from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'dropdownselect',
  templateUrl: 'dropdown-select.component.html',
  styleUrls: ['dropdown-select.component.css']
})
export class DropDownSelectComponent{
  @Input() myOptions :  IMultiSelectOption[];
   @Input() mySettings :  IMultiSelectSettings[];
   @Input() myTexts :  IMultiSelectTexts[];
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  @Input() optionsModel : any[] = [];

  //myOptions: IMultiSelectOption[];= this.inputOptions;

 
// Default selection

// Settings configuration
/*mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true,
    selectionLimit: 1,
  autoUnselect: true
};*/

// Text configuration

// myTexts: IMultiSelectTexts = {
//     checkAll: 'Select all',
//     uncheckAll: 'Unselect all',
//     checked: 'item selected',
//     checkedPlural: 'items selected',
//     searchPlaceholder: 'Find',
//     defaultTitle: 'Select',
//     allSelected: 'All selected',
// };

// Labels / Parents


    
    onChange(data: any) {
        this.notify.emit(data);
        // console.log('[DROPDOWN-SELECT] VALUE : ',this.optionsModel)
    }
    
  
}