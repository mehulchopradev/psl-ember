import { helper } from '@ember/component/helper';

export default helper(function ucase(params/*, hash*/) {
  const param = params[0];
  return param.toUpperCase();
});
