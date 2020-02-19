import React, {useState} from 'react'

import Button from '../button'

const MailTo = () => {
  const [mail, setMail] = useState(null)
  const [subject, setSubject] = useState(null)
  const [message, setMessage] = useState(null)
  const mailTo = 'mailto:' + mail + '?subject=' + subject + '&body=' + (message ? message.replace(/\n/g, '%0A') : '')

  const handleMail = e => {
    setMail(e.target.value)
  }

  const handleSubject = e => {
    setSubject(e.target.value)
  }

  const handleMessage = e => {
    setMessage(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    window.location.href = mailTo
    setMail(null)
    setSubject(null)
    setMessage(null)
  }

  return (
    <div className='parent-container'>
      <h3>
        <u>Envoyer un message :</u>
      </h3>
      <div className='container'>
        <div>
          <form onSubmit={handleSubmit}>
            <p>Votre adresse électronique :</p>
            <input type='email' onChange={handleMail} />
            <p>Sujet de votre message :</p>
            <input type='text' onChange={handleSubject} />
            <p>Votre message :</p>
            <textarea cols='55' rows='5' type='text' onChange={handleMessage} />
            <div>
              <br /><Button type='submit'>Envoyer</Button>
            </div>
          </form>
        </div>
        <div>
          <div className='preview'>
            {mail && (
              <div>
                <p><b>Email :</b></p>
                <p>{mail}</p>
              </div>
            )}

            {subject && (
              <div>
                <p><b>Sujet:</b></p>
                <p>{subject}</p>
              </div>
            )}

            {message && (
              <div>
                <p><b>Message: </b></p>
                <p>{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .parent-container {
          position: relative;
          width: 100%;
        }

        .preview {
          height: 80%;
          margin: 35px;
          padding: 15px;
          border: 1px solid lightgrey;
        }

        .container {
          width: 100%;
          display: grid;
          grid-template-columns: 50% 50%;
        }

        @media (max-width: 700px) {
          .container {
            grid-template-columns: 100%;
          }

          .preview {
            display: none;
          }
    `}</style>
    </div>
  )
}

export default MailTo
