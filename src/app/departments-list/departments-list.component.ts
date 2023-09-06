import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
  public departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "React"},
    {"id": 3, "name": "Vue"}
  ]
  public selectedID: any;

  onSelect(department: any) {
    this.router.navigate(['/departments', department.id]);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idParam = params.get("id");
      if( idParam !== null) {
          let id = parseInt(idParam);
          this.selectedID = id;
      }
    })
  }

  isSelected(department: any) {
    return department.id === this.selectedID;
  }

  constructor(private router: Router, private route: ActivatedRoute) {}



}
 