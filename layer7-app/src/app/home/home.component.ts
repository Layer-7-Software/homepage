import { Component, OnInit } from '@angular/core';
import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links = [
    { href: 'https://twitter.com/Layer7Official', icon: faTwitter },
    { href: 'https://discord.gg/ZFbYZNtDsa', icon: faDiscord },
    { href: 'mailto:layersevenmail@gmail.com', icon: faEnvelope },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
