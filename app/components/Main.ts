import Vue from 'vue'
import Component from 'vue-class-component'

import VueTree from '@/VueTree.vue'

@Component({ components: { VueTree } })
export default class Main extends Vue {
  loaderProps = {
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
}
