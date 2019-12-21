import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    saveDisabled: computed('newTodo', function () {
        const newTodo = this.newTodo;
        return !newTodo;
    }),

    noCompletedTodos: computed('model.@each.done', function () {
        const todoList = this.model;
        return todoList.filter(todo => todo.done).length;
    }),

    disableClear: computed('model.@each.done', function () {
        return this.model.filter(todo => todo.done).length === 0;
    }),

    actions: {
        onSaveTodo() {
            const newTodo = this.newTodo;
            const model = this.model;
            model.pushObject({
                description: newTodo,
                done: false,
            });

            this.set('newTodo', '');
        },

        onCompletedTodos() {
            const notCompletedTodos = 
                this.model.filter(todo => !todo.done);
            this.set('model', notCompletedTodos);
        }
    }
});
