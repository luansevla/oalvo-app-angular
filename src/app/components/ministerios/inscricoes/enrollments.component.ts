import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EnrollService } from 'src/app/core/api/enroll.service';
import { Enroll } from 'src/app/core/model/enroll';
import { ExportUtil } from 'src/app/util/export.util';

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent implements AfterViewInit, OnInit {

  enrolls: [Enroll] = [new Enroll()];
  displayedColumns: string[] = ['code', 'name', 'status', 'amount'];
  dataSource = new MatTableDataSource<[Enroll]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _enrollService: EnrollService
  ) { }

  ngOnInit(): void {
    this.getAllEnrolls();
    console.log(this.dataSource.data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(
    sortState: Sort
  ) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getAllEnrolls() {
    this._enrollService.enrollsGet().subscribe({
      next: (result) => {
        this.enrolls = result;
        this.dataSource = result;
      },
      error: (err) => {
        this._snackBar.open(err.error.message, 'FECHAR', { duration: 2000 });
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  exportArray() {
    ExportUtil.exportArrayToExcel(this.enrolls, "Inscrições");
  }

}
