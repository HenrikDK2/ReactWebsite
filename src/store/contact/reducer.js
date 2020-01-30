import { CREATE } from './actions';

export default (state = {}, { type, payload }) => {
  if (type === CREATE) {
    return payload;
  }
  return state
}