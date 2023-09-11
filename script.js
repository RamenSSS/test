function change(before, after) {
    var queue = document.querySelectorAll('.'+before);
    for (var i=0; i<queue.length; i++){
        queue[i].classList.remove(before);
        queue[i].classList.add(after);
    }
}

function light() {
    change('dark','light');
    change('dark_link','light_link');
    change('dark_table','light_table');
    document.getElementById('btn_darklight').innerText = '다크 모드'
    status='light'
}

function dark() {
    change('light','dark');
    change('light_link','dark_link');
    change('light_table','dark_table');
    document.getElementById('btn_darklight').innerText = '라이트 모드'
    status='dark'
}

function darklight() {
    if (status=='light'){dark()}
    else {light()}
}

status = 'dark'
data = location.href.split('?')
if (data.length==2){
    if (data[1]=='light'){
        darklight()
    }
}
