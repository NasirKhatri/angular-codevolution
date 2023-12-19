export interface IValidator {
    validatorName: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    email?: string;
    message: string;
  }
  
export interface IFormControl {
    name: string;
    label: string;
    value: string | number | boolean;
    placeholder: string;
    class: string;
    type: string;
    validators: IValidator[];
    radioOptions?: string[];
    options?: { id: number; value: string }[];
  }
  
export interface IDynamicForm {
    formTitle: string;
    saveBtnTitle: string;
    resetBtnTitle: string;
    formControls: IFormControl[];
  }