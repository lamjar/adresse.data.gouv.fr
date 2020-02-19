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
    if (mail && subject && message) {
      window.location.href = mailTo
      setMail(null)
      setSubject(null)
      setMessage(null)
    }
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
      </div>
      <style jsx>{`
        .parent-container {
          position: relative;
          width: 100%;
        }

        .container {
          width: 100%;
          display: grid;
          grid-template-columns: auto;
        }

        @media (max-width: 700px) {
          .container {
            grid-template-columns: 100%;
          }
    `}</style>
    </div>
  )
}

export default MailTo
