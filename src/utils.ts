import { PropertyGetter, PropertyMapper } from '@/vue-tree-types'

export function isString (val: any): boolean {
  return typeof val === 'string'
}

export function isObject (val: any): boolean {
  return typeof val === 'object'
}

export function isFunction (val: any): boolean {
  return typeof val === 'function'
}

export function getPropertyValue<T> (data: any, property: PropertyMapper<T> | PropertyGetter<T> | String | T, defaultValue: T): T {
  let value: T
  if (isString(property)) {
    value = data[property as string]
  } else if (isObject(property) && 'get' in (property as any)) {
    const openedAccessor = property as PropertyMapper<T>
    value = openedAccessor.get(data)
  } else if (isFunction(property)) {
    const openedGetter = property as PropertyGetter<T>
    value = openedGetter(data)
  } else {
    value = property as T
  }

  if (value === undefined) {
    return defaultValue
  }

  return value
}
