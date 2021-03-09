import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ForumComponent } from "./forum.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ForumComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
