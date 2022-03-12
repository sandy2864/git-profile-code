import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { RepoComponent } from './components/repo/repo.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent, RepoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
