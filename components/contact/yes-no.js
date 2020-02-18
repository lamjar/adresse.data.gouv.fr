import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

const YesNo = ({question, responses, handleResponse}) => {
  return (
    <div>
      <div>{question}</div>
      {responses.map(response => (
        <Button
          key={response.label}
          onClick={() => handleResponse(response.value)}
        >
          {response.label}
        </Button>
      ))}
    </div>
  )
}

YesNo.propTypes = {
  responses: PropTypes.node.isRequired,
  question: PropTypes.string,
  handleResponse: PropTypes.func.isRequired
}

YesNo.defaultProps = {
  question: null
}

export default YesNo
