/** 添加展示一个项 */
function displayAdd(nm_,age_,id_,sex_){
    let ad = document.createElement('div');
    ad.innerText = "ID: " + id_ + "姓名: " + nm_ + "年龄: " + age_ + "性别: " + sex_;
    let del_btn = document.createElement('button');
    // del_btn.value = '删除';
    del_btn.textContent = "删除";
    del_btn.className = "del_btn";
    /**显示面板删除 */
    del_btn.addEventListener('click',function(ad){
        let prt = this.parentElement;
        let pprt = prt.parentElement;
        pprt.removeChild(prt);
        console.log(ad);
        // delDataItem();
    });
    ad.appendChild(del_btn);
    display.appendChild(ad);
}
/** 存入一个用户 */
function submit(){
    let nmv = nm.value;
    let idv = getId();
    let agev = age.value;
    let sexv = sex.value;
    data[data.length]={
        nmv,idv,agev,sexv
    };
    console.log(data);
    displayAdd(nmv,agev,idv,sexv);
}
/** 存入一个用户_操作 */
function submit_clicked(){
    let btn = document.querySelector('#add');
    btn.addEventListener('click',submit);
}
submit_clicked();