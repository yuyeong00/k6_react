import logo from '../logo.svg'
import './HelloCss.css'
import HelloWhite from './HelloWhite';
import HelloYellow from './HelloYellow';
import { BsStarFill } from "react-icons/bs";

export default function HelloCss() {

  const apikey = process.env.REACT_APP_MV_API_KEY
  console.log(apikey)

  return (
    <div className='hellomain'>
        <BsStarFill className='App-logo text-5xl'/>
        <HelloWhite/>
        <HelloYellow/>
    </div>
  );
}
