import Vue from 'vue'

import { mount } from 'vue-test-utils'

import VueTree from '@/index'
import { TreeNode } from '@/vue-tree-types'
import { VueTreeValueChangedEvent } from '@/events'

describe('Selected', () => {
  it('should not display checked inputs when :selectable="false"', () => {
    const propsData = {
      selectable: false,
      selected: true,
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

    expect(wrapper.findAll('input.vue-tree__selected-checkbox')).toHaveLength(0)
  })

  it('should display checked and unchecked inputs node when selectable="selectable"', () => {
    const propsData = {
      selectable: 'selectable',
      selected: true,
      data: {
        label: 'Test',
        children: [{
          label: 'Cat #1', children: [
            { label: '#1' },
            { label: '#2' },
            { label: '#3', selectable: true },
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

    let input = wrapper.find('input.vue-tree__selected-checkbox')
    expect(input.element.parentElement!.parentElement!.parentElement!.textContent).toEqual('✖    #3')
    expect((input.element as HTMLInputElement).checked).toBeTruthy()
  })

  it('should display checked inputs when :selectable="true" and :selected="true"', () => {
    const propsData = {
      selectable: true,
      selected: true,
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

    expect(wrapper.findAll('input.vue-tree__selected-checkbox')).toHaveLength(10)

    let values = wrapper.findAll('input.vue-tree__selected-checkbox').wrappers.map(w => (w.element as HTMLInputElement).checked)
    expect(values).toContain(true)
    expect(values).not.toContain(false)
  })

  it('should display unchecked inputs when :selectable="true" and :selected="false"', () => {
    const propsData = {
      selectable: true,
      selected: false,
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

    expect(wrapper.findAll('input.vue-tree__selected-checkbox')).toHaveLength(10)

    let values = wrapper.findAll('input.vue-tree__selected-checkbox').wrappers.map(w => (w.element as HTMLInputElement).checked)
    expect(values).toContain(false)
    expect(values).not.toContain(true)
  })

  it('should display checked and unchecked inputs when :selectable="true" and selected="selected"', () => {
    const propsData = {
      selectable: true,
      selected: 'selected',
      data: {
        label: 'Test',
        children: [{
          label: 'Cat #1', children: [
            { label: '#1', selected: true },
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

    expect(wrapper.findAll('input.vue-tree__selected-checkbox')).toHaveLength(10)

    let values = wrapper.findAll('input.vue-tree__selected-checkbox').wrappers.map(w => (w.element as HTMLInputElement).checked)
    expect(values.filter(v => v)).toHaveLength(1)
    expect(values.filter(v => !v)).toHaveLength(9)

    let checkedInput = wrapper.find('input.vue-tree__selected-checkbox:checked')
    expect(checkedInput.element.parentElement!.parentElement!.parentElement!.textContent).toEqual('✖    #1')
  })

  it('should display checked and unchecked inputs when :selectable="true" and :selected="[function]"', () => {
    const propsData = {
      selectable: true,
      selected: (treeNode: TreeNode) => {
        return treeNode.label === '#A'
      },
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

    expect(wrapper.findAll('input.vue-tree__selected-checkbox')).toHaveLength(10)

    let values = wrapper.findAll('input.vue-tree__selected-checkbox').wrappers.map(w => (w.element as HTMLInputElement).checked)
    expect(values.filter(v => v)).toHaveLength(1)
    expect(values.filter(v => !v)).toHaveLength(9)

    let checkedInput = wrapper.find('input.vue-tree__selected-checkbox:checked')
    expect(checkedInput.element.parentElement!.parentElement!.parentElement!.textContent).toEqual('✖    #A')
  })

  it('should display checked and unchecked inputs and update data when :selectable="true" and :selected="{get: ..., set: ...}"', () => {
    const propsData = {
      selectable: true,
      selected: {
        get (treeNode: TreeNode) {
          return treeNode.selected
        },
        set (treeNode: TreeNode, value: boolean) {
          Vue.set(treeNode, 'selected', value)
        }
      },
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
              { label: '#A', selected: true },
              { label: '#B' },
              { label: '#C' }
            ]
          }]
      }
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.findAll('input.vue-tree__selected-checkbox')).toHaveLength(10)

    let values = wrapper.findAll('input.vue-tree__selected-checkbox').wrappers.map(w => (w.element as HTMLInputElement).checked)
    expect(values.filter(v => v)).toHaveLength(1)
    expect(values.filter(v => !v)).toHaveLength(9)

    let checkedInput = wrapper.find('input.vue-tree__selected-checkbox:checked')
    expect(checkedInput.element.parentElement!.parentElement!.parentElement!.textContent).toEqual('✖    #A')

    return Vue.nextTick().then(() => {
      checkedInput.trigger('click')

      let otherInput = wrapper.findAll('input.vue-tree__selected-checkbox').at(2)
      otherInput.trigger('click')

      expect(wrapper.findAll('input.vue-tree__selected-checkbox:checked')).toHaveLength(1)
      expect(wrapper.vm.$props.data).toEqual({
        label: 'Test',
        children: [{
          label: 'Cat #1', children: [
            { label: '#1', selected: true },
            { label: '#2' },
            { label: '#3' },
            { label: '#4' }
          ]
        },
        {
          label: 'Cat #2', children: [
            { label: '#A', selected: false },
            { label: '#B' },
            { label: '#C' }
          ]
        }]
      })
    })
  })

  it('should emit selected events properly', () => {
    const propsData = {
      selectable: true,
      selected: 'selected',
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
              { label: '#A', selected: true },
              { label: '#B' },
              { label: '#C' }
            ]
          }]
      }
    }

    const events: VueTreeValueChangedEvent<boolean>[] = []
    const listeners = {
      selected: (e: VueTreeValueChangedEvent<boolean>) => events.push(e)
    }

    const wrapper = mount(VueTree, { propsData, listeners })
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.contains('.vue-tree__tree-node.vue-tree__root > .vue-tree__tree-node-content')).toBe(true)
    const checkbox = wrapper.find('input.vue-tree__selected-checkbox:checked')
    checkbox.trigger('click')

    expect(events).toHaveLength(1)
    expect(events[0].type).toEqual('selected')
    expect(events[0].vm.$props.data.label).toEqual('#A')
    expect(events[0].data.label).toEqual('#A')
    expect(events[0].oldValue).toBeTruthy()
    expect(events[0].value).toBeFalsy()

    checkbox.trigger('click')

    expect(events).toHaveLength(2)
    expect(events[1].type).toEqual('selected')
    expect(events[1].vm.$props.data.label).toEqual('#A')
    expect(events[1].data.label).toEqual('#A')
    expect(events[1].oldValue).toBeFalsy()
    expect(events[1].value).toBeTruthy()
  })
})
