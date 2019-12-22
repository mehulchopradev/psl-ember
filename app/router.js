import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('calculator', {
    path: '/calc'
  });
  this.route('todos');
  this.route('library', function() {
    this.route('book-details', {
      path: '/books/:book_id'
    });

    this.route('index', function() {
      this.route('list', function() {
        this.route('new');
      });
    });
  });
});
