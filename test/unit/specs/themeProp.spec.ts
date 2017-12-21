import { mount } from 'vue-test-utils'

import VueTree from '@/index'

describe('Theme', () => {
  it('should use vanilla theme when declared', () => {
    const propsData = {
      theme: 'vanilla'
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.contains('.vue-tree__tree-node.vue-tree__root > .vue-tree__tree-node-content')).toBe(true)
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(9)
    expect(wrapper.text()).toContain('Vue Tree')
    expect(wrapper.text()).toContain('Category #1')
    expect(wrapper.text()).toContain('Category #2')
    expect(wrapper.text()).toContain('Item #A')

    expect(wrapper.html()).toContain('[-]')
    expect(wrapper.html()).not.toContain('class="fa')
  })

  it('should use fontAwesome theme when declared', () => {
    const propsData = {
      theme: 'fontAwesome'
    }

    const wrapper = mount(VueTree, { propsData })
    expect(wrapper.isVueInstance()).toBeTruthy()

    expect(wrapper.contains('.vue-tree__tree-node.vue-tree__root > .vue-tree__tree-node-content')).toBe(true)
    expect(wrapper.findAll('.vue-tree__tree-node-content')).toHaveLength(9)
    expect(wrapper.text()).toContain('Vue Tree')
    expect(wrapper.text()).toContain('Category #1')
    expect(wrapper.text()).toContain('Category #2')
    expect(wrapper.text()).toContain('Item #A')

    expect(wrapper.html()).not.toContain('[-]')
    expect(wrapper.html()).toContain('class="fa')
  })
})
