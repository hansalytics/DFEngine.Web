import { Component, OnInit, Input } from '@angular/core';
import { SQLFile } from 'src/app/_models/sql-file';
import { FileCatalogService } from 'src/app/multifile-page/services/file-catalog.service';

@Component({
  selector: 'app-file-selection-item',
  templateUrl: './file-selection-item.component.html',
  styleUrls: ['./file-selection-item.component.sass']
})
export class FileSelectionItemComponent {
  @Input() sqlFile: SQLFile;

  selected: boolean = true;

  constructor(private fileCatalogService: FileCatalogService) { }

  onCheckBoxChange() {
    this.selected = !this.selected;
    this.fileCatalogService.selectedFileSubject.next(this.sqlFile);
  }
}
