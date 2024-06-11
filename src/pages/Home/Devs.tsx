import { Create, GitHub, LinkedIn, Public, X } from "@mui/icons-material";
import { Developer } from "../../types";
import AdamImg from '../../assets/crisp.jpg';
import './Devs.scss'

export const Devs = () => {
  const developers: Developer[] = [
    {
      name: 'Adam Swanson',
      img: AdamImg,
      primaryLink: 'https://adamswanson.dev',
      links: [
        { url: 'https://adamswanson.dev', icon: <Public /> },
        { url: 'https://blog.adamswanson.dev', icon: <Create /> },
        { url: 'https://github.com/theaswanson', icon: <GitHub /> },
        { url: 'https://x.com/crisp2020', icon: <X /> },
        { url: 'https://linkedin.com/in/adam-swanson/', icon: <LinkedIn /> },
      ]
    }
  ];

  return (
    <div className="developers">
      <div className="title">
        <h3>Developers</h3>
      </div>
      {developers.map(developer => (
        <div className="developer">
          <div className="image">
            <a href={developer.primaryLink} target="_blank">
              <img src={developer.img} />
            </a>
          </div>
          <div className="name">{developer.name}</div>
          <div className="icon-row">
            {developer.links.map(link => (
              <a href={link.url} target="_blank">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}