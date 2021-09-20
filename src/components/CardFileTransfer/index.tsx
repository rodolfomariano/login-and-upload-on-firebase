import styles from './styles.module.scss'

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { GiCheckMark } from "react-icons/gi"

interface CardFileTransferProps {
  title: string
  size: number
  percentage: number
}

export function CardFileTransfer({ title, size, percentage }: CardFileTransferProps) {

  return (
    <div className={styles.container}>
      <span className={styles.titleOfFile}>
        {title.length < 20
          ? title
          : `${title.substr(0, 17)}...`
        }</span>
      <span className={styles.sizeOfFile}>
        {`${(size / (size < 999999 ? 1000 : 1000000)).toFixed(2)} ${size < 999999 ? 'kB' : 'MB'}`}
      </span>

      {
        percentage >= 100
          ? (
            <div className={styles.successProgress}>
              <GiCheckMark size={20} />
            </div>
          )
          : (
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className={styles.circularProgress}
              styles={buildStyles({
                pathColor: '#156B39',
                textColor: '#156B39'
              })}
            />
          )
      }



    </div>
  )
}