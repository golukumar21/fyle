import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DashboardComponent } from './dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RepositoriesComponent } from './repositories/repositories.component';
// import { PageComponent } from '../common/page/page.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    CommonModule,
    RouterModule.forChild([]),
  ],
  exports: [DashboardComponent],
  declarations: [
    DashboardComponent,
    UserDetailsComponent,
    RepositoriesComponent,
    // PageComponent,
  ],
})
export class DashboardModule {}
