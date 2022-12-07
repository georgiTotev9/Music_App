import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware, renderNavigationMiddleware } from './middlewares/renderMiddleware.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { deleteHandler } from './views/deleteHandler.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutHandler } from './views/logoutHandler.js';
import { registerView } from './views/registerView.js';
import { searchView } from './views/searchView.js';

// Middlewares
page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

// Handlers
page('/',homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutHandler);
page('/catalog', catalogView);
page('/create', createView);
page('/search', searchView);
page('/albums/:albumId', detailsView);
page('/albums/:albumId/edit', editView);
page('/albums/:albumId/delete', deleteHandler);

page.start();
