import { Email, Twitter } from "@mui/icons-material";
import { SocialItem } from "../../types";
import { Devs } from "./Devs";
import Logo from '../../assets/logo.png';
import './index.scss'
import Discord from "../../components/icons/Discord";

export const Home = () => {
  const socials: SocialItem[] = [
    { url: 'https://twitter.com/Layer7Official', icon: <Twitter /> },
    { url: 'https://discord.gg/ZFbYZNtDsa', icon: <Discord /> },
    { url: 'mailto:layersevenmail@gmail.com', icon: <Email /> },
  ];

  return (
    <div className="container-fluid">
      <div className="home">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="title">
          <h1>Layer 7</h1>
        </div>
        <div className="description">
          <span>Software development. Server hosting. The cool stuff.</span>
        </div>
        <div className="icon-row">
          {socials.map((social) => (
            <a href={social.url} target="_blank">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <Devs />
    </div>
  )
}