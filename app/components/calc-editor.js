import Component from '@ember/component';

export default Component.extend({
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

        },

        onOpsChange(operation) {
            this.operation = operation;
        }
    }
});
