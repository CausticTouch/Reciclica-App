import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm', () => {

    let loginPageForm : LoginPageForm;
    let form : FormGroup;

    beforeEach(() => {
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    })

    it('should create login form(empty)', () => {

        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual("");
        expect(form.get('email').valid).toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual("");
        expect(form.get('password').valid).toBeFalsy();
    });

    it('invalid email = invalid', () => {
        form.get('email').setValue('invalid email');

        expect(form.get('email').valid).toBeFalsy();
    });

    it('valid email = valid', () => {
        form.get('email').setValue('valid email');

        expect(form.get('email').valid).toBeTruthy();
    });
    it('valid form', () => {
        expect(form.valid).toBeTruthy();
    })
})