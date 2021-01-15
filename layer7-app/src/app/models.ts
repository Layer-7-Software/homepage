import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export class SocialItem {
  href: string;
  icon: IconDefinition;
}

export class Developer {
  name: string;
  img: string;
  primaryLink: string;
  links: SocialItem[];
}