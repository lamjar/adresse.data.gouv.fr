import React, {useState} from 'react'
import {User, Home} from 'react-feather'

import Button from '../button'
import YesNo from './yes-no'

const Contact = () => {
  const [user, setUser] = useState(null)

  const responses = [
    {label: 'Je suis un Citoyen', value: 'citoyen'},
    {label: 'Je suis une Commune', value: 'commune'},
    {label: 'autre label', value: 'autre value'}
  ]

  const question = 'Ceci est une question'

  const reset = () => {
    setUser(false)
  }

  console.log(user)

  return (
    <div className='container'>
      {!user && (
        <YesNo question={question} handleResponse={setUser} responses={responses} />
      )}

      {user === 'citoyen' && (
        // <YesNo question='Vous avez un problème avec votre adresse ?'>
        //   <div>
        //     <h4>Merci de consulter la mairie de votre commune afin qu‘elle crée une Base d‘Adresse Locale</h4>
        //     <p>Elle pourra utiliser notre outil.</p>
        //   </div>
        //   <Button style={{marginTop: 45}} onClick={reset}>Reset</Button>
        // </YesNo>
        <div>Citoyen</div>
      )}

      {user === 'commune' && (
        // <YesNo question='Avez vous déjà une BAL ?'>
        //   <YesNo question='Avez-vous besoin d‘aide pour utiliser l‘éditeur ?'>
        //     <YesNo question='Avez-vous consulté la documentation ?'>
        //       <a>MailTo</a>
        //       <a>Lien vers la documentation</a>
        //     </YesNo>
        //     <YesNo question='Vous avez un probmème avec France Connect ?'>
        //       <a>Explications rassurantes</a>
        //       <a>MailTo</a>
        //     </YesNo>
        //   </YesNo>
        //   <YesNo question='Le Prefet ou un Citoyen vous a demandé de créer ou mettre à jour une BAL ?'>
        //     <a>Liens vers la FAQ</a>
        //     <a>MailTo</a>
        //   </YesNo>
        // </YesNo>
        <div>Commune</div>
      )}

      {user && (
        <Button className='butt' onClick={reset}>Reset</Button>
      )}

      <style jsx>{`
        .container {
          text-align: center;
          margin-top: 25px;
        }

        .butt {
          vertical-align: sub;
          padding-right: 5px;
        }

        h5 {
          padding-top: 15px;
        }
      `}</style>
    </div>
  )
}

export default Contact
