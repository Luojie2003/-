function search_clicked(){
    let btn = document.querySelector('#search');
    btn.addEventListener('click',function search(){
        let keyid = prompt();
        console.log(keyid);
        searchById(keyid);
    });
}
/** 遍历arr得到符合条件的项 */
function searchById(searchId){
    let ans = -1;
    data.reduce((prev,cur,index)=>{
        if(searchId == cur.idv){
            console.log("yesOK");
            // console.log(index);
            ans = index;
            // return index;
        }
    },0);
    console.log(ans);
    return ans;
}
function searchByName(searchName){
    let ans = -1;
    data.reduce((prev,cur,index)=>{
        if(searchName == cur.nmv){
            console.log("yesOK");
            // console.log(index);
            ans = index;
            // return index;
        }
    },0);
    console.log(ans);
    return ans;
}
search_clicked();