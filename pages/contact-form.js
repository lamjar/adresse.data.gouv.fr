import React from 'react'
import {AtSign} from 'react-feather'

import Page from '../layouts/main'
import Section from '../components/section'
import Head from '../components/head'
import Contact from '../components/contact'

export default () => (
  <Page>
    <Head icon={<AtSign size={56} />} title='Formulaire de contact' />
    <Section background='grey' title='Vous êtes perdu ?'>
      <Contact />
    </Section>
  </Page>
)
