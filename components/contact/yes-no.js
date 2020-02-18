import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

const YesNo = ({children, question}) => {
  const [yes, setYes] = useState(false)
  const [no, setNo] = useState(false)

  const handleYes = () => {
    setYes(true)
  }

  const handleNo = () => {
    setNo(true)
  }

  const reset = () => {
    setYes(false)
    setNo(false)
  }

  return (
    <div>
      {!yes && !no && (
        <div>
          {question && <div>{question}</div>}
          <Button onClick={handleYes}>Oui</Button>
          <Button onClick={handleNo}>Non</Button>
        </div>
      )}
      {(yes || no) && <Button onClick={reset}>Retour</Button>}
      {yes && (children[0] || children)}
      {no && children[1]}
    </div>
  )
}

YesNo.propTypes = {
  children: PropTypes.node.isRequired,
  question: PropTypes.string
}

YesNo.defaultProps = {
  question: null
}

export default YesNo
