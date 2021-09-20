import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSession } from "next-auth/client"
import { useRouter } from 'next/dist/client/router'

import firebase from '../../../services/firebase'

import { TopBar } from '../../../components/TopBar'
import { NavBar } from '../../../components/NavBar'

import styles from './styles.module.scss'
import { CardFileTransfer } from '../../../components/CardFileTransfer'

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

        setFileSize(file.size)
        setFileName(file.name)

        const uploadTask = storageRef2.ref(`${bucketName}/${userInfo}/${file.name}`)
          .put(file)


        uploadTask.on("state_changed", function (snapshot) {
          let progress = (snapshot.bytesTransferred * 100 / snapshot.totalBytes)
          let progressFormatted = progress.toFixed(0)
          setProgressTransfer(Number(progressFormatted))

        }, function (error) {
          console.log(error)

        }, function () {
          // setFileData({})
          // setProgressTransfer(0)
          // setFileSize(0)
          // setFileName('')

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

  console.log(fileName)

  return (
    <div className={styles.container}>
      <TopBar />

      <div className={styles.contentContainer}>
        <NavBar />
        <div className={styles.content}>
          <h1 className={styles.title}>Home</h1>


          <form className={styles.fileForm}>
            <label htmlFor="file" className={styles.fileLabel}>Selecione o arquivo</label> <br />

            <input
              className={styles.fileInput}
              type="file"
              id="file"
              onChange={(event) => handleChangeFile(event)}
            />
          </form>
          <div className={styles.fileDataContainer}>
            {fileSize > 0 && (
              <>
                {/* <span>{fileName}</span> <br />
                <span>{`${(fileSize / (fileSize < 999999 ? 1000 : 1000000)).toFixed(2)} ${fileSize < 999999 ? 'kB' : 'MB'}`}</span>
                <progress max="100" value={progressTransfer} />
                <span>{`${progressTransfer}%`}</span> */}
              </>
            )
            }

            <CardFileTransfer
              title={fileName}
              size={fileSize}
              percentage={progressTransfer}
            />

          </div>


          <div>
            <h5>Transferencia recente</h5>


          </div>

        </div>

      </div>


    </div>
  )
}