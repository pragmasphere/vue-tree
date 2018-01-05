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

export function getFirstValue<T> (...values: T[]): T {
  for (const value of values) {
    if (value !== undefined && value !== null) {
      return value
    }
  }
  return values[values.length - 1]
}

export function getPropertyValue<T> (data: any, property: PropertyMapper<T> | PropertyGetter<T> | String | T, defaultValueProvider: () => T): T {
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
    return defaultValueProvider()
  }

  return value
}

export function setPropertyValue<T> (data: any, property: PropertyMapper<T> | PropertyGetter<T> | String | T, value: T): void {
  if (isString(property)) {
    data[property as string] = value
  } else if (isObject(property) && 'set' in (property as Object)) {
    const openedAccessor = property as PropertyMapper<T>
    openedAccessor.set(data, value)
  }
}
