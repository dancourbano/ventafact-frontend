import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatSnackBarModule, MatIconModule, MatCardModule, MatListModule, MatMenuModule, MatDividerModule, MatInputModule, MatTableModule, MatDialogModule, MatPaginatorModule } from '@angular/material';


@NgModule({
  
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports:[
    BrowserModule,    
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatListModule],
  providers: []
})
export class MaterialModule { }
