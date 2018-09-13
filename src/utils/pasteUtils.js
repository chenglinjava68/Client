const imageUploader = require('./imageUploader');

exports.isPasteImage = function(items) {
  let i = 0
  let item
  while (i < items.length) {
    item = items[i]
    if (item.type.indexOf('image') !== -1) {
      return item
    }
    i++
  }
  return false
}

exports.upload = function(userUUID, file) {
  return imageUploader.toNetwork(userUUID, file);
}
