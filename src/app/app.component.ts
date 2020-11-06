import { Component, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EOTK Haida Language Learing Tool';
  tc = 0;
  theme_img: string;
  theme_text: string;

  // get the component instance to have access to plyr instance
  @ViewChild(PlyrComponent)
  plyr: PlyrComponent;

  // or get it from plyrInit event
  player: Plyr;

  videoSources: Plyr.Source[] = [
    {
      src: 'http://dev.jaalen.net/video/hr2.mp4'
    }
  ];

  played(event: Plyr.PlyrEvent) {
    console.log('played');
    this.theme_img = '';
    this.player.on('timeupdate', event=> {
      this.tc = Math.round(this.player.currentTime);
      if (this.tc == 26) {
        this.theme_img = '../assets/adze.png';
        this.theme_text = 'Learn about Adzes!'
      }
      if (this.tc == 32) {
        this.theme_img = '../assets/canoe.png';
        this.theme_text = 'Learn about Canoes or Tluu!'
      }
      if (this.tc == 38) {
        this.theme_img = '../assets/hat.png';
        this.theme_text = 'Learn about Haida Hats!'
      }
      if (this.tc == 43) {
        this.theme_img = '../assets/hookknife.png';
        this.theme_text = 'Learn about carving with bent knives!'
      }
      if (this.tc == 43) {
        this.theme_img = '../assets/paddles.png';
        this.theme_text = 'Learn about paddles!'
      }
    })
  }

  play(): void {
    this.player.play();
  }

  toTC() {
    this.tc = 20;
    console.log(this.tc);

    this.player.currentTime = this.tc;
  }

}
