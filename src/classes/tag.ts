import { AttrsType } from '../types/tag';
import { SINGLE_TAG, PAIRED_TAG } from '../constants/tag';

export default class Tag {
  tag: string;

  attrs: AttrsType;

  content: string;

  isSingle: boolean;

  isPaired: boolean;

  constructor(tag: string, attrs: AttrsType = {}, content: string = '') {
    this.tag = tag;
    this.attrs = attrs;
    this.content = content;

    this.isSingle = Object.values(SINGLE_TAG).includes(this.tag);
    this.isPaired = Object.values(PAIRED_TAG).includes(this.tag);

    if(!this.isSingle && !this.isPaired) {
      throw new Error(`Tag ${this.tag} is not supported`);
    }
  }

  protected getAttrsText() {
    return Object.entries(this.attrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
  }

  protected getSingleTemplate() {
    const attrText = this.getAttrsText();

    return `<${this.tag}${attrText ? ` ${attrText}` : ''}>`;
  }

  protected getPairedTemplate() {
    return `${this.getSingleTemplate()}${this.content}</${this.tag}>`;
  }

  toString() {
    if (this.isSingle) {
      return this.getSingleTemplate();
    }

    if (this.isPaired) {
      return this.getPairedTemplate();
    }

    return '';
  }
}
