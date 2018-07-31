import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './home-page/main/main.component';
import { PagesComponent } from './pages/pages.component';
import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PersonPageComponent } from './person-page/person-page.component';
import {PersonModule } from './person-page/person/person.module';
import {LearnVideoComponent} from './pages/learn-video/learn-video.component';
import {CourseTailComponent} from './pages/course-tail/course-tail.component';
import {FcHpComponent} from './pages/fc-hp/fc-hp.component';
import {NavComponent} from './pages/nav/nav.component';
import {HomeFooterComponent} from './home-page/home-footer/home-footer.component';
import {NavigationComponent} from './home-page/navigation/navigation.component';
import {FooterComponent} from './pages/footer/footer.component';
import {VgCoreModule} from 'videogular2/core';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgControlsModule} from 'videogular2/controls';
import {VgBufferingModule} from 'videogular2/buffering';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { QuizComponent } from './quiz/quiz.component';
import {QuizModule} from './quiz/quiz/quiz.module';
import { DropdownModule } from 'primeng/primeng';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import { SaveComponent } from './quiz/save/save.component';
import { QuestionTailComponent } from './quiz/question-tail/question-tail.component';
import { AssortmentComponent } from './quiz/assortment/assortment.component';
import { BlogsComponent } from './blogs/blogs.component';
import {BlogsModule} from './blogs/blogs/blogs.module';
import { SetBlogComponent } from './blogs/set-blog/set-blog.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { UEditorModule } from 'ngx-ueditor';
import {ElModule} from 'element-angular/release/element-angular.module';
import {BlogTailComponent} from './blogs/blog-tail/blog-tail.component';
import { BackstageComponent } from './backstage/backstage.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PagesComponent,
    HomePageComponent,
    RegisterComponent,
    LoginComponent,
    PersonPageComponent,
    FcHpComponent,
    LearnVideoComponent,
    CourseTailComponent,
    NavComponent,
    FooterComponent,
    HomeFooterComponent,
    NavigationComponent,
    QuizComponent,
    SaveComponent,
    QuestionTailComponent,
    AssortmentComponent,
    BlogsComponent,
    SetBlogComponent,
    BlogTailComponent,
    BackstageComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule,
    PersonModule,
    BrowserAnimationsModule,
    FormsModule,
    NgZorroAntdModule,
    QuizModule,
    AppRoutingModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule,
    InputTextareaModule,
    ButtonModule,
    BlogsModule,
    OverlayPanelModule,
    UEditorModule.forRoot({
      js: [
        `./assets/ueditor/ueditor.all.min.js`,
        `./assets/ueditor/ueditor.config.js`,
      ],
      // 默认前端配置项
      options: {
        UEDITOR_HOME_URL: './assets/ueditor/'
      }
    }),
    ElModule.forRoot()
  ],
  exports: [
  ],
  bootstrap: [AppComponent],
  providers: [ CookieService, { provide: NZ_I18N, useValue: zh_CN } ]
})
export class AppModule { }
