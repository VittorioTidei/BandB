import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, Form, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserDTO} from "../../dto/userdto";
import {UserService} from "../../service/user.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    form: FormGroup;
    userDTO: UserDTO;
    submitted = false;
    fields = [
        { name:'username',type:'text',label: 'Username', required:true, disabled: false },
        { name:'password',type:'text',label: 'Password', required:true, disabled: false },
        { name:'firstname', type:'text', label: 'Nome', required:true, disabled: false },
        { name:'lastname', type:'text', label: 'Cognome', required:true, disabled: false },
        { name:'address', type:'text', label: 'Indirizzo', required:true, disabled: false },
        { name:'zipcode', type:'number', label: 'CAP', required:true, disabled: false },
        { name:'email', type:'email', label: 'Email', required:true, disabled: false },
        { name:'phone', type:'number', label: 'Telefono', required:true, disabled: false },
        { name:'birthdayDate', type:'date', label: 'Data di nascita', required:false, disabled: false },
        { name:'province', type:'select', label: 'Provincia', required:true, disabled: false },
        { name:'city', type:'select', label: 'Città', required:true, disabled: true },
        { name:'acceptTerms', type:'checkbox', label: 'Termini e condizioni', required:true, disabled:false },
    ]

//  @Input() item: boolean;
    @Output() childToggleSignupForm = new EventEmitter<boolean>();

    constructor(
        private service: UserService,
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group(
            {
                firstname: ['', Validators.required],
                lastname: ['', Validators.required],
                username: ['', Validators.required],
                password: ['', Validators.required],
                address: ['', Validators.required],
                zipcode: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                phone: ['', Validators.required],
                birthdayDate: ['', Validators.required],
                city: ['', Validators.required],
                province: ['', Validators.required],
                acceptTerms: [false, Validators.requiredTrue]
            }
        );
    }

    get g(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }

    onSubmit(): void {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        console.log(JSON.stringify(this.form.value, null, 2));
    }

    onReset(): void {
        this.submitted = false;
        this.form.reset();
    }

    signup(f: NgForm): void {
        this.userDTO = new UserDTO(
            f.value.username,
            f.value.password,
            f.value.usertype,
            f.value.firstname,
            f.value.lastname,
            f.value.address,
            f.value.zipcode,
            f.value.email,
            f.value.phone,
            f.value.birthdayDate,
            f.value.city
        );
        this.service.insert(this.userDTO)
    }

    toggleSignupForm() {
        this.childToggleSignupForm.emit();
    }


}
