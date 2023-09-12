function change(before, after) {
    var queue = document.querySelector('body')
    queue.classList.remove(before);
    queue.classList.add(after);
}

function light() {
    change('dark','light');
    document.getElementById('btn_darklight').innerText = '다크 모드'
    status='light'
}

function dark() {
    change('light','dark');
    document.getElementById('btn_darklight').innerText = '라이트 모드'
    status='dark'
}

function darklight() {
    if (status=='light'){dark()}
    else {light()}
}

function simplify() {
    document.querySelector('body').classList.add('simple')
    try {document.getElementById('btn_simple').innerText = '자세하게 보기'} catch {}
    status2='?simple'
}

function unsimplify() {
    document.querySelector('body').classList.remove('simple')
    try {document.getElementById('btn_simple').innerText = '간단하게 보기'} catch {}
    status2=''
}

function simple() {
    if (status2=='?simple'){unsimplify()}
    else {simplify()}
}

status = 'dark'
data = location.href.split('?')
if (data.length>1){
    if (data[1]=='light'){
        darklight()
    }
}

status2 = ''
if (data.length>2){
    if (data[2]=='simple'){
        simplify()
    }
}
