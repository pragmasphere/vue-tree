const simple = require('raw-loader!./Simple.vue.raw')
const defaultObjectProperties = require('raw-loader!./DefaultObjectProperties.vue.raw')
const customObjectProperties = require('raw-loader!./CustomObjectProperties.vue.raw')
const functionalObjectProperties = require('raw-loader!./FunctionalObjectProperties.vue.raw')
const asyncChildren = require('raw-loader!./AsyncChildren.vue.raw')
const defaultThemes = require('raw-loader!./DefaultThemes.vue.raw')
const selectableProperty = require('raw-loader!./SelectableProperty.vue.raw')
const home = require('raw-loader!./Home.vue.raw')
const events = require('raw-loader!./Events.vue.raw')

export default {
  simple,
  defaultObjectProperties,
  customObjectProperties,
  functionalObjectProperties,
  asyncChildren,
  defaultThemes,
  selectableProperty,
  home,
  events
}
