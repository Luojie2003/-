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