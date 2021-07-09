export const ON_OPEN = 'ON_OPEN';
export const ON_OPEN_ERROR = 'ON_OPEN_ERROR';

export const onOpen = (success, message) => ({
  type: ON_OPEN,
  payload: {
    success,
    message,
  },
});

export const onOpenInfo = (success, message) => ({
  type: ON_OPEN,
  payload: {
    success,
    message,
    status: 'Info',
  },
});

export const onOpenError = (error) => ({
  type: ON_OPEN_ERROR,
  payload: {
    error,
  },
});
