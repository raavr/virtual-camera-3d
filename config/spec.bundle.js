import 'babel-polyfill';
import 'rxjs/Rx';

let testContext = require.context("../src", true, /.spec$/);
testContext.keys().map(testContext);