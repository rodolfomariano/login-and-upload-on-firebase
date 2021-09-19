import { ChangeEvent, useEffect, useState } from 'react'
import { useSession } from "next-auth/client"
import { useRouter } from 'next/dist/client/router'

import firebase from '../../../services/firebase'

import { TopBar } from '../../../components/TopBar'
import { NavBar } from '../../../components/NavBar'

import styles from './styles.module.scss'

export default function Home() {
  const [session, loading] = useSession()
  const [fileData, setFileData] = useState({})
  const [fileName, setFileName] = useState('')
  const [fileSize, setFileSize] = useState(0)

  const [progressTransfer, setProgressTransfer] = useState(0)


  const router = useRouter()

  function handleChangeFile(event: ChangeEvent<HTMLInputElement>) {
    setProgressTransfer(0)

    let bucketName = 'data'
    const userInfo = session?.user?.email



    if (event.target.files) {
      setFileData(event.target.files[0])

      const storageRef2 = firebase.storage()

      if (event.target.files[0]) {
        let file = event.target.files[0]

        const uploadTask = storageRef2.ref(`${bucketName}/${userInfo}/${file.name}`)
          .put(file)

        setFileSize(file.size)

        uploadTask.on("state_changed", function (snapshot) {
          let progress = (snapshot.bytesTransferred * 100 / snapshot.totalBytes)
          let progressFormatted = progress.toFixed(0)
          setProgressTransfer(Number(progressFormatted))

        }, function (error) {
          console.log(error)

        }, function () {
          setFileData({})
          setProgressTransfer(0)
          setFileSize(0)

          console.log('Upload success')
        })
      }
    }

  }



  useEffect(() => {
    if (!fileData) {
      setProgressTransfer(0)
      setFileName('')
      setFileSize(0)
    }
  }, [fileData])

  useEffect(() => {
    console.log(progressTransfer)
  }, [progressTransfer])


  useEffect(() => {
    !session && router.push('/')
  }, [session, router])

  return (
    <div className={styles.container}>
      <TopBar />

      <div className={styles.contentContainer}>
        <NavBar />
        <div className={styles.content}>
          <h1 className={styles.title}>Home</h1>


          <div>
            <input type="file" onChange={(event) => handleChangeFile(event)} />
            <span>{fileSize > 0 && fileSize}</span>
            <progress max="100" value={progressTransfer} />
            <span>{fileSize > 0 && progressTransfer}</span>
          </div>

          <div>
            <h5>Transferencia recente</h5>


          </div>

        </div>

      </div>


    </div>
  )
}