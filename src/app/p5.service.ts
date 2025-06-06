import { Injectable } from '@angular/core';
import p5 from 'p5';

@Injectable({
  providedIn: 'root',
})
export class P5Service {
  createSketch(container: HTMLElement) {
    new p5((p: p5) => {
      let flowField: number[][] = [];
      let cols = 40,
        rows = 40;

      p.setup = () => {
        p.createCanvas(800, 800).parent(container);
        p.noLoop();
        for (let i = 0; i < cols; i++) {
          flowField[i] = [];
          for (let j = 0; j < rows; j++) {
            flowField[i][j] = p.noise(i * 0.1, j * 0.1) * p.TWO_PI;
          }
        }
      };

      p.draw = () => {
        p.background(240);
        p.circle(400, 400, 50);
        p.fill(255, 0, 0);
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            let x = i * 20,
              y = j * 20;
            let angle = flowField[i][j];
            p.strokeWeight(4);
            p.stroke(
              p.random(100, 255),
              p.random(100, 255),
              p.random(100, 255)
            );
            p.line(x, y, x + p.cos(angle) * 20, y + p.sin(angle) * 20);

            // p.circle(400, 400, 50);
            // p.fill(255, 0, 0);
          }
        }
      };
    });
  }
}
