import Vue from 'vue'
import { mount } from 'vue-test-utils'

import VueTree from '@/index'

describe('Basics', () => {
  it('should disable node controls when on leaves', () => {
    const propsData = {
      value: {
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
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(10)
    expect(wrapper.text()).toContain('Test')
    expect(wrapper.text()).toContain('Cat #1')
    expect(wrapper.text()).toContain('Cat #2')
    expect(wrapper.text()).toContain('#4')
    expect(wrapper.text()).toContain('#A')
  })

  it('should handle data provided with :label="[function]"', () => {
    const propsData = {
      label: (parent) => parent.title ? parent.title : parent.label,
      value: {
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
