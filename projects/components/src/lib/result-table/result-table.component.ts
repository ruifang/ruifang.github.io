import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { LoadingState } from '../models/loading-state';
import { PageEvent } from '../models/page-event';
import { ResultTableModel } from './result-table.model';

@Component({
    selector: 'mz-result-table',
    templateUrl: './result-table.component.html',
    styleUrls: ['./result-table.component.scss'],
})
export class ResultTableComponent {
    @Input() public loadingState!: LoadingState;
    @Input() public model: ResultTableModel<any> | undefined | null; // to deal with the flaw of angular's async pipe
    @Input() public headTemplate!: TemplateRef<any>;
    @Input() public bodyTemplate!: TemplateRef<any>;
    @Output() public pageChange = new EventEmitter<PageEvent>();
    constructor() {}

    changePage(page: PageEvent, table: HTMLElement) {
        this.pageChange.emit(page);
        setTimeout(() => {
            table.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    searchAgain() {
        this.pageChange.emit({ page: this.model?.page || 1, pageSize: this.model?.pageSize || 20 }); // TODO
    }

    public get state(): 'loading' | 'failed' | 'succeeded' {
        if (this.loadingState.loading) {
            return 'loading';
        }
        if (this.loadingState.error != undefined) {
            return 'failed';
        }

        return 'succeeded';
    }
}
