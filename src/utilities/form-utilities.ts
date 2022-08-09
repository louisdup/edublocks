import * as yup from "yup";

// Define an object for building a form validation schema with yup.
export interface ValidationSchema {
	 [key: string]: any;
}
 
// Define an object with form data.
export interface FormData {
	 [key: string]: any;
}

// Define an object with form errors.
export interface FormErrors {
	 [key: string]: any;
}
 
/**
 * Utility functions for building forms.
 */
export class FormUtilities {	
	/**
	 * Returns whether form data is valid or not.
	 */
	public static async isFormValid(validationSchema: ValidationSchema, data: FormData): Promise<boolean> {
		let isValid: boolean = false;
		await yup.object().shape(validationSchema).validate(data, { abortEarly: true })
			.then(() => {
				isValid = true;
			})
			.catch(() => {
				isValid = false;
			});
		return isValid;
	}
	
	/**
	 * Checks if a specific field is valid, populates the form errors array with an erorr message and returns the result. 
	 */
	public static async validateField(field: string, validationSchema: ValidationSchema, data: FormData, errors: FormErrors): Promise<boolean> {
		let isValid: boolean = false;
		await yup.object().shape(validationSchema)
			.validateAt(field, data)
			.then(() => {
				delete errors[field];
				isValid = true;
			})
			.catch((err: Error) => {
				errors[field] = err.message;
				isValid = false;
			});
		return isValid;
	}
}