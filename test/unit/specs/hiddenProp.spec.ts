import { mount } from 'vue-test-utils'

import VueTree from '@/index'

describe('Hidden', () => {
  it('should hide root when :=root-hidden="true"', () => {
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
