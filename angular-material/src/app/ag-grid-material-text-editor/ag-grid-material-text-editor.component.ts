import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IAfterGuiAttachedParams, ICellEditorParams } from "ag-grid/main";
import { AgEditorComponent, } from "ag-grid-angular";
import { MatInput } from "@angular/material";

@Component({
  selector: 'app-ag-grid-material-text-editor',
  styleUrls: ['./ag-grid-material-text-editor.component.scss'],
  template:`
  <mat-form-field class="mat-input-container">
    <input #input matInput [(ngModel)]="value" >
  </mat-form-field>
`
})
export class AgGridMaterialTextEditorComponent implements OnInit, AgEditorComponent {
    columnWidth: string;
    params: ICellEditorParams;
    private value: string;
    @ViewChild('input', {read: MatInput}) input: MatInput;

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.input.focus();
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

    agInit(params: ICellEditorParams): void {
        //this.columnWidth = "150px";
        this.params = params;
        this.value = params.value;
    }

    getValue(): string {
        return this.value;
    }

    onBlur(): void {
        this.params.stopEditing();
    }

}
