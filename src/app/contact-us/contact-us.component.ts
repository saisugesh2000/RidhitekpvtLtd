import { Component } from '@angular/core';
import { ContactUsService } from '../contact-us.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemeServiceService } from '../theme-service.service';
import { FontSizeService } from '../font-size.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;
  showSuccessMessage = false;

  constructor(private fb: FormBuilder, private contactService: ContactUsService,public themeService: ThemeServiceService,private fontSizeService:FontSizeService ) {
    this.contactForm = this.fb.group({
      fullname: ['', [Validators.required,Validators.pattern('^[a-zA-Z]{3,}$')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      phone: ['', [Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]],
      subject: ['', [Validators.required,Validators.maxLength(200)]],
      message: ['', [Validators.required,Validators.maxLength(2500)]]
    });
  }

  get fullname() {
    return this.contactForm.get('fullname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone(){
    return this.contactForm.get("phone");
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit() {
    this.submitted = true; // Set submitted to true when the form is submitted

    if (this.contactForm.valid) {
      this.contactService.addContact(this.contactForm.value).subscribe(
        () => {
          // Handle success
          console.log('Data inserted successfully');
          
          this.submitted = true; // Reset submitted to false after successful submission
          this.showSuccessMessage = false; // Show success message
          
          setTimeout(() => {
            this.showSuccessMessage = true; // Hide success message after 3 seconds
            this.submitted = false;
            this.contactForm.reset();
            setTimeout(() => {
              this.submitted = false; // Allow another submission after another 3 seconds
              // this.showSuccessMessage = false;
            }, 3000);
          }, 3000);
        },
        (error: any) => { // Specify 'any' type explicitly
          // Handle error
          console.error('Error inserting data:', error);
          this.submitted = false;
   }
      );
    } else {
       // Form is invalid, do something
      // For example, mark all fields as touched to display validation messages
      this.contactForm.markAllAsTouched();
      this.submitted = false;
    }
  }


  // font-zize
increaseFontSize() {
  this.fontSizeService.increaseFontSize();
}

// Method to decrease font size by calling the service
decreaseFontSize() {
  this.fontSizeService.decreaseFontSize();
}

// Getter to access font size from the service
get fontSize() {
  return this.fontSizeService.getCurrentFontSize();
}
  
}
