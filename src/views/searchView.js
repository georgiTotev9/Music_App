import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';
import { albumTemplate } from './templates/albumTemplate.js';


const searchTemplate = (searchHandler, albums, isLogged) => html`
<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button class="button-list" @click=${searchHandler}>Search</button>
</div>

<h2>Results:</h2>


<div class="search-result">
${albums.map((x) => albumTemplate(x, isLogged))}
${(albums.length > 0) ? nothing : html`<p class="no-result">No result.</p>`}
    
</div>
</section>`;

export const searchView = (ctx) => {
    const searchHandler = (e) => {
        let searchElement = document.querySelector('#search-input');

        albumService.search(searchElement.value).then(albums => ctx.render(searchTemplate(searchHandler, albums, Boolean(ctx.user))))
    }

    ctx.render(searchTemplate(searchHandler, []));
};