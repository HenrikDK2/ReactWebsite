export const CREATE = 'CREATE';

export const create = (name, email, phone) => ({
  type: CREATE,
  payload: {
    name,
    email,
    phone
  }
})