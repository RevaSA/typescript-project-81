import { FormAttrs } from '../types/form';
import { SINGLE_TAG, PAIRED_TAG } from '../constants/tag';
import Tag from './tag';

export default class HexletCode {
  static formFor(template: {}, attrs: FormAttrs, cb: (val: any) => void): string {
    const tagAttrs = {
      action: attrs.url || '#',
    }

    return new Tag('form', tagAttrs).toString();
  }
}
