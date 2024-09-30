import { expect, test } from 'vitest';

import HexletCode from '../src/classes/hexlet-code';

test('form without action', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };

  const html = HexletCode.formFor(template, {}, () => {});

  expect(html).toBe('<form action="#" method="post"></form>');
});

test('form with action', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };

  const html = HexletCode.formFor(template, { url: '/users' }, () => {});

  expect(html).toBe('<form action="/users" method="post"></form>');
});
