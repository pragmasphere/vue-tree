import { mount } from 'vue-test-utils'

import VueTree from '@/index'

describe('Basics', () => {
  it('should render the default tree when no property is given', () => {
    const wrapper = mount(VueTree)
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.contains('.vue-tree__tree-node.vue-tree__root > .vue-tree__tree-node-content')).toBe(true)
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(9)
    expect(wrapper.text()).toContain('Vue Tree')
    expect(wrapper.text()).toContain('Category #1')
    expect(wrapper.text()).toContain('Category #2')
    expect(wrapper.text()).toContain('Item #A')
  })

  it('should handle data provided in :data="data"', () => {
    const propsData = {
      data: {
        label: 'Test',
        children: [{
          label: 'Cat #1', children: [
            { label: '#1' },
            { label: '#2' },
            { label: '#3' },
            { label: '#4' }
          ]
        },
          {
            label: 'Cat #2', children: [
              { label: '#A' },
              { label: '#B' },
              { label: '#C' }
            ]
          }]
      }
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.contains('.vue-tree__tree-node.vue-tree__root > .vue-tree__tree-node-content')).toBe(true)
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(10)
    expect(wrapper.text()).not.toContain('Vue Tree')
    expect(wrapper.text()).not.toContain('Category #1')
    expect(wrapper.text()).not.toContain('Category #2')
    expect(wrapper.text()).not.toContain('Item #A')
    expect(wrapper.text()).toContain('Test')
    expect(wrapper.text()).toContain('Cat #1')
    expect(wrapper.text()).toContain('Cat #2')
    expect(wrapper.text()).toContain('#A')
  })

})
