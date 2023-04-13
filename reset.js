function resetPage() {
    // console.log("ok");
    id.value = "";
    nm.value = "";
    age.value = "";
    sex.value = "other";
    display.innerHTML = "";
    data.splice(0,data.length);
}

function reset_clicked(){
    let btn = document.querySelector('#reset');
    btn.addEventListener('click',resetPage);
}
reset_clicked();