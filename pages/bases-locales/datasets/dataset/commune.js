import React from 'react'
import PropTypes from 'prop-types'

import {getCommune, getDataset} from '../../../../lib/bal/api'

import Page from '../../../../layouts/main'
import withErrors from '../../../../components/hoc/with-errors'

import Commune from '../../../../components/bases-locales/bases-adresse-locales/dataset/commune'

const CommunePage = ({commune, dataset}) => {
  const description = `${commune.nom} - ${commune.code}`

  return (
    <Page title={`Commune de ${commune.nom}`} description={description}>
      <Commune commune={commune} dataset={dataset} />
    </Page>
  )
}

CommunePage.propTypes = {
  commune: PropTypes.object.isRequired,
  dataset: PropTypes.object.isRequired
}

CommunePage.getInitialProps = async ({query}) => {
  const {id, codeCommune} = query
  const dataset = await getDataset(id)
  const commune = await getCommune(id, codeCommune)
  return {
    dataset,
    commune
  }
}

export default withErrors(CommunePage)
