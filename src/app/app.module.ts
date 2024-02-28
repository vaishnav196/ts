import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PopUpComponent } from './pop-up/pop-up.component';
import { FormBuilder, FormGroup } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PopUpComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MatTableModule,MatButtonModule,FormsModule,MatFormFieldModule,MatInputModule,MatDialogModule,ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
