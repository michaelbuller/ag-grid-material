import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IAfterGuiAttachedParams, ICellEditorParams } from "ag-grid/main";
import { AgEditorComponent, } from "ag-grid-angular";
import { MatDatepicker, MatDatepickerToggle } from "@angular/material";

@Component({
  selector: 'app-ag-grid-material-datepicker-editor',
  template: `
    <mat-form-field class="mat-input-container">
        <input matInput [matDatepicker]="picker" placeholder="Choose a date" [(ngModel)]="value">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker (selectedChanged)="onSelectChange(e)"></mat-datepicker>
    </mat-form-field>
  `, 
  styles: [
      `
.mat-input-container {
    margin-top: -16px;
}

      `
  ]
})
export class AgGridMaterialDatepickerEditorComponent implements OnInit, AgEditorComponent {
    columnWidth: string;
    params: ICellEditorParams;
    private value: string;
    @ViewChild('picker', {read: MatDatepicker}) picker: MatDatepicker<Date>;

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.picker.open();
    }

    isPopup(): boolean {
        return false;
    }

    isCancelBeforeStart(): boolean {
        return false;
    }

    isCancelAfterEnd(): boolean {
        return false;
    }

    agInit(params: any): void {
        this.params = params;
        this.value = params.value;
    }

    getValue(): string {
        return this.value;
    }

    onSelectChange(e): void {
        setTimeout(function() {
            this.params.stopEditing()
        }.bind(this));
    }

}
