import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

    didReceiveAttrs() {
        this._super(...arguments);
    },

    didInsertElement() {
        this._super(...arguments);

        this.operation = '+';
    },

    willDestroyElement() {
        this._super(...arguments);
    },

    didDestroyElement() {
        this._super(...arguments);
    },

    calcDisabled: computed('first', 'second', function () {
        const { first, second } = this;
        return isNaN(parseInt(first)) || isNaN(parseInt(second));
    }),

    actions: {
        onCalculate() {
            const first = parseInt(this.first);
            const second = parseInt(this.second);
            const ops = this.operation;

            let result;
            if (ops === '+') {
                result = first + second;
            } else if (ops === '-') {
                result = first - second;
            } else if (ops === '*') {
                result = first * second;
            }

            this.set('ans', result + '');
            this.onAnsCalculated(this.ans);
        },

        onOpsChange(operation) {
            this.operation = operation;
        }
    }
});
