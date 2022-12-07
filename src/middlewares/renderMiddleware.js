import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const headerEl = document.querySelector('.header-navigation');
const contentEl = document.querySelector('#main-content');

const renderContent = (templateResult) => {
  render(templateResult, contentEl);
};

export const renderNavigationMiddleware = (ctx, next) => {
  render(navigationView(ctx), headerEl);

  next();
};

export const renderContentMiddleware = (ctx, next) => {
  ctx.render = renderContent;
  next();
};
