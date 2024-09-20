import HexletCode from './classes/hexlet-code';

// Создаем шаблон template с полями name, job и gender, задаем им имена
const template = { name: 'rob', job: 'hexlet', gender: 'm' };

console.log(HexletCode.formFor(template, {}, () => {}));
// <form action="#" method="post"></form>

console.log(HexletCode.formFor(template, { url: '/users' }, () => {}));
// <form action="/users" method="post"></form>
