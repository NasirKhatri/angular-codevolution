import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { EnrollmentService } from '../services/enrollment/enrollment.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, AfterViewInit {

  constructor(
    private _sampleService: EnrollmentService
  ) {

  }
  courses: any = [];
  x = of("Angular", "React", "Vue");
  @ViewChild('searchField')
  searchField!: ElementRef;
  searchResponse!: string;

  ngOnInit(): void {
    this.x.pipe(
      mergeMap(y => this._sampleService.mergeMap(y))
    ).subscribe((res) => {
      this.courses.push(res);
    })
  }

  ngAfterViewInit(): void {
    let searchItem = fromEvent(this.searchField.nativeElement, 'keyup');
    searchItem.pipe(
      //tap((x: any) => console.log(x.target.value)),
      map((x: any) => x.target.value),
      debounceTime(600),
      distinctUntilChanged(),
      switchMap((x) => this._sampleService.switchMap(x))
    ).subscribe(res => {
      this.searchResponse = res;
    })
  }


  
}
