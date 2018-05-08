import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// material components
import {
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";

import { AgGridModule } from "ag-grid-angular/main";
import { AgGridMaterialTextEditorComponent } from "./ag-grid-material-text-editor/ag-grid-material-text-editor.component";
import { AgGridMaterialSelectEditorComponent } from "./ag-grid-material-select-editor/ag-grid-material-select-editor.component";
import { AgGridMaterialCheckboxCellComponent } from "./ag-grid-material-checkbox-cell/ag-grid-material-checkbox-cell.component";
import { AgGridMaterialDatepickerEditorComponent } from "./ag-grid-material-datepicker-editor/ag-grid-material-datepicker-editor.component";

@NgModule({
  declarations: [
    AppComponent,
    AgGridMaterialTextEditorComponent,
    AgGridMaterialSelectEditorComponent,
    AgGridMaterialCheckboxCellComponent,
    AgGridMaterialDatepickerEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AgGridModule.withComponents([
      AgGridMaterialTextEditorComponent,
      AgGridMaterialSelectEditorComponent,
      AgGridMaterialCheckboxCellComponent,
      AgGridMaterialDatepickerEditorComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
