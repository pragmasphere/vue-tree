import { VueConstructor } from 'vue'

import vanilla from './vanilla'
import fontAwesome from './font-awesome'
import { TreeNode } from 'src/vue-tree-types'

export interface Theme {
  handle: VueConstructor
  label: VueConstructor
  beforeChildren?: VueConstructor
  afterChildren?: VueConstructor
  content?: VueConstructor
}

export interface ThemeContext {
  vm: any, // VueTreeNode model
  node: TreeNode
  label: string
  hidden: boolean
  leaf: boolean
  opened: boolean
  selected: boolean,
  selectable: boolean
  loading: boolean
  error: any
}

class ThemesRegistry {
  private themes: { [s: string]: Theme; } = {}

  register (name: string, theme: Theme) {
    this.themes[name] = theme
  }

  unregister (name: string): Theme | undefined {
    const theme = this.themes[name]
    delete this.themes[name]
    return theme
  }

  get (theme: string | Theme): Theme {
    return Object.assign({}, this.getVanilla(), typeof theme === 'string' ? this.themes[theme] : theme)
  }

  getVanilla (): Theme {
    return vanilla
  }

  getFontAwesome (): Theme {
    return fontAwesome
  }
}

const themesRegistry = new ThemesRegistry()

themesRegistry.register('vanilla', vanilla)
themesRegistry.register('fontAwesome', fontAwesome)

export default themesRegistry
