import { Create, GitHub, LinkedIn, Public, Twitter } from "@mui/icons-material";
import { Developer } from "../../types";
import AdamImg from '../../assets/crisp.jpg';
import './Devs.scss'

export const Devs = () => {
  const developers: Developer[] = [
    {
      name: 'Adam Swanson',
      img: AdamImg,
      primaryLink: 'https://adam.layerseven.net',
      links: [
        { url: 'https://adam.layerseven.net', icon: <Public /> },
        { url: 'https://blog.layerseven.net', icon: <Create /> },
        { url: 'https://github.com/theaswanson', icon: <GitHub /> },
        { url: 'https://twitter.com/crisp2020', icon: <Twitter /> },
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
        </div >
      ))}
    </div >
  )
}