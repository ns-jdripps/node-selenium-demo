# node-selenium-demo

Simple prototype of selenium tests written in node and using the jasmine test framework.

To setup, after cloning just run `npm install`, and then you can run `npm test` (which just runs `jasmine test.js`). Note that you may need to modify your version of node (`nvm install v8.9.3; nvm use v8.9.3`)

- Actual tests are in `test.js`
- Custom webdriver functions are defined in `talosdriver.js`
- Page objects are in the pages directory
