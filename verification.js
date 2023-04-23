function isID(id){
    return (id >= 1 && id <= 1000);
}
function isName(nm){
    let regex_nm = /^[\u4E00-\u9FA5]{2,10}$/;
    return regex_nm.test(nm);
}
function isAge(age){
    //let regex_age = /^([1-9]\d?|1[01]\d|120)$/;
    return (age > 0 && age <= 120);
}
function isLegal(nm,age){
    return isName(nm) && isAge(age);
}

/**失去焦点后，判断name和age的合法性 */
nm.addEventListener('focusout',()=>{
    let agev = age.value;
    let nmv = nm.value;
    if(!isName(nmv) && !isAge(agev)){
        notice_dispaly(3);
    }else if(!isName(nmv)){
        notice_dispaly(1);
    }
});
/**失去焦点后，判断name和age的合法性 */
age.addEventListener('focusout',()=>{
    let nmv = nm.value;
    let agev = age.value;
    if(!isName(nmv) && !isAge(agev)){
        notice_dispaly(3);
    }else if(!isAge(agev)){
        notice_dispaly(2);
    }
});