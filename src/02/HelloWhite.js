import styles from './HelloWhite.module.css';
import { GiFallingStar } from "react-icons/gi";

export default function HelloWhite() {
  return (
      <h1 className={styles.ch1}><GiFallingStar/>오늘의 별자리 운세<GiFallingStar/></h1>
  )
}
