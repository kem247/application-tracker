import React from 'react'
import {Card} from 'semantic-ui-react'

const items = [
  {
    header: 'Inclusion Cohort Spring 2020',
    description: 'Application for Inclusion Cohort Jan 2020',
    meta: 'Created at 1/30/2020'
  },
  {
    header: 'Inclusion Cohort Summer 2020',
    description: 'Application for Inclusion Cohort July 2020',
    meta: 'Created at 3/15/2020'
  },
  {
    header: 'Inclusion Cohort Winter 2020',
    description: 'Application for Inclusion Cohort November 2020',
    meta: 'Created at 4/15/2020'
  }
]

const ExistingForm = () => (
  <Card.Group className="formCard" centered items={items} />
)

export default ExistingForm
