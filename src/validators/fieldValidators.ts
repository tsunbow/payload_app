import type { Validate } from 'payload'

export const validateURL: Validate = (value) => {
  if (value && !URL.canParse(value)) {
    return 'Must be a valid URL'
  }
  return true
}

export const validatePositiveInteger: Validate = (value) => {
  // 整数チェック
  if (!Number.isInteger(value)) {
    return 'Must be an integer'
  }

  // 正の数チェック
  if (value <= 0) {
    return 'Must be a positive integer'
  }

  return true
}
