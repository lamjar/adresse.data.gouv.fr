import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

const Questions = ({question, responses, handleResponse}) => {
  return (
    <div>
      <div><h4>{question}</h4></div>
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

Questions.propTypes = {
  responses: PropTypes.node.isRequired,
  question: PropTypes.string,
  handleResponse: PropTypes.func.isRequired
}

Questions.defaultProps = {
  question: null
}

export default Questions
