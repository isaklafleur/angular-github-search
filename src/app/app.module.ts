import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GithubResultsComponent } from "./components/github-results/github-results.component";

@NgModule({
  declarations: [AppComponent, GithubResultsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
