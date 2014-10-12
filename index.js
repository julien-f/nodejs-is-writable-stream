'use strict';

//====================================================================

var isFunction = (function (toS) {
  var ref = toS.call(toS);
  return function isString(val) {
    return toS.call(val) === ref;
  };
})(Object.prototype.toString);

//====================================================================

function isWritableStream(obj) {
  return !!(
    obj &&
    obj.write && isFunction(obj.write) &&

    // Important to detect not writable sockets.
    obj.writable !== false
  );
}
module.exports = isWritableStream;
