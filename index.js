var recipes = {dinner: 'quesadillas'}

//Devuelve el objeto sin modificar el original
function updateObjectWithKeyAndValue(object, key, value)
{
   return Object.assign({}, object, {[key]: value})
}
//Devuelve el objeto actualizado
function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var clone = Object.assign({}, object);
  return delete clone.[key];
}
