import { Component, OnInit, TemplateRef, ViewChild, ElementRef, Injector } from '@angular/core';
import { TableModel, TableHeaderItem, TableData, TableItem, ModalService, BaseModal, PaginationModel } from 'carbon-components-angular';
import { DataService } from '../data.service';
import { Entry } from '../entry';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  entries: Map<string, Entry>;
  tableSize: string = "md";
  tableModel = new TableModel(); 
  tableCols = ["Date","Title","Delete"];
  paginationModel = new PaginationModel();

  @ViewChild('dateTemplate',{static: true}) private dateTemplate: TemplateRef<any>;
  @ViewChild('deleteTemplate',{static: true}) private deleteTemplate: TemplateRef<any>;

  constructor(private dataService: DataService,
              private modalService: ModalService) { 
    this.tableModel.header = [];
    for(let col of this.tableCols){
      this.tableModel.header.push(new TableHeaderItem({data: col}));
    }
    this.paginationModel.totalDataLength = 0;
  }

  ngOnInit() {
    this.entries = this.dataService.getAllUserEntries();
    this.paginationModel.pageLength = 5;
    this.paginationModel.currentPage = 1;
    this.paginationModel.totalDataLength = this.entries.size;
    this.updateData(this.entries.values(),this.paginationModel.pageLength,this.paginationModel.currentPage);
  }

  openModal(key: string){
    console.log(this.entries.get(key));
    this.modalService.create({component: EntryModal, inputs: {entry: this.entries.get(key)}});
  }

  datePicked(event){
    let date: Date = new Date(event);
    console.log(date.toString());
    if(this.entries.has(date.toDateString())){
      let entry = this.entries.get(date.toDateString());
      this.paginationModel.totalDataLength = 1;
      this.paginationModel.pageLength = 1;
      this.paginationModel.currentPage = 1;
      this.updateData([entry].values(),1,1);
    }
    else
      this.tableModel.data = [];
  }

  clearFilters(){
    this.paginationModel.pageLength = 5;
    this.paginationModel.currentPage = 1;
    this.paginationModel.totalDataLength = this.entries.size;
    this.updateData(this.entries.values(),this.paginationModel.pageLength,this.paginationModel.currentPage);
  }

  updateData(entries: IterableIterator<Entry>, itemPerPage: number, page: number){
    this.tableModel.data = [];
    let i = 0;
    for(let entry of entries){
      if(i>=(page-1)*itemPerPage && i<page*itemPerPage)
        this.tableModel.data.push([new TableItem({data: entry.date.toDateString() ,template: this.dateTemplate}), 
                            new TableItem({data: entry.title}),
                            new TableItem({data: entry.date.toDateString() ,template: this.deleteTemplate})]);
      i+=1;
    }
  }

  deleteEntry(key: string){
    this.dataService.deleteUserEntry(key);
    this.entries = this.dataService.getAllUserEntries();
    this.paginationModel.totalDataLength = this.entries.size;
    this.paginationModel.pageLength = 5;
    this.paginationModel.currentPage = 1;
    this.updateData(this.entries.values(),this.paginationModel.pageLength,this.paginationModel.currentPage);
  }

  pageSelected(event){
    this.paginationModel.currentPage = event;
    this.updateData(this.entries.values(),this.paginationModel.pageLength,this.paginationModel.currentPage);
  }

}

@Component({
  selector: 'modal-entry',
  templateUrl: './entry.modal.html',
  styleUrls: ['./archives.component.scss']
})
export class EntryModal extends BaseModal{
  entry: Entry;
  constructor(protected injector: Injector){
    super();
    this.entry = this.injector.get("entry");
  }
}
