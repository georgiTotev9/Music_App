import * as albumService from '../services/albumService.js';

export const deleteHandler = async (ctx) => {
  try {
    const album = await albumService.getOne(ctx.params.albumId);

    let confirmed = confirm(`Do you want to delete the album ${album.name}?`);

    if (confirmed) {
        await albumService.remove(ctx.params.albumId);

        ctx.page.redirect('/catalog');
    }
  } catch (error) {
    alert(error)
  }
};
