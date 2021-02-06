import {HttpParams} from '@angular/common/http';

export const createRequestOption = (req: any): HttpParams => {
  let options: HttpParams = new HttpParams();
  Object.keys(req).forEach((key) => {
    if (['page', 'sort', 'size'].indexOf(key) === -1) {
      options = options.set(key + '.contains', req[key]);
    }
    if (['page', 'size'].indexOf(key) > -1) {
      options = options.set(key, req[key]);
    }
    if (req.sort) {
      req.sort.forEach((val) => options = options.append('sort', val));
    }
  });
  return options;
};
