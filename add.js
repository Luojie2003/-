/** 添加展示一个项 */
function displayAdd(nm_,age_,id_,sex_){
    let ad = document.createElement('div');
    ad.innerText = "ID: " + id_ + "姓名: " + nm_ + "年龄: " + age_ + "性别: " + sex_;
    ad.setAttribute("idv",id_);
    let del_btn = document.createElement('button');
    // del_btn.value = '删除';
    del_btn.textContent = "删除";
    del_btn.className = "del_btn";
    ad.appendChild(del_btn);
    del_btn.addEventListener('click',function(c){
        /*显示面板的删除 */
        let prt = this.parentElement;
        let pprt = prt.parentElement;
        let itemArr = pprt.childNodes;
        console.log(prt.getAttribute('idv'));

        console.log(itemArr);
        // pprt.removeChild(prt);
        
        // delDataItem();
    });
    
    display.appendChild(ad);
}
/** 存入一个用户 */
function submit(){
    let nmv = nm.value;
    let idv = getId();
    let agev = age.value;
    let sexv = sex.value;
    // 存入数组
    data.push(new User(idv,nmv,agev,sexv));
    console.log(data);
    // 展示
    displayAdd(nmv,agev,idv,sexv);
}
/** 存入一个用户_操作 */
function submit_clicked(){
    let btn = document.querySelector('#add');
    btn.addEventListener('click',submit);
}
submit_clicked();