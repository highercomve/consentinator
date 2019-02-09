import React from 'react'
import { mount } from 'enzyme'
import Factory from '../factories/consent.factory'
import ConsentList from '../../src/components/ConsentList'

describe('Consent Item component', () => {
  it('Render a list of consents', () => {
    const consentList = [
      Factory(true),
      Factory(true),
      Factory(true),
      Factory(true)
    ]
    const wrapper = mount(<ConsentList consents={consentList} />)
    wrapper.find('.consent-list .consent-item').children()
    expect(wrapper.find('.consent-list__header th.consent-list__name-label')).toHaveText('Name')
    expect(wrapper.find('.consent-list__header th.consent-list__email-label')).toHaveText('Email')
    expect(wrapper.find('.consent-list__header th.consent-list__agreements-label')).toHaveText('Consent given for')
    expect(wrapper.find('.consent-list tr.consent-item')).toHaveLength(4)
  })
})
