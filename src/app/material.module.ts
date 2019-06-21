import {NgModule} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MatButtonModule,MatMenuModule,MatToolbarModule,MatIconModule,MatCardModule,MatSidenavModule,MatListModule,
         MatInputModule,MatDialogModule,MatTableModule,MatProgressSpinnerModule,MatFormFieldModule,MatCheckboxModule,MatNativeDateModule,MatDividerModule,
       } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,    
    MatListModule,
    CommonModule, 
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDividerModule,
    
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,    
    MatListModule,
    CommonModule, 
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDividerModule,
    
  ]
})
export class MaterialModule {}