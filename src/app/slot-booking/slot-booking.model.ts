export const muitiSelectSettings = {
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
  export const muitiSelectInputTexts = {
    checkAll: 'Select All',
    uncheckAll: 'Unselect All',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Select',
    defaultTitle: 'Select',
    allSelected: 'All selected',
    selectionCount: 'checked'
  };
  export const singleSelectSettings = {
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
  export const selectDropdownText = {
    defaultTitle: 'Select',
    searchPlaceholder: 'Select',
  };
  export const yesnoDropdownText = {
    defaultTitle: 'Select',
    searchPlaceholder: 'Select',
  };
  
  export const typeOfCleaningOptions = [
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
  export const pagination = {
    isFirstSearch: true,
    pageIndex: 1,
    resultsPerPage: 10,
    totalResults: 0
  }
  export class InputElement {
    value: any;
    isFieldSet: boolean;
    isMandatory: boolean;
    hasError: boolean;
    constructor(isMandatory: boolean = false) {
      this.value = '';
      this.isFieldSet = false;
      this.hasError = false;
      this.isMandatory = isMandatory;
    }
    clear() {
      this.value = '';
      this.isFieldSet = false;
      this.hasError = false;
    }
    checkFieldStatus() {
      if (this.value === '' || typeof this.value === 'undefined' || this.value === null) {
        this.fieldNotSetFlag();
      } else {
        this.fieldSetFlag();
      }
    }
    private fieldNotSetFlag() {
      this.isFieldSet = false;
      this.hasError = true;
    }
    private fieldSetFlag() {
      this.isFieldSet = true;
      this.hasError = false;
    }
  }
  export class DropDownElement {
    options: any[];
    settings: any;
    texts: any;
    optionsModel: any[];
    id: any;
    name: any;
    isFieldSet: boolean;
    hasError: boolean;
    isMandatory: boolean;
    constructor(isMandatory: boolean = false, settings: any = singleSelectSettings, texts: any = selectDropdownText, options: any = []) {
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
    clear() {
      this.optionsModel = [];
      this.isFieldSet = false;
      this.hasError = false;
      this.id = '';
      this.name = '';
    }
    onChange(event: any) {
      this.clearIdAndName();
      if (typeof event['0'] === 'undefined' || event['0'] === 'Select' || event['0'] === '') {
        this.isFieldSet = false;
      } else {
        this.fieldSetFlags();
        for (let i = event.length - 1; i >= 0; i--) {
          this.setIdAndName(event[i])
        }
      }
    }
    push(id: any) {
      this.optionsModel.push(id);
      this.fieldSetFlags();
      this.setIdAndName(id);
    }
    checkFieldStatus() {
      this.isFieldSet ? this.hasError = false : this.hasError = true;
    }
    private setIdAndName(id: any) {
      for (const row of this.options) {
        if (row.id === id) {
          if (this.name === '') {
            this.id = row.id;
            this.name = row.name;
          } else {
            this.id = row.id + ',' + this.id;
            this.name = row.name + ', ' + this.name;
          }
        }
      }
    }
    private fieldSetFlags() {
      this.isFieldSet = true;
      this.hasError = false;
    }
    // public getNameByID(id: number) {
    // for (const row of this.options) {
    //     if (row.id === id) {
    //       return row.name;
    //     }
    //   }
    // }
    private clearIdAndName() {
      this.id = '';
      this.name = '';
    }
  }
  export const formElements = {
    firstName: new InputElement(true),
    lastName: new InputElement(true),
    email: new InputElement(true),
    phoneNum: new InputElement(true),
    address: new InputElement(true),
    postalCode: new InputElement(true),
    cleaningType: new DropDownElement(true,singleSelectSettings,selectDropdownText,typeOfCleaningOptions),
    propertyDetails: new InputElement(true),
    numOfBathrooms: new InputElement(true),
    numOfBedrooms: new InputElement(true),
    confirmDetails: new InputElement(true),
    specialCleanings: new InputElement(true),
    startDate: new InputElement(true),
    instructionsForCleaners: new InputElement(true)
    
  } 
  