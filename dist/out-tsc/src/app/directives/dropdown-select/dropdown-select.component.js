import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var DropDownSelectComponent = /** @class */ (function () {
    function DropDownSelectComponent() {
        this.notify = new EventEmitter();
        this.optionsModel = [];
    }
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
    DropDownSelectComponent.prototype.onChange = function (data) {
        this.notify.emit(data);
        // console.log('[DROPDOWN-SELECT] VALUE : ',this.optionsModel)
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], DropDownSelectComponent.prototype, "myOptions", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], DropDownSelectComponent.prototype, "mySettings", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], DropDownSelectComponent.prototype, "myTexts", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], DropDownSelectComponent.prototype, "notify", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], DropDownSelectComponent.prototype, "optionsModel", void 0);
    DropDownSelectComponent = tslib_1.__decorate([
        Component({
            selector: 'dropdownselect',
            templateUrl: 'dropdown-select.component.html',
            styleUrls: ['dropdown-select.component.css']
        })
    ], DropDownSelectComponent);
    return DropDownSelectComponent;
}());
export { DropDownSelectComponent };
//# sourceMappingURL=dropdown-select.component.js.map