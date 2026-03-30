import { common } from './common';
import { home } from './home';
import { about } from './about';
import { work } from './work';
import { services } from './services';
import { contact } from './contact';
import { estimator } from './estimator';
import { legal } from './legal';

const pages = [common, home, about, work, services, contact, estimator, legal];

export const translations = {
  el: Object.assign({}, ...pages.map((p) => p.el)),
  en: Object.assign({}, ...pages.map((p) => p.en)),
};
