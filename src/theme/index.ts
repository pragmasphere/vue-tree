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
  node: TreeNode
  label: string
  leaf: Boolean
  opened: Boolean
  loading: Boolean
  error: any
}

class ThemesRegistry {
  private themes: { [s: string]: Theme; }= {}

  register (name: string, theme: Theme) {
    this.themes[name] = theme
  }

  unregister (name: string): Theme | undefined {
    const theme = this.themes[name]
    delete this.themes[name]
    return theme
  }

  get (name: string): Theme | undefined {
    return this.themes[name]
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
