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
function submit(nmv,idv,agev,sexv){
    // 存入对象数组
    data.push(new User(idv,nmv,agev,sexv));
    console.log(data);
    // 显示面板添加
    displayAdd(nmv,agev,idv,sexv);
    notice_dispaly(0);
}
function notice_dispaly(v){
    let notice_area = document.querySelector('#notice_area');
    // console.log(notice_area);
    if(v === 1){
        notice_area.innerHTML = "姓名输入有误";
    }else if (v === 2){
        notice_area.innerHTML = "年龄输入有误";
    }else if(v === 3){
        notice_area.innerHTML = "年龄、姓名输入有误";
    }else if(v === 4){
        notice_area.innerHTML = "您还没有输入";
    }else {
        notice_area.innerHTML = "提交成功！";
    }
    setTimeout(() => {
        notice_area.innerHTML = '';
    }, 2000);
}
// notice_dispaly(2);
// notice(1);

/** 存入一个用户_按钮点击事件 */
function submit_clicked(){
    let btn = document.querySelector('#add');
    btn.addEventListener('click',()=>{
        let nmv = nm.value;
        let idv = getId();
        let agev = age.value;
        let sexv = sex.value;
        console.log(nmv);
        console.log(agev);
        if(nmv === '' && agev === ''){
            notice_dispaly(4);
        }else if(isLegal(nmv,agev)){
            submit(nmv,idv,agev,sexv);
            notice_dispaly(0);
        }else if(!isName(nmv)){
            notice_dispaly(1);
        }else if(!isAge(agev)){
            notice_dispaly(2);
        }
    });
}
submit_clicked();