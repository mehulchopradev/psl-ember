import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    fetch: service(),

    async model(params) {
        const id = params.book_id;
        const url = `http://localhost:3000/books/${id}`;
        const data = await this.fetch.get(url);
        return data.books;
    }
});
