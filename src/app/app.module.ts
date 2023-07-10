import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from "primeng/inputtextarea";
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from "primeng/table";
import { SidebarModule } from "primeng/sidebar";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { ToastModule } from "primeng/toast";
import { DialogModule } from "primeng/dialog";
import { MessageService } from "primeng/api";
import { KeyFilterModule } from "primeng/keyfilter";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VerifycomponentComponent } from './verifycomponent/verifycomponent.component';
import { TestComponent } from './test/test.component';
import { RegisterComponent } from './register/register.component';
import { SignComponent } from './sign/sign.component';
import { StepComponent } from './step/step.component';
import { StepsModule } from "primeng/steps";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    VerifycomponentComponent,
    TestComponent,
    RegisterComponent,
    SignComponent,
    StepComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    TableModule,
    SidebarModule,
    CheckboxModule,
    DropdownModule,
    OverlayPanelModule,
    ToastModule,
    DialogModule,
    KeyFilterModule,
    StepsModule,
    HttpClientModule
  
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
