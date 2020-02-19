import React from 'react'
import {AtSign} from 'react-feather'

import Page from '../layouts/main'
import Head from '../components/head'
import Contact from '../components/contact'

export default () => (
  <Page>
    <Head icon={<AtSign size={56} />} title='Formulaire de contact' />
    <Contact />
  </Page>
)
