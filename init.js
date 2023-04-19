var display = document.querySelector('#display-box');
var display2 = document.querySelector('#act-area');
let nm = document.querySelector('#input-name');
let id = document.querySelector('#input-id');
let age = document.querySelector('#input-age');
let sex = document.querySelector('#select_sex');
var data = [];
var IDNUM = 0;
class User {
    constructor(idv, nmv, agev, sexv) {
        this.idv = idv;
        this.nmv = nmv;
        this.agev = agev;
        this.sexv = sexv;
    }
    modifyName(newName) {
        this.nmv = newName;
    }
    modifyAge(newAge){
        this.agev = newAge;
    }
    modifySex(newSex){
        this.sexv = newSex;
    }
}
function clearDisplay2(){
    display2.innerHTML = '';
}
/** 需传入一个data对象 */
function addDisplay2Item(e){
    let ad = document.createElement('div');
    ad.innerText = '名字：' + e.nmv + 'ID:  '  + e.idv + '年龄:  ' + e.agev + '性别:  ' + e.sexv; 
    display2.appendChild(ad);
}
function getId(){
    return ++IDNUM;
}