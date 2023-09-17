import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DeptOverviewComponent } from './dept-overview/dept-overview.component';
import { DeptContactComponent } from './dept-contact/dept-contact.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ParentInteractionComponent } from './parent-interaction/parent-interaction.component';
import { ObservablesComponent } from './observables/observables.component';
import { PostReduxComponent } from './post-redux/post-redux.component';
import { ChildInteractionComponent } from './child-interaction/child-interaction.component';

const routes: Routes = [
  { path: '', redirectTo: "/practice", pathMatch: "full"},
  { path: "departments", component: DepartmentsListComponent},
  { 
    path: "departments/:id", 
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DeptOverviewComponent},
      { path: 'contact', component: DeptContactComponent}
    ]
  },
  { path: "employees", component: EmployeeListComponent},
  { path: "practice", component: TestComponent},
  { path: "tdf", component: TemplateFormComponent},
  { path: "reactive-form", component: ReactiveFormComponent},
  { path: "parent-child-interaction", component: ParentInteractionComponent},
  { path: "observables", component: ObservablesComponent},
  { path: "ngrx", component: PostReduxComponent},
  { path: "**", component: PageNotFoundComponent} //wildcard route shold be last route in the configuration

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentsListComponent, 
  EmployeeListComponent, 
  TestComponent, 
  PageNotFoundComponent, 
  DepartmentDetailComponent,
  DeptOverviewComponent,
  DeptContactComponent,
  TemplateFormComponent,
  ReactiveFormComponent,
  ParentInteractionComponent,
  ObservablesComponent,
  PostReduxComponent,
  ChildInteractionComponent
];
