export const NAVIGATE = 'NAVIGATE'
export const CURRENT_USER = 'CURRENT_USER'

export const navigate = (goto) => {
  return {
    type: NAVIGATE,
    goto
  }
}

export const currentUser = (userId) => {
  return {
    type: CURRENT_USER,
    userId
  }
}
