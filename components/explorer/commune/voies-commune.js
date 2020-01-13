import React from 'react'
import PropTypes from 'prop-types'
import {useRouter} from 'next/router'

import withFetch from '../../hoc/with-fetch'

import VoiesTable from './voies-table'

const VoiesCommune = ({voies}) => {
  const router = useRouter()

  const handleSelect = voie => {
    const {query} = router
    router.push(
      `/explore/commune/voie?codeCommune=${query.codeCommune}&idVoie=${voie.idVoie}`,
      `/explore/commune/${query.codeCommune}/voie/${voie.idVoie}`
    )
  }

  return (
    <div className='voies'>
      <VoiesTable voies={voies} onSelect={handleSelect} />
      <style jsx>{`
        .voies {
          margin-top: 2em;
        }
        `}</style>
    </div>
  )
}

VoiesCommune.propTypes = {
  voies: PropTypes.array
}

VoiesCommune.defaultProps = {
  voies: []
}

export default withFetch(data => ({
  voies: data.voies
}))(VoiesCommune)
