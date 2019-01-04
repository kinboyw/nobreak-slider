var count,n;
init();
setInterval(()=>{
  console.log(x(n));
  makeLeave(getItem(n)).one('transitionend',(e)=>{
    makeEnter($(e.currentTarget));
  })
  makeCurrent(getItem(n+1));
  n++;
},3000)

function getItem(n){
 return $(`.images > img:nth-child(${x(n)})`)
}
function x(n){
  var temp = n % count;
  n = temp === 0 ? count : temp; 
  return n;
}
function init(){
  count = $(".images > img").length;
  n = 1;
  $(`.images > img:nth-child(${n})`).addClass("current")
    .siblings().addClass("enter")
}
function makeLeave($node){
  return $node.removeClass('enter current').addClass('leave');
}
function makeEnter($node){
  return $node.removeClass('leave current').addClass('enter');
}
function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current');
}
