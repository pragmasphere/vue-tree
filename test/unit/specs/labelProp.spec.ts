import { mount } from 'vue-test-utils'

import VueTree from '@/index'

describe('Basics', () => {
  it('should handle data provided with label="title"', () => {
    const propsData = {
      label: 'title',
      data: {
        title: 'Test',
        children: [{
          title: 'Cat #1', children: [
            { title: '#1' },
            { title: '#2' },
            { title: '#3' },
            { title: '#4' }
          ]
        },
          {
            title: 'Cat #2', children: [
              { title: '#A' },
              { title: '#B' },
              { title: '#C' }
            ]
          }]
      }
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.contains('.vue-tree__tree-node.vue-tree__root > .vue-tree__tree-node-content')).toBe(true)
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(10)
    expect(wrapper.text()).toContain('Test')
    expect(wrapper.text()).toContain('Cat #1')
    expect(wrapper.text()).toContain('Cat #2')
    expect(wrapper.text()).toContain('#4')
    expect(wrapper.text()).toContain('#A')
  })

  it('should handle data provided with :label="[function]"', () => {
    const propsData = {
      label: (parent: any) => parent.title ? parent.title : parent.label,
      data: {
        title: 'Test',
        children: [{
          title: 'Cat #1', children: [
            { title: '#1' },
            { label: '#2' },
            { title: '#3' },
            { label: '#4' }
          ]
        },
          {
            label: 'Cat #2', children: [
              { title: '#A' },
              { label: '#B' },
              { title: '#C' }
            ]
          }]
      }
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.contains('.vue-tree__tree-node.vue-tree__root > .vue-tree__tree-node-content')).toBe(true)
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(10)
    expect(wrapper.text()).toContain('Test')
    expect(wrapper.text()).toContain('Cat #1')
    expect(wrapper.text()).toContain('Cat #2')
    expect(wrapper.text()).toContain('#4')
    expect(wrapper.text()).toContain('#A')
  })
})
