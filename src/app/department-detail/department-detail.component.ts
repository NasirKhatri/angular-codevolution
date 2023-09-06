import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})

export class DepartmentDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  public departmentID: any;

  ngOnInit() {
    //const idParam = this.route.snapshot.paramMap.get('id');  //this approach has drawback, because we are navigating back to the same component so ngOnIt not triggered
    // if( idParam !== null) {
    //   let id = parseInt(idParam);
    //   this.departmentID = id;
    // }
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idParam = params.get("id");
      if( idParam !== null) {
          let id = parseInt(idParam);
          this.departmentID = id;
      }
    })
  }

  goPrevious() {
    let previousID = this.departmentID - 1;
    this.router.navigate(['/departments', previousID])
  }

  goNext() {
    let nextID = this.departmentID + 1;
    this.router.navigate(["/departments", nextID])
  }

  //Using optional route parameters, these parameters will not affect view
  goBackDept() {
    let selectedID = this.departmentID ? this.departmentID : null;
    this.router.navigate(['departments', {id: selectedID}])
  }

  showOverview() {
    //this.router.navigate(['departments', this.departmentID, "overview"])
    //we can also navigate relatively as follows
    this.router.navigate(['overview'], {relativeTo: this.route})
  }

  showContact() {
    //this.router.navigate(['departments', this.departmentID, "contact"])
    //we can also navigate relatively as follows
    this.router.navigate(['contact'], {relativeTo: this.route})
  }

}
