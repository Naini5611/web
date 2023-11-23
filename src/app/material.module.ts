import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material components
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


const materialImport = [
  FormsModule,
  ReactiveFormsModule,
  // material components
  MatSidenavModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTabsModule,
  MatMenuModule,
  MatListModule,
  MatTableModule,
  MatStepperModule,
  MatDatepickerModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatPaginatorModule,
  MatDialogModule,
  MatExpansionModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatRadioModule,
  MatAutocompleteModule,
]
@NgModule({
  imports: [
    CommonModule,
    ...materialImport
  ],
  exports: [
    ...materialImport
  ],
  declarations: []
})
export class MaterialModule { }
