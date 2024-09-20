import { FormAttrs } from '../types/form';
import Tag from './tag';

export default class HexletCode {
  static formFor(template: object, attrs: FormAttrs, cb: (val: unknown) => void): string {
    console.log('%ccb', 'font-weight:900; color:firebrick;', cb);

    const tagAttrs = {
      action: attrs.url || '#',
      method: 'post',
    };

    return new Tag('form', tagAttrs).toString();
  }
}
