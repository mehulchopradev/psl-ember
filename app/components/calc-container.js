import Component from '@ember/component';

export default Component.extend({
    actions: {
        onAnsCalculated(answer) {
            this.set('ans', answer);
        },
    },
});
