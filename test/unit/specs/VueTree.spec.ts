import Vue from 'vue'
import { mount } from 'vue-test-utils'

import VueTree from '@/index'

describe('Vue Tree', () => {
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

  it('should handle data provided in :value="data"', () => {
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

  it('should handle data provided with children="nodes"', () => {
    const propsData = {
      children: 'nodes',
      value: {
        label: 'Test',
        nodes: [{
          label: 'Cat #1', nodes: [
            { label: '#1' },
            { label: '#2' },
            { label: '#3' },
            { label: '#4' }
          ]
        },
          {
            label: 'Cat #2', nodes: [
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

  it('should handle data provided with :children="[function]"', () => {
    const propsData = {
      value: { label: 'Test' },
      children: (parent) => {
        if (parent.label === 'Test') {
          return [{ label: 'Cat #1' }, { label: 'Cat #2' }]
        } else if (parent.label === 'Cat #1') {
          return [
            { label: '#1' },
            { label: '#2' },
            { label: '#3' },
            { label: '#4' }
          ]
        } else if (parent.label === 'Cat #2') {
          return [
            { label: '#A' },
            { label: '#B' },
            { label: '#C' }
          ]
        }
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

  it('should handle data provided with :children="[function]" and :children-async="true"', () => {
    const propsData = {
      value: { label: 'Test' },
      childrenAsync: true,
      children: (parent) => {
        if (parent.label === 'Test') {
          return Promise.resolve([{ label: 'Cat #1' }, { label: 'Cat #2' }])
        } else if (parent.label === 'Cat #1') {
          return Promise.resolve([
            { label: '#1' },
            { label: '#2' },
            { label: '#3' },
            { label: '#4' }
          ])
        } else if (parent.label === 'Cat #2') {
          return Promise.resolve([
            { label: '#A' },
            { label: '#B' },
            { label: '#C' }
          ])
        }
      }
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    return Vue.nextTick().then(Vue.nextTick).then(Vue.nextTick).then(Vue.nextTick).then(function () {
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

  it('should not display root TreeNode with :root-hidden="true"', () => {
    const propsData = {
      rootHidden: true
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.contains('.vue-tree__tree-node.vue-tree__root > .vue-tree__tree-node-content')).toBe(false)
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(8)
    expect(wrapper.text()).not.toContain('Vue Tree')
    expect(wrapper.text()).toContain('Category #1')
    expect(wrapper.text()).toContain('Category #2')
    expect(wrapper.text()).toContain('Item #A')
  })
})
