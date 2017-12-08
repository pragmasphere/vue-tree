const simple = require('raw-loader!./Simple.vue.raw')
const defaultObjectProperties = require('raw-loader!./DefaultObjectProperties.vue.raw')
const customObjectProperties = require('raw-loader!./CustomObjectProperties.vue.raw')
const functionalObjectProperties = require('raw-loader!./FunctionalObjectProperties.vue.raw')
const asyncChildren = require('raw-loader!./AsyncChildren.vue.raw')

export default {simple, defaultObjectProperties, customObjectProperties, functionalObjectProperties, asyncChildren}
