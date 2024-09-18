import { expect, test } from 'vitest';

import HexletCode from './hexlet-code';

test('form without action', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };

  const html = HexletCode.formFor(template, {}, (f) => {});

  expect(html).toBe('<form action="#" method="post"></form>');
});

test('form with action', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };

  const html = HexletCode.formFor(template, {url: '/users'}, (f) => {});

  expect(html).toBe('<form action="/users" method="post"></form>');
});
