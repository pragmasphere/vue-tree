import { mount } from 'vue-test-utils'

import VueTree from '@/index'

describe('Basics', () => {
  it('should disable controls and children on leaf nodes', () => {
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
            label: 'Cat #2', leaf: true, children: [
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
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(7)
    expect(wrapper.text()).toContain('Test')
    expect(wrapper.text()).toContain('Cat #1')
    expect(wrapper.text()).toContain('Cat #2')
    expect(wrapper.text()).toContain('#4')
    expect(wrapper.text()).not.toContain('#A')
  })
})
