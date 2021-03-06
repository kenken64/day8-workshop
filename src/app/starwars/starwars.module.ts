import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';

import { CategoryComponent } from './category/category.component'
import { CategoryItemsComponent } from './category/categoryitems.component';
import { DetailsComponent } from './category/details.component'
import { HttpClientModule } from '@angular/common/http';
import { StarwarapiService } from '../services/starwarapi.service';
import { RouterModule } from '@angular/router';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import { HeaderComponent } from './header/header.component';

const routes = [
  {
    path: 'Home',
    component: CategoryComponent,
  },
  {
    path: 'categoryitems/:name',
    component: CategoryItemsComponent,
  },
  {
    path: 'details/:url',
    component: DetailsComponent,
  },
  {
    path: '', 
    redirectTo: '/Home', 
    pathMatch: 'full' 
  },
]

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ObserversModule,
    PlatformModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    CategoryComponent,
    CategoryItemsComponent,
    DetailsComponent,
    HeaderComponent
  ],
  providers: [
    StarwarapiService
  ],
  exports: [
    CategoryComponent,
    CategoryItemsComponent,
    DetailsComponent,
    HeaderComponent,
    RouterModule
  ]
})
export class StarwarsModule {}