import * as _ from 'lodash';
import {FormGroup} from '@angular/forms';

export const setErrors = (errors: any, form: FormGroup) => {
  _.each(errors, (field: any, fieldIdx: string) => {
    fieldIdx = fieldIdx.substr(fieldIdx.indexOf('.') + 1);
    form.controls[fieldIdx].setErrors(
      _.chain(field.Errors)
        .map((itm: string, idx: number) => [itm, itm])
        .fromPairs()
        .value()
    );
  });
};
