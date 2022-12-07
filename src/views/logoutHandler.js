import * as userService from '../services/userService.js';

export const logoutHandler = (ctx) => {
  userService.logout()
    .then(() => {
        ctx.page.redirect('/')
    });
};
