import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeItemComponent } from './employees/employee-item/employee-item.component';
import { StatsComponent } from './stats/stats.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent, children: [
    { path: 'new', component: EmployeeItemComponent },
    { path: ':id/edit', component: EmployeeItemComponent }
  ]},
  { path: 'stats', component: StatsComponent },
  { path: 'settings', component: SettingsComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
