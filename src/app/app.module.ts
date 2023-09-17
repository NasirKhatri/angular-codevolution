import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { RecordsService } from './records.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostsServiceService } from './posts-service.service';
import { reducers } from './store/reducer';
import { PostEffects } from './store/effect';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([PostEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [RecordsService, PostsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
