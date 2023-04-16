var display = document.querySelector('#display-box');
var display2 = document.querySelector('#act-area');
let nm = document.querySelector('#input-name');
let id = document.querySelector('#input-id');
let age = document.querySelector('#input-age');
let sex = document.querySelector('#select_sex');
var data = [];
function clearDisplay2(){
    display2.innerHTML = '';
}
function addDisplay2Item(e){
    let ad = document.createElement('div');
    let true_sex = 
    ad.innerText = '名字：' + e.nmv + 'ID:  '  + e.idv + '年龄:  ' + e.agev + '性别:  ' + e.sexv; 
    display2.appendChild(ad);
}
// function addDisplay2Item(e){

//     display2.appendChild(e);
// }