var recipes = new Object()
var new_object
var updateObjectWithKeyAndValue = (object,key,value) =>{
  object[key] = value
  return object

} 

var updateObjectWithKeyAndValue = (object,key,value) =>{
   new_object = Object.assign(object,{key:value})
  return new_object

} 
