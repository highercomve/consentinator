import React from 'react'
import { mount } from 'enzyme'
import Factory from '../factories/consent.factory'
import ConsentItem from '../../src/components/ConsentItem'

describe.only('Consent Item component', () => {
  it('If pass consent information render it', () => {
    const consent = Factory(true)
    const wrapper = mount(<ConsentItem {...consent} />)
    expect(wrapper.find('.consent-item__email')).toHaveText(consent.userEmail)
    expect(wrapper.find('.consent-item__name')).toHaveText(consent.userName)
    expect(wrapper.find('.consent-item__aggrements').children()).toHaveLength(consent.agreements.length)
  })
})
