export default {
  vm: Object, // The VueTreeNode component instance.
  node: Object, // The data of the node to display.
  label: String, // Label to display.
  hidden: Boolean, // Should the node be hidden ?
  leaf: Boolean, // Should the node be displayed as a leaf ?
  opened: Boolean, // Should the node be opened ?
  selected: Boolean, // Should the node be selected ?
  selectable: Boolean, // Should the node be selectable ?
  loading: Boolean, // Is the node currently loading ?
  error: Object // Contains the error object if an error occurs while loading the node.
}
