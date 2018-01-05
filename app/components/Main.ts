import Vue from 'vue'

import VueTree from '@/VueTree.vue'
import examples from '#/components/examples'

export default Vue.extend({
  components: {VueTree},
  data: function () {
    return {
      examples,
      scope: { VueTree, Vue }
    }
  }

})
