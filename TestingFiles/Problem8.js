"use strict";
function validateKeysTest(object, keys) {
    return keys.every((key) => key in object);
}
