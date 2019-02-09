import React from 'react' 
import { mount } from 'enzyme'
import Factory from '../factories/consent.factory'
import ConsentItem from '../../src/components/ConsentItem'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'

describe.only('Consent Item component', () => {
  it('If pass consent information render it', () => {
    const consent = Factory(true)
    const wrapper = mount(
      <Table>
        <TableBody>
          <ConsentItem {...consent} />
        </TableBody>
      </Table>
    )
    debugger
    expect(wrapper.find('td.consent-item__email')).toHaveText(consent.userEmail)
    expect(wrapper.find('td.consent-item__name')).toHaveText(consent.userName)
    expect(wrapper.find('td.consent-item__aggrements')).toHaveText(consent.agreements.join(', '))
  })
})
