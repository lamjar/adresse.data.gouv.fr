import React, {useState} from 'react'
import {User, Home} from 'react-feather'

import Button from '../button'
import YesNo from './yes-no'

const Contact = () => {
  const [isCitoyen, setIsCitoyen] = useState(false)
  const [isCommune, setIsCommune] = useState(false)

  const reset = () => {
    setIsCitoyen(false)
    setIsCommune(false)
  }

  return (
    <div className='container'>
      {(!isCommune && !isCitoyen) && (
        <div>
          <h4>Je suis :</h4>
          <Button onClick={() => setIsCitoyen(!isCitoyen)} ><span className='butt'><User /></span> Un Citoyen</Button>
          <Button onClick={() => setIsCommune(!isCommune)} ><span className='butt'><Home /></span> Une Commune</Button>
        </div>
      )}

      {isCitoyen && (
        <YesNo question={<h4>Vous avez un problème avec votre adresse ?</h4>}>
          <div>
            <h4>Merci de consulter la mairie de votre commune afin qu‘elle crée une Base d‘Adresse Locale</h4>
            <p>Elle pourra utiliser notre outil.</p>
          </div>
          <Button style={{marginTop: 45}} onClick={reset}>Reset</Button>
        </YesNo>
      )}

      {isCommune && (
        <YesNo question={<h4>Avez vous déjà une BAL ?</h4>}>
          <YesNo question={<h4>Avez-vous besoin d‘aide pour utiliser l‘éditeur ?</h4>}>
            <YesNo question={<h4>Avez-vous consulté la documentation ?</h4>}>
              <a>MailTo</a>
              <a>Lien vers la documentation</a>
            </YesNo>
            <YesNo question={<h4>Vous avez un probmème avec France Connect ?</h4>}>
              <a>Explications rassurantes</a>
              <a>MailTo</a>
            </YesNo>
          </YesNo>
          <YesNo question={<h4>Le Prefet ou un Citoyen vous a demandé de créer ou mettre à jour une BAL ?</h4>}>
            <a>Liens vers la FAQ</a>
            <a>MailTo</a>
          </YesNo>
        </YesNo>
      )}

      {(isCitoyen || isCommune) && (
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
