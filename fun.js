var display = document.querySelector('#display-box');

let nm = document.querySelector('#input-name');
let id = document.querySelector('#input-id');
let age = document.querySelector('#input-age');
let sex = document.querySelector('#select_sex');

var data = [];

function addDomEvs(){
    
}

function displayAdd(nm_,age_,id_,sex_){
    let ad = document.createElement('div');
    ad.innerText = "ID: " + id_ + "姓名: " + nm_ + "年龄: " + age_ + "性别: " + sex_;
    // console.log(display);
    display.appendChild(ad);
}

function submit(){
    let btn = document.querySelector('#add');
    btn.addEventListener('click', function (){
        let nmv = nm.value;
        let idv = id.value;
        let agev = age.value;
        let sexv = sex.value;
        // console.log(sexv);
        // console.log(nmv);
        data[data.length]={
            nmv,idv,agev,sexv
        };
        console.log(data);
        displayAdd(nmv,agev,idv,sexv);
    });
}
submit();

function resetPage() {
    id.value = "";
    nm.value = "";
    age.value = "";
    sex.value = "other";
    // display.innerHTML = "";
}