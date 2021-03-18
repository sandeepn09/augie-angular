import {
  Component,
  OnInit,
  ViewChildren,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import {
  ReferralRequest,
  AppResponse,
  UserInquiry,
} from "../../../models/user-models";
import { UserService } from "../../../service/user-service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { EmailAlertComponent } from "src/app/email/email-alert/email-alert.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"],
})
export class ContactUsComponent implements OnInit {
  emailPattern = "[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{1,}";

  userInquiry: UserInquiry = {
    email: null,
    name: null,
    subject: null,
    message: null,
  };

  contactForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern(this.emailPattern)]),
    name: new FormControl("", [Validators.required]),
    subject: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required]),
  });

  email = this.contactForm.get("email");
  name = this.contactForm.get("name");
  subject = this.contactForm.get("subject");
  message = this.contactForm.get("message");

  staticAlertClosed: true;
  error = null;
  success: any = null;

  public appResponse: AppResponse = {
    code: 0,
    description:
      "We've received your message. A representative will get back to you",
    message: "",
    result: "",
    details: {},
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
   
  }

  submitForm(form: NgForm, content: any) {
    this.message.markAsTouched();
    this.message.markAsDirty();

    this.name.markAsTouched();
    this.name.markAsDirty();

    this.subject.markAsTouched();
    this.subject.markAsDirty();

    this.email.markAsTouched();
    this.email.markAsDirty();

    this.userInquiry = this.contactForm.value;
    console.log("contactMessage: ", this.userInquiry);

    if (this.contactForm.invalid) {
      return;
    }

    this.success = true;
    this.userService.sendMessage(this.userInquiry).subscribe(
      (response) => {
        this.appResponse = response;
        console.log("App Response in referal subscribe: ", this.appResponse);
        this.success = false;
        this.open(content);
      },
      (error) => {
        this.appResponse = {
          code: 0,
          description: "An error occured while processing your request",
          message: "Processing Error",
          result: "ERROR",
          details: {},
        };
        this.success = false;
        this.open(content);
      }
    );
    
  }

  open(content) {
    console.log("content: ", content);
    this.modalService.open(content, { centered: true });
  }
}
