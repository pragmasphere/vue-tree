import Vue from 'vue'

import VueTree from '@/VueTree.vue'

export default Vue.extend({
  components: {VueTree},
  data: function () {
    return {
      loaderProps: {
        value: {label: 'Test'},
        children: (parent: any) => {
          if (parent.label === 'Test') {
            return [{label: 'Cat #1'}, {label: 'Cat #2'}]
          } else if (parent.label === 'Cat #1') {
            return [
              {label: '#1'},
              {label: '#2'},
              {label: '#3'},
              {label: '#4'}
            ]
          } else if (parent.label === 'Cat #2') {
            return [
              {label: '#A'},
              {label: '#B'},
              {label: '#C'}
            ]
          }
        }
      }
    }
  }

})
