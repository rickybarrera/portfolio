import React, {useEffect, useState} from 'react'
import PortfolioList from '../portfolioList/portfolioList'
import './portfolio.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import { featuredPortolio, javascriptPortfolio, pythonPortfolio } from '../../data';
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'featured',
      title: 'All Projects'
    },
    {
      id: 'javascript',
      title:'JavaScript Apps'
    },
    {
      id: "python",
      title: "Python Apps"
    },
    {

    },
  ]

  useEffect(()=>{

    switch(selected){
      case 'featured':
        setData(featuredPortolio);
        break;
        case 'javascript':
        setData(javascriptPortfolio);
        break;
        case 'python':
        setData(pythonPortfolio);
        break;
      default:
        setData(featuredPortolio);
    }
  },[selected])
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Project Portfolio</h1>
      <ul>
      {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/wordleScreenshot.png" alt="" />
          <h3>Wordle</h3>
          <span>
          <a href='https://github.com/rickybarrera/Wordle'>
          <GitHubIcon />
          </a>
          <a href='https://rickybarrera.github.io/Wordle/'>
          <OpenInBrowserIcon />
          </a>
          </span>
        </div>
        <div className="item2">
        <img src="assets/DjangoShoes.png" alt="" />
          <h3>Django Sneaker App</h3>
          <span>
        <a href='https://github.com/rickybarrera/SneakerCollector'>
          <GitHubIcon />
          </a>
          <a href='https://djangosneakercollector.herokuapp.com/'>
          <OpenInBrowserIcon />
          </a>
          </span>
        </div>
        <div className="item3">
        <img src="assets/MongooseSongs.png" alt="" />
          <h3>Express Song Tracker</h3>
          <span>
          <a href='https://github.com/rickybarrera/Project-2-songs'>
          <GitHubIcon />
          </a>
          <a href='https://mongoose-songs.herokuapp.com/'>
          <OpenInBrowserIcon />
          </a>
          </span>
        </div>
        <div className="item4">
        <img src="assets/CheckMeOut.png" alt="" />
          <h3>Check Me Out</h3>
         <span>
           <a href='https://github.com/turpen2319/creative_marketplace'>
          <GitHubIcon />
          </a>
          <a href='https://checkmeout-marketplace.herokuapp.com/products/'>
          <OpenInBrowserIcon />
          </a>
           </span> 
        </div>
        <div className="item5">
        <img src="assets/SpotifyClone.png" alt="" />
          <h3> React Spotify Clone</h3>
          <span>
          <a href='https://github.com/rickybarrera/react-project'>
          <GitHubIcon />
          </a>
          <a href='https://music-player-react4.herokuapp.com/'>
          <OpenInBrowserIcon />
          </a>
          </span>
        </div>
      </div>
    </div>
  )
}
