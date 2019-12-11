
// Vue.filter('date',function(val) {
//   if (!val) {
//     console.log('无值');
//     return;
//   }
//   var date = val.slice(0,4) + "年" + val.substr(4,2) + "月" + val.slice(6,8) +"日";
//   return date;
// })

function date(val) {
  if (!val) {
    console.log('无值');
    return;
  }
  var date = val.slice(0,4) + "年" + val.substr(4,2) + "月" + val.slice(6,8) +"日";
  return date;
}

export default {
  date
}