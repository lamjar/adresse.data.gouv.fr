// eslint-disable-next-line import/no-unassigned-import
import 'regenerator-runtime/runtime'
import React from 'react'
import {validate} from '@etalab/bal'

import theme from '../../styles/theme'

import Loader from '../loader'
import Section from '../section'
import Holder from '../csv/holder'
import Fields from './fields'
import CsvMeta from './csv-meta'
import Rows from './rows'

function getFileExtension(fileName) {
  const dotPosition = fileName.lastIndexOf('.')
  if (dotPosition > 0 && dotPosition < fileName.length - 1) {
    return fileName.substr(dotPosition + 1).toLowerCase()
  }
  return null
}

class BALValidator extends React.Component {
  constructor() {
    super()
    this.state = {
      error: null,
      file: null,
      report: null,
      inProgress: false
    }

    this.handleFileDrop = this.handleFileDrop.bind(this)
    this.parseFile = this.parseFile.bind(this)
  }

  resetState() {
    this.setState({
      file: null,
      error: null,
      report: null,
      inProgress: false
    })
  }

  handleFileDrop(fileList) {
    const file = fileList[0] // Keep only the first file
    const fileExtension = getFileExtension(file.name)

    this.resetState()

    if (!fileExtension || fileExtension !== 'csv') {
      this.setState({
        error: `Ce type de fichier n’est pas supporté. Vous devez déposer un fichier *.csv.`
      })
    } else if (file.size > 100 * 1024 * 1024) {
      this.setState({
        error: 'Ce fichier est trop volumineux. Vous devez déposer un fichier de moins de 100 Mo.'
      })
    } else {
      this.setState({
        file,
        error: null
      }, this.parseFile)
    }
  }

  parseFile() {
    const {file} = this.state

    this.setState({inProgress: true})
    validate(file)
      .then(report => this.setState({report, inProgress: false}))
      .catch(err => this.setState({error: err, inProgress: false}))
  }

  render() {
    const {error, file, report, inProgress} = this.state
    const {knownFields, unknownFields, aliasedFields, fileValidation, rowsWithErrors, parseMeta, rowsErrorsCount} = report || {}

    return (
      <div>
        <Section>
          <div>
            <h2>Choisir un fichier</h2>
            <Holder placeholder='Sélectionner ou glisser ici votre fichier BAL au format CSV (maximum 100 Mo)' file={file} onDrop={this.handleFileDrop} />
            <div className='error'>{error}</div>
          </div>
        </Section>

        {inProgress &&
        <div className='centered'>
          <h4>Analyse en cours…</h4>
          <Loader />
        </div>}

        {report && <Section title='Analyse terminée !' background='grey'>
          <div>
            <div className='container'>
              {fileValidation &&
                <div>
                  <h3>Validation de la structure du fichier</h3>
                  <div className='items'>
                    <CsvMeta name='Encodage des caractères' value={fileValidation.encoding.value} isValid={fileValidation.encoding.isValid} />
                    <CsvMeta name='Délimiteur' value={fileValidation.delimiter.localName} isValid={fileValidation.delimiter.isValid} />
                    <CsvMeta name='Nombre de lignes' value={parseMeta.rowsCount} isValid />
                    <CsvMeta name='Séparateur de ligne' value={fileValidation.linebreak.value} isValid={fileValidation.linebreak.isValid} />
                  </div>
                </div>}
            </div>

            <div className='container'>
              <h3>Validation des champs</h3>
              <Rows rows={rowsWithErrors} rowsErrorsCount={rowsErrorsCount} />
            </div>

            <div className='container'>
              <h3>Champs existants</h3>
              <Fields found={knownFields} unknown={unknownFields} alias={aliasedFields} />
            </div>

          </div>
        </Section>}
        <style jsx>{`
          .container {
            margin: 2em 0;
            padding: 2em 1em;
            box-shadow: 0 1px 4px ${theme.boxShadow};
            background: ${theme.colors.white};
          }

          .items {
            margin-bottom: 2em;
            display: grid;
            grid-template-columns: repeat(auto-fit,minmax(210px,1fr));
            grid-gap: 2em 1em;
          }

          .error {
            color: red;
          }

          .centered {
            display: flex;
            align-items: center;
            justify-conten: center;
            flex-direction: column;
            margin: 1em 0 2em;
          }
        `}</style>
      </div>
    )
  }
}

export default BALValidator
