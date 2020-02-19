import React, {useState} from 'react'
import Button from '../button'
import Questions from './questions'
import MailTo from './mail-to'

const Contact = () => {
  const [user, setUser] = useState(null)
  const [hasBL, setHasBL] = useState(null)

  const question = {
    q1: 'Vous êtes :',
    q2: 'Avez-vous déjà une Base Adresse Locale ?'
  }

  const responses = {
    r1: [
      {label: 'Je suis un Citoyen', value: 'citoyen'},
      {label: 'Je suis une Commune', value: 'commune'}
    ],
    r2: [
      {label: 'Oui', value: 'hasBL'},
      {label: 'Non', value: 'noBL'}
    ],
    r3: [
      {label: 'J‘ai besoin d‘aide pour utiliser l‘éditeur', value: 'pbEditor'},
      {label: 'Je ne souhaite pas utiliser France Connect', value: 'pbFC'},
      {label: 'Autre...', value: 'autre'}
    ]
  }

  const reset = () => {
    setUser(null)
    setHasBL(null)
  }

  return (
    <div className='container'>
      {!user && (
        <Questions question={question.q1} handleResponse={setUser} responses={responses.r1} />
      )}

      {user === 'citoyen' && (
        <div className='grid-button'>
          <Button>Lien vers la Documentation</Button>
          <MailTo />
        </div>
      )}

      {(user === 'commune' && !hasBL) && (
        <Questions question={question.q2} handleResponse={setHasBL} responses={responses.r2} />
      )}

      {(user === 'commune' && hasBL === 'hasBL') && (
        <div className='grid-button'>
          <Button>J‘ai besoin d‘aide pour utiliser l‘éditeur BAL</Button>
          <Button>Je ne souhaite pas utiliser France Connect</Button>
          <Button>Autre chose...</Button>
        </div>
      )}

      {(user === 'commune' && hasBL === 'noBL') && (
        <div className='grid-button'>
          <Button>Doc Base Locale</Button>
          <Button>Editeur BAL</Button>
          <MailTo />
        </div>
      )}

      {user && (
        <Button style={{margin: 45}} onClick={reset}>Retour</Button>
      )}

      <style jsx>{`
        .container {
          text-align: center;
          margin-top: 25px;
        }

        .grid-button {
          display: grid;
          justify-items: center;
          grid-gap: 25px;
          grid-template-columns: repeat(auto-fit, minmax(auto));
        }

        h5 {
          padding-top: 15px;
        }
      `}</style>
    </div>
  )
}

export default Contact
