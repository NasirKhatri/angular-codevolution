import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { RecordsService } from './services/records/records.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostsServiceService } from './services/posts/posts-service.service';
import { reducers } from './store/reducer';
import { PostEffects } from './store/effect';
import { HighlightColorDirective } from './directives/highlight-color.directive';
import { TokenInterceptor } from './services/token/token.interceptor';
import { DynamicFormTemplateComponent } from './dynamic-form-template/dynamic-form-template.component';
import { TdftwoComponent } from './tdftwo/tdftwo.component';
import { RectiveformtwoComponent } from './rectiveformtwo/rectiveformtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    HighlightColorDirective,
    DynamicFormTemplateComponent,
    TdftwoComponent,
    RectiveformtwoComponent,
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
  providers: [RecordsService, PostsServiceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
