import { Component, ElementRef, ViewChild } from '@angular/core';
import { P5Service } from '../p5.service';

@Component({
  selector: 'app-art',
  imports: [],
  templateUrl: './art.component.html',
  styleUrl: './art.component.scss',
})
export class ArtComponent {
  @ViewChild('artContainer') artContainer!: ElementRef;

  constructor(private p5Service: P5Service) {}

  ngAfterViewInit() {
    console.log('artContainer', this.artContainer);

    this.p5Service.createSketch(this.artContainer.nativeElement!);
  }
}
