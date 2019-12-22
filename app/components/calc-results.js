import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    firstVisible: computed('first', function () {
        return !isNaN(parseInt(this.first));
    }),

    secondVisible: computed('second', function () {
        return !isNaN(parseInt(this.second));
    }),

    ansVisible: computed('ans', function () {
        return !isNaN(parseInt(this.ans));
    }),
});
