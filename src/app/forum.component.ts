import { Component, Input } from "@angular/core";

@Component({
  selector: "forum",
  template: `
    <h1>Bem vindos (as) ao {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class ForumComponent {
  @Input() name: string;
}
