import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SuccessComponent } from './components/success/success.component';
import { WarningComponent } from './components/warning/warning.component';
import { DangerComponent } from './components/danger/danger.component';

@NgModule({
    declarations: [
        SuccessComponent,
        WarningComponent,
        DangerComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SuccessComponent,
        WarningComponent,
        DangerComponent
    ]
})

export class TestModule { }
