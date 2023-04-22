function search_clicked(){
    let btn = document.querySelector('#search');
    btn.addEventListener('click',function search(){
        let keyid = prompt();
        console.log(keyid);
        searchById(keyid);
    });
}
search_clicked();

/** 遍历arr得到符合条件的项 */
function searchById(searchId){
    let ans = -1;
    ans = data.reduce((prev,cur,index)=>{
        if(searchId == cur.idv){
            // console.log("yesOK");
            // console.log(index);
            // ans = index;
            return index;
        }
        return index;
    },0);
    // console.log(tt);
    // console.log(ans);
    return ans;
}
/** 通过名字进行查询
 * !!返回是下标数组
 */
function searchByName(searchName){
    let ans = [];
    data.reduce((prev,cur,index)=>{
        if(cur.nmv.include(searchName)){
            ans.push(index);
        }
    },0);
    console.log(ans);
    return ans;
}
// /** 模糊查询*/
// function checkStrContain(s){
//     data.reduce((prev,cur,index)=>{

//     })
// }