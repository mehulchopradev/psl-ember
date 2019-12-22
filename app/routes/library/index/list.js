import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    fetch: service(),

    queryParams: {
        title: {
            refreshModel: true,
        }
    },

    async model(params) {
        let queryStr = '';
        if (params.title) {
            queryStr += `?title=${params.title}`;
        }
        const data = await this.fetch.get(`http://localhost:3000/books${queryStr}`);
        return data.books;
    },

    actions: {
        onNewBookAdded(book) {
            this.controller.model.pushObject(book);
        }
    },
});
