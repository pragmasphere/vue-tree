import Vue from 'vue'
import { mount } from 'vue-test-utils'

import VueTree from '@/index'
import { TreeNode } from '@/vue-tree-types'

describe('Opened', () => {
  it('should open a closed node on click', () => {
    const propsData = {
      opened: 'opened',
      data: {
        label: 'Test',
        children: [{
          label: 'Cat 1', children: [
            { label: '#1' },
            { label: '#2' },
            { label: '#3' },
            { label: '#4' }
          ]
        },
          {
            label: 'Cat 2', opened: false, children: [
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
    expect(wrapper.text()).toContain('Cat 1')
    expect(wrapper.text()).toContain('Cat 2')
    expect(wrapper.text()).toContain('#4')
    expect(wrapper.text()).not.toContain('#A')

    wrapper.find('.vue-tree__tree-node-handle--closed').trigger('click')
    expect(wrapper.text()).toContain('#A')
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(10)

  })

  it('should close an opened node on click', () => {
    const propsData = {
      opened: 'opened',
      data: {
        label: 'Test',
        opened: true,
        children: [{
          label: 'Cat 1', opened: true, children: [
            { label: '#1' },
            { label: '#2' },
            { label: '#3' },
            { label: '#4' }
          ]
        },
          {
            label: 'Cat 2', opened: true, children: [
              { label: '#A' },
              { label: '#B' },
              { label: '#C' }
            ]
          }]
      }
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    wrapper.findAll('.vue-tree__tree-node-handle--opened').at(1).trigger('click')
    expect(wrapper.text()).not.toContain('#1')
    expect(wrapper.text()).toContain('#A')
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(6)

    expect(wrapper.findAll('.vue-tree__tree-node-handle--closed')).toHaveLength(1)
  })

  it('should get and set "opened" property into data when opened="opened"', () => {
    const propsData = {
      opened: 'opened',
      data: {
        label: 'Test',
        opened: true,
        children: [{
          label: 'Cat 1', opened: true, children: [
            { label: '#1' },
            { label: '#2' },
            { label: '#3' },
            { label: '#4' }
          ]
        },
          {
            label: 'Cat 2', opened: true, children: [
              { label: '#A' },
              { label: '#B' },
              { label: '#C' }
            ]
          }]
      }
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    wrapper.findAll('.vue-tree__tree-node-handle--opened').at(1).trigger('click')
    expect(wrapper.text()).not.toContain('#1')
    expect(wrapper.text()).toContain('#A')
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(6)

    expect(wrapper.findAll('.vue-tree__tree-node-handle--closed')).toHaveLength(1)

    return Vue.nextTick().then(() => {
      expect(wrapper.vm.$props.data.children[0].opened).toBeFalsy()

      wrapper.find('.vue-tree__tree-node-handle--closed').trigger('click')

      expect(wrapper.text()).toContain('#1')
      expect(wrapper.text()).toContain('#A')
      expect(wrapper.findAll('.vue-tree__tree-node-handle--closed')).toHaveLength(0)

      return Vue.nextTick()
    }).then(() => {
      expect(wrapper.vm.$props.data.children[0].opened).toBeTruthy()
    })
  })

  it('should get and set opened property into data when :opened="{get: ..., set: ...}"', () => {
    const propsData = {
      opened: {
        get: (data: TreeNode) => data.opened,
        set: (data: TreeNode, value: boolean) => data.opened = value
      },
      data: {
        label: 'Test',
        opened: true,
        children: [{
          label: 'Cat 1', opened: true, children: [
            { label: '#1' },
            { label: '#2' },
            { label: '#3' },
            { label: '#4' }
          ]
        },
          {
            label: 'Cat 2', opened: true, children: [
              { label: '#A' },
              { label: '#B' },
              { label: '#C' }
            ]
          }]
      }
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    wrapper.findAll('.vue-tree__tree-node-handle--opened').at(1).trigger('click')
    expect(wrapper.text()).not.toContain('#1')
    expect(wrapper.text()).toContain('#A')
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(6)

    expect(wrapper.findAll('.vue-tree__tree-node-handle--closed')).toHaveLength(1)

    return Vue.nextTick().then(() => {
      expect(wrapper.vm.$props.data.children[0].opened).toBeFalsy()

      wrapper.find('.vue-tree__tree-node-handle--closed').trigger('click')

      expect(wrapper.text()).toContain('#1')
      expect(wrapper.text()).toContain('#A')
      expect(wrapper.findAll('.vue-tree__tree-node-handle--closed')).toHaveLength(0)

      return Vue.nextTick()
    }).then(() => {
      expect(wrapper.vm.$props.data.children[0].opened).toBeTruthy()
    })
  })

  it('should get opened property into data when :opened="[function]"', () => {
    const propsData = {
      opened: (data: TreeNode) => { return data.opened },
      data: {
        label: 'Test',
        opened: true,
        children: [{
          label: 'Cat 1', opened: false, children: [
            { label: '#1' },
            { label: '#2' },
            { label: '#3' },
            { label: '#4' }
          ]
        },
          {
            label: 'Cat 2', opened: true, children: [
              { label: '#A' },
              { label: '#B' },
              { label: '#C' }
            ]
          }]
      }
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.text()).not.toContain('#1')
    expect(wrapper.text()).toContain('#A')
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(6)

    expect(wrapper.findAll('.vue-tree__tree-node-handle--closed')).toHaveLength(1)
  })
})
