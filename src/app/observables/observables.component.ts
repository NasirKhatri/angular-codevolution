import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, interval, take, map, filter, of, mergeMap } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnDestroy, OnInit {
  observable$: any;
  mySubject$: any;
  numbers$: any;
  letters$: any;

  ngOnInit() {

    //Observable
    // this.observable$ = new Observable((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.complete();
    // });

    // this.observable$.subscribe({
    //   next(value: any) {
    //     console.log(value);
    //   },
    //   error(err: any) {}
    // })

    //subject
    // this.mySubject$ = new Subject();
    // this.mySubject$.subscribe({
    //   next(x: any) {
    //     console.log('First Subscibe '+ x )
    //   }
    // })
    // this.mySubject$.next(1);
    // this.mySubject$.next(2);
    // this.mySubject$.subscribe({
    //   next(x: any) {
    //     console.log('Second Subscibe '+ x )
    //   }
    // })
    // this.mySubject$.next(3);



    //Operators////////////////////////////////////////

    //take

    // this.numbers$ = interval(1000);
    // this.numbers$.pipe(take(5)).subscribe({
    //   next(value: any) {
    //     console.log(value);
    //   },
    // })

    //map, filter

    this.numbers$ = interval(1000);
    // this.numbers$
    // .pipe(
    //   take(5),
    //   map((x: any) => x * 2),
    //   filter((x: any) => x > 5)
    // )
    // .subscribe({
    //   next(value: any) {
    //     console.log(value);
    //   }
    // })

    //mergeMap
    this.letters$ = of("a", "b", "c", "d", "e");
    this.letters$.pipe(mergeMap((x: any) => 
      this.numbers$
        .pipe(
          take(5),
          map((i: any) => i + x)
        ))
        )
        .subscribe({
          next(value: any) {
            console.log(value);
          }
        })

  }


  ngOnDestroy(): void {
    this.numbers$.unsubscribe();
  }

}
