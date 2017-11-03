import { Component } from "@angular/core";
import { MatInput, MatButton } from "@angular/material";
import { NgModel } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  search(term: string): void {
    console.log(term);
  }
}
