function search_clicked(){
    let btn = document.querySelector('#search');
    btn.addEventListener('click',search);
    let ans_arr = [];
    function search(){
        var keyid = prompt();
        console.log(keyid);
        /**遍历arr得到符合条件的每一项 */
        let ans = data.reduce(function(prev,cur,index,data){
            // console.log(index, cur);
            if (keyid == cur.idv){
                // console.log("yesOK");
                // ans_arr.push(index);
                addDisplay2Item(data[index]);
            }
        },0)
    }
}
search_clicked();