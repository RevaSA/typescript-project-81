import { expect, test } from 'vitest';

import Tag from './tag';

test('br', () => {
  const tag = new Tag('br');

  expect(tag.toString()).toBe('<br>');
});

test('img', () => {
  const tag = new Tag('img', { src: 'path/to/image' });

  expect(tag.toString()).toBe('<img src="path/to/image">');
});

test('input', () => {
  const tag = new Tag('input', { type: 'submit', value: 'Save' });

  expect(tag.toString()).toBe('<input type="submit" value="Save">');
});

test('label', () => {
  const tag = new Tag('label', {}, 'Email');

  expect(tag.toString()).toBe('<label>Email</label>');
});

test('label with text', () => {
  const tag = new Tag('label', { for: 'email' }, 'Email');

  expect(tag.toString()).toBe('<label for="email">Email</label>');
});

test('div', () => {
  const tag = new Tag('div');

  expect(tag.toString()).toBe('<div></div>');
});
