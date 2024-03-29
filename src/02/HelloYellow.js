import styles from './HelloYellow.module.css';
import { GiTaurus } from "react-icons/gi";
// import taurusimg from "./taurusimg.png"

const st = {
    color :'black'}

export default function HelloYellow() {
  return (
      <>
      <h1 className={styles.ch1}>황소자리<GiTaurus/>
      </h1>
      {/* <img src={taurusimg} alt="황소자리 이미지" /> */}
      </>
    // 인라인스타일이 모듈보다 먼저 먹힘   
    // 모듈css는 일반css보다 먼저 먹힘
  )
}
