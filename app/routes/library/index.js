import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        onSearchByTitle(searchStr) {
            this.controllerFor('library.index.list').set('title', searchStr);
        }
    }
});
