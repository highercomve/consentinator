import React from 'react'
import { mount } from 'enzyme'
import ListPagination from '../../src/components/ListPagination'

describe('List Pagination component', () => {
  it('Render and disable first page and number 1', () => {
    const paginationData = {
      pageSize: 10,
      page: 1,
      total: 100
    }
    const changePage = jest.fn(({ pageSize, page }) => {
      paginationData.pageSize = pageSize
      paginationData.page = page
    })
    const wrapper = mount(<ListPagination {...paginationData} changePage={changePage} />)
    // debugger
    expect(wrapper.find('button.back-button')).toHaveText('arrow_back_ios')
    expect(wrapper.find('button.back-button')).toBeDisabled()
    expect(wrapper.find('button.forward-button')).toHaveText('arrow_forward_ios')
    expect(wrapper.find('button.goto-button')).toHaveLength(10)
  })

  it('If page is last disable forward', () => {
    const paginationData = {
      pageSize: 2,
      page: 2,
      total: 4
    }
    const changePage = jest.fn(({ pageSize, page }) => {
      paginationData.pageSize = pageSize
      paginationData.page = page
    })
    const wrapper = mount(<ListPagination {...paginationData} changePage={changePage} />)
    expect(wrapper.find('button.back-button')).toHaveText('arrow_back_ios')
    expect(wrapper.find('button.back-button')).not.toBeDisabled()
    expect(wrapper.find('button.forward-button')).toHaveText('arrow_forward_ios')
    expect(wrapper.find('button.forward-button')).toBeDisabled()
    expect(wrapper.find('button.goto-button')).toHaveLength(2)
  })

  it('Mark current page as disabled', () => {
    const paginationData = {
      pageSize: 2,
      page: 1,
      total: 4
    }
    const changePage = jest.fn(({ pageSize, page }) => {
      paginationData.pageSize = pageSize
      paginationData.page = page
    })
    const wrapper = mount(<ListPagination {...paginationData} changePage={changePage} />)
    expect(wrapper.find('button.back-button')).toHaveText('arrow_back_ios')
    expect(wrapper.find('button.back-button')).toBeDisabled()
    expect(wrapper.find('button.forward-button')).toHaveText('arrow_forward_ios')
    expect(wrapper.find('button.forward-button')).not.toBeDisabled()
    expect(wrapper.find('button.goto-button')).toHaveLength(2)
    expect(wrapper.find('button.goto-page-1')).toBeDisabled()

    wrapper.find('button.forward-button').simulate('click')
    wrapper.setProps({
      ...paginationData,
      changePage
    })
    wrapper.render()
    expect(wrapper.find('button.back-button')).not.toBeDisabled()
    expect(wrapper.find('button.forward-button')).toBeDisabled()
    expect(wrapper.find('button.goto-page-1')).not.toBeDisabled()
    expect(wrapper.find('button.goto-page-2')).toBeDisabled()
  })
})
