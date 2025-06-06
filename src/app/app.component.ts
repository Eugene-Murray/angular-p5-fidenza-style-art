import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArtComponent } from "./art/art.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArtComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fidenza-style-art';
}
