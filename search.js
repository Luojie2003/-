

function search_clicked(){
    let btn = document.querySelector('#search');
    btn.addEventListener('click',search);
    let ans_arr = [];
    function search(){
        var keyid = prompt();
        console.log(keyid);
        let ans = data.reduce(function(prev,cur,index,data){
            // console.log('!!!:');
            // console.log(index, cur);
            if (keyid == cur.idv){
                // console.log("yesOK");
                // ans_arr.push(index);
                addDisplay2Item(data[index]);
            }
        },0)
        // console.log("ans_arr: ");
        // console.log(ans_arr);
        addDisplay2Item(ans_arr);
    }
    
}
search_clicked();