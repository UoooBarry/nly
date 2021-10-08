import store from '../store';

export const requireAuth = (to, from, next) => {
  if (store.getters['counter/isUnlocked']) {
    next();
  } else {
    next(from);
  }
}
