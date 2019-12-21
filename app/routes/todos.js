import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // suppose to fetch the data for the route template
        // fetch todos for the todos template of current route
        /* return [
            {
                id: 1,
                description: 'get up',
                done: false,
            },
            {
                id: 2,
                description: 'gym',
                done: true,
            },
        ]; */
        return [];
    }
});
