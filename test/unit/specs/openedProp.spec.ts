import Vue from 'vue'

import { mount } from 'vue-test-utils'

import VueTree from '@/index'
import { TreeNode } from '@/vue-tree-types'
import { visibleText, visibleTreeNodes } from './utils'
import { VueTreeValueChangedEvent } from '@/events'

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
    expect(visibleText(wrapper)).toContain('Test')
    expect(visibleText(wrapper)).toContain('Cat 1')
    expect(visibleText(wrapper)).toContain('Cat 2')
    expect(visibleText(wrapper)).toContain('#4')
    expect(visibleText(wrapper)).not.toContain('#A')

    let visibleNodes = visibleTreeNodes(wrapper)
    expect(visibleNodes).toHaveLength(7)

    wrapper.find('.vue-tree__tree-node-handle--closed').trigger('click')
    expect(visibleText(wrapper)).toContain('#A')

    visibleNodes = visibleTreeNodes(wrapper)
    expect(visibleNodes).toHaveLength(10)
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

    let visibleNodes = visibleTreeNodes(wrapper)
    expect(visibleNodes).toHaveLength(10)

    wrapper.findAll('.vue-tree__tree-node-handle--opened').at(1).trigger('click')
    expect(visibleText(wrapper)).not.toContain('#1')
    expect(visibleText(wrapper)).toContain('#A')

    visibleNodes = visibleTreeNodes(wrapper)
    expect(visibleNodes).toHaveLength(6)

    expect(wrapper.findAll('.vue-tree__tree-node-handle--closed')).toHaveLength(1)
  })

  it('should emit opened events properly', () => {
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

    const events: VueTreeValueChangedEvent<boolean>[] = []
    const listeners = {
      opened: (e: VueTreeValueChangedEvent<boolean>) => events.push(e)
    }

    const wrapper = mount(VueTree, { propsData, listeners })
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.contains('.vue-tree__tree-node.vue-tree__root > .vue-tree__tree-node-content')).toBe(true)
    const node = wrapper.find('.vue-tree__tree-node-handle--closed')
    node.trigger('click')

    expect(events).toHaveLength(1)
    expect(events[0].type).toEqual('opened')
    expect(events[0].vm.$props.data.label).toEqual('Cat 2')
    expect(events[0].data.label).toEqual('Cat 2')
    expect(events[0].oldValue).toBeFalsy()
    expect(events[0].value).toBeTruthy()

    node.trigger('click')

    expect(events).toHaveLength(2)
    expect(events[1].type).toEqual('opened')
    expect(events[1].vm.$props.data.label).toEqual('Cat 2')
    expect(events[1].data.label).toEqual('Cat 2')
    expect(events[1].oldValue).toBeTruthy()
    expect(events[1].value).toBeFalsy()
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

    expect(visibleText(wrapper)).not.toContain('#1')
    expect(visibleText(wrapper)).toContain('#A')

    let visibleNodes = visibleTreeNodes(wrapper)
    expect(visibleNodes).toHaveLength(6)

    expect(wrapper.findAll('.vue-tree__tree-node-handle--closed')).toHaveLength(1)

    expect(wrapper.vm.$props.data.children[0].opened).toBeFalsy()

    wrapper.find('.vue-tree__tree-node-handle--closed').trigger('click')

    expect(visibleText(wrapper)).toContain('#1')
    expect(visibleText(wrapper)).toContain('#A')

    expect(wrapper.vm.$props.data.children[0].opened).toBeTruthy()
  })

  it('should get and set opened property into data when :opened="{get: ..., set: ...}"', () => {
    const propsData = {
      opened: {
        get: (data: TreeNode) => data.opened,
        set: (data: TreeNode, value: boolean) => Vue.set(data, 'opened', value)
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

    let visibleNodes = visibleTreeNodes(wrapper)
    expect(visibleNodes).toHaveLength(6)

    expect(visibleText(wrapper)).not.toContain('#1')
    expect(visibleText(wrapper)).toContain('#A')

    expect(wrapper.findAll('.vue-tree__tree-node-handle--closed')).toHaveLength(1)

    expect(wrapper.vm.$props.data.children[0].opened).toBeFalsy()

    wrapper.find('.vue-tree__tree-node-handle--closed').trigger('click')

    expect(visibleText(wrapper)).toContain('#1')
    expect(visibleText(wrapper)).toContain('#A')
    expect(wrapper.findAll('.vue-tree__tree-node-handle--closed')).toHaveLength(0)

    expect(wrapper.vm.$props.data.children[0].opened).toBeTruthy()
  })

  it('should get opened property into data when :opened="[function]"', () => {
    const propsData = {
      opened: (data: TreeNode) => {
        return data.opened
      },
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

    expect(visibleText(wrapper)).not.toContain('#1')
    expect(visibleText(wrapper)).toContain('#A')

    let visibleNodes = visibleTreeNodes(wrapper)
    expect(visibleNodes).toHaveLength(6)

    expect(wrapper.findAll('.vue-tree__tree-node-handle--closed')).toHaveLength(1)
  })
})
