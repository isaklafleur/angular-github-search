import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { GithubResultsComponent } from "./components/github-results/github-results.component";

@NgModule({
  declarations: [AppComponent, GithubResultsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
