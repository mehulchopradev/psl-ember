import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        onSearch(searchStr) {
            this.send('onSearchByTitle', searchStr);
        },
    },
});
