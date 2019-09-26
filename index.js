var recipes = {}

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  obj[key]=value
  return obj
}

function deleteFromObjectByKey (object,key) {
  var newObj = Object.assign({},object)
  delete newObj.key
  return newObj
}