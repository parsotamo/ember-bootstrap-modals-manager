import { registerAsyncHelper } from '@ember/test';

export default registerAsyncHelper('openModal',
  function(app, type) {
    return  click(`button.${type}-modal`);
  }
);