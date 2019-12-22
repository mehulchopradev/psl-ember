import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    fetch: service(),

    actions: {
        onCancel() {
            this.transitionToRoute('library.index.list');
        },

        async onSave() {
            const {title, price, pages, ratings, publicationHouse} = this;
            const response = await this.fetch.post('http://localhost:3000/books', {
                book: {
                    title,
                    price,
                    pages,
                    ratings,
                    publicationHouse,
                },
            });

            this.setProperties({
                title: null,
                price: null,
                pages: null,
                ratings: null,
                publicationHouse: null,
            });

            this.send('onNewBookAdded', response);
        }
    },
});
