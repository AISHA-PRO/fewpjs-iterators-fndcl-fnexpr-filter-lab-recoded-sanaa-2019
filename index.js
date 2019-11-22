// Code your solution here

function findMatching(drivers, str){
 const newDriver = drivers.filter(e=>{
   return e.toUpperCase() == str.toUpperCase(); });
   return newDriver;
}

function fuzzyMatch (drivers, str){
  const newDriver = drivers.filter(e=>{
   return e.toUpperCase() == str.toUpperCase(); });
   return newDriver;
}