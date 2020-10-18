import { Component, OnInit } from '@angular/core';
import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links = [
    { href: 'https://github.com/theaswanson', icon: faGithub },
    { href: 'https://twitter.com/crisp2020', icon: faTwitter },
    { href: 'https://linkedin.com/in/adam-swanson/', icon: faLinkedin},
    { href: 'https://discord.gg/tCMt5p', icon: faDiscord },
    { href: 'mailto:layersevenmail@gmail.com', icon: faEnvelope },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
