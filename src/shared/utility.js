import moment from 'moment';

export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

export const formatDay = (date, format) => moment(date).format(format || 'DD/MM/YYYY');
