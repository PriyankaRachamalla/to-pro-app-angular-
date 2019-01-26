export var muitiSelectSettings = {
    singleSelection: false,
    enableSearch: false,
    checkedStyle: 'fontawesome',
    buttonClasses: '',
    containerClasses: 'dropdown-inline',
    selectionLimit: 0,
    closeOnSelect: false,
    autoUnselect: false,
    displayAllSelectedText: true,
    showCheckAll: true,
    showUncheckAll: true,
    fixedTitle: false,
    dynamicTitleMaxItems: 0,
    maxHeight: '300px'
};
export var muitiSelectInputTexts = {
    checkAll: 'Select All',
    uncheckAll: 'Unselect All',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Select',
    defaultTitle: 'Select',
    allSelected: 'All selected',
    selectionCount: 'checked'
};
export var singleSelectSettings = {
    singleSelection: true,
    enableSearch: false,
    checkedStyle: 'fontawesome',
    buttonClasses: '',
    dynamicTitleMaxItems: 3,
    selectionLimit: 1,
    autoUnselect: true,
    closeOnSelect: true,
    displayAllSelectedText: true,
    maxWidth: 5
};
export var selectDropdownText = {
    defaultTitle: 'Select',
    searchPlaceholder: 'Select',
};
export var yesnoDropdownText = {
    defaultTitle: 'Select',
    searchPlaceholder: 'Select',
};
export var typeOfCleaningOptions = [
    { id: '', name: 'Select' },
    { id: 'oneOffCleaning', name: 'One-Off Cleaning' },
    { id: 'springCleaning', name: 'Spring Cleaning' },
    { id: 'endOfLeaseCleaning', name: 'End Of Lease Cleaning' },
    { id: 'airBnbCleaning', name: 'Air Bnb Cleaning' },
    { id: 'steamCarpetCleaning', name: 'Steam Carpet Cleaning' },
    { id: 'windowCleaning', name: 'Window Cleaning' },
    { id: 'ovenFridgeCleaning', name: 'Oven/Fridge Cleaning' },
    { id: 'mouldCleaning', name: 'Mould Cleaning' },
    { id: 'highPressureClean', name: 'High Pressure Clean' },
    { id: 'others', name: 'Others' }
];
// export const inquiryRequestsOptions = [
//   { id: '', name: 'Select' },
//   { id: 'Insurance', name: 'Insurance' },
//   { id: 'Account', name: 'Account' },
//   { id: 'Review', name: 'Review' },
//   { id: 'General', name: 'General' }
// ];
// export const autoGeneratingAction = [
//   { id: '', name: 'Select' },
//   { id: 'patientDeceased', name: 'Patient Deceased' },
//   { id: 'bankruptcy', name: 'Bankruptcy' },
//   { id: 'endofProgram', name: 'End of Program' }
// ];
//   export const yesornoInputOptions = [
//     { id: '', name: 'Select' },
//     { id: 'true', name: 'Yes' },
//     { id: 'false', name: 'No' }
//   ];
//   export const holdornoInputOptions = [
//     { id: '', name: 'Select' },
//     { id: 'no', name: 'No' },
//     { id: 'onHold', name: 'On Hold' }
//   ];
//   export const irCLoseOptions = [
//     { id: '', name: 'Select' },
//     { id: 'no', name: 'No' },
//     { id: 'onAccount', name: 'On Account' },
//     { id: 'onCharges', name: 'On Charges' },
//     { id: 'onPatient', name: 'On Patient' },
//     { id: 'onGuarantor', name: 'On Guarantor' }
//   ];
//   export const onaccountornoInputOptions = [
//     { id: '', name: 'Select' },
//     { id: 'no', name: 'No' },
//     { id: 'onAccount', name: 'On Account' }
//   ];
export var pagination = {
    isFirstSearch: true,
    pageIndex: 1,
    resultsPerPage: 10,
    totalResults: 0
};
var InputElement = /** @class */ (function () {
    function InputElement(isMandatory) {
        if (isMandatory === void 0) { isMandatory = false; }
        this.value = '';
        this.isFieldSet = false;
        this.hasError = false;
        this.isMandatory = isMandatory;
    }
    InputElement.prototype.clear = function () {
        this.value = '';
        this.isFieldSet = false;
        this.hasError = false;
    };
    InputElement.prototype.checkFieldStatus = function () {
        if (this.value === '' || typeof this.value === 'undefined' || this.value === null) {
            this.fieldNotSetFlag();
        }
        else {
            this.fieldSetFlag();
        }
    };
    InputElement.prototype.fieldNotSetFlag = function () {
        this.isFieldSet = false;
        this.hasError = true;
    };
    InputElement.prototype.fieldSetFlag = function () {
        this.isFieldSet = true;
        this.hasError = false;
    };
    return InputElement;
}());
export { InputElement };
var DropDownElement = /** @class */ (function () {
    function DropDownElement(isMandatory, settings, texts, options) {
        if (isMandatory === void 0) { isMandatory = false; }
        if (settings === void 0) { settings = singleSelectSettings; }
        if (texts === void 0) { texts = selectDropdownText; }
        if (options === void 0) { options = []; }
        this.options = options;
        this.optionsModel = [];
        this.isFieldSet = false;
        this.hasError = false;
        this.isMandatory = isMandatory;
        this.settings = settings;
        this.texts = texts;
    }
    // assignOptions(optionsAssigned: any) {
    //   let title = null;
    //   if (this.texts.defaultTitle) { title = this.texts.defaultTitle; } else { title = 'Select'; }
    //   this.options.push({ id: 'Select', name: title });
    //   for (const row of optionsAssigned) { this.options.push({ id: row.id, name: row.name }); }
    // }
    DropDownElement.prototype.clear = function () {
        this.optionsModel = [];
        this.isFieldSet = false;
        this.hasError = false;
        this.id = '';
        this.name = '';
    };
    DropDownElement.prototype.onChange = function (event) {
        this.clearIdAndName();
        if (typeof event['0'] === 'undefined' || event['0'] === 'Select' || event['0'] === '') {
            this.isFieldSet = false;
        }
        else {
            this.fieldSetFlags();
            for (var i = event.length - 1; i >= 0; i--) {
                this.setIdAndName(event[i]);
            }
        }
    };
    DropDownElement.prototype.push = function (id) {
        this.optionsModel.push(id);
        this.fieldSetFlags();
        this.setIdAndName(id);
    };
    DropDownElement.prototype.checkFieldStatus = function () {
        this.isFieldSet ? this.hasError = false : this.hasError = true;
    };
    DropDownElement.prototype.setIdAndName = function (id) {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.id === id) {
                if (this.name === '') {
                    this.id = row.id;
                    this.name = row.name;
                }
                else {
                    this.id = row.id + ',' + this.id;
                    this.name = row.name + ', ' + this.name;
                }
            }
        }
    };
    DropDownElement.prototype.fieldSetFlags = function () {
        this.isFieldSet = true;
        this.hasError = false;
    };
    // public getNameByID(id: number) {
    // for (const row of this.options) {
    //     if (row.id === id) {
    //       return row.name;
    //     }
    //   }
    // }
    DropDownElement.prototype.clearIdAndName = function () {
        this.id = '';
        this.name = '';
    };
    return DropDownElement;
}());
export { DropDownElement };
export var formElements = {
    firstName: new InputElement(true),
    lastName: new InputElement(true),
    email: new InputElement(true),
    phoneNum: new InputElement(true),
    address: new InputElement(true),
    postalCode: new InputElement(true),
    cleaningType: new DropDownElement(true, singleSelectSettings, selectDropdownText, typeOfCleaningOptions),
    propertyDetails: new InputElement(true),
    numOfBathrooms: new InputElement(true),
    numOfBedrooms: new InputElement(true),
    confirmDetails: new InputElement(true),
    specialCleanings: new InputElement(true),
    startDate: new InputElement(true),
    instructionsForCleaners: new InputElement(true)
};
//# sourceMappingURL=slot-booking.model.js.map