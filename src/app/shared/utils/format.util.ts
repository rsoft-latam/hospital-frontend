import {DatePipe} from '@angular/common';

export const formatDate = (value: string) => {
  if (value !== undefined && value !== null) {
    return new DatePipe('en-US').transform(value, 'MM/dd/yyyy');
  } else {
    return '';
  }
};
