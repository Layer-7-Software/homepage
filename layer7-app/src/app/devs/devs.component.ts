import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.scss']
})
export class DevsComponent implements OnInit {

  developers = [
    {
      name: 'Adam Swanson',
      img: '../../assets/img/crisp.jpg',
      link: 'https://github.com/theaswanson',
      links: [
        { href: 'https://github.com/theaswanson', icon: faGithub },
        { href: 'https://twitter.com/crisp2020', icon: faTwitter },
        { href: 'https://linkedin.com/in/adam-swanson/', icon: faLinkedin },
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
