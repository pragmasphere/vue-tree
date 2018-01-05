import Vue from 'vue'
import VueTreeNode from '@/VueTreeNode.vue'

import { createWrapperArray, Wrapper, WrapperArray } from 'vue-test-utils'

export function isVisible (wrapper: Wrapper<any>) {
  const computedStyle = window.getComputedStyle(wrapper.element)
  return computedStyle.display !== 'none'
}

export function visibleTreeNodes (wrapper: Wrapper<any>): WrapperArray<Vue> {
  return createWrapperArray(wrapper.findAll(VueTreeNode).wrappers.filter(w => isVisible(w)))
}

export function visibleText (wrapper: Wrapper<any>) {
  const element = wrapper.element.cloneNode(true) as HTMLElement
  const toRemoveQuery = element.querySelectorAll('.vue-tree__tree-node--parent-closed')
  for (let i = 0; i < toRemoveQuery.length; i++) {
    const item = toRemoveQuery.item(i)
    item.parentElement!.removeChild(item)
  }

  return element.textContent
}
