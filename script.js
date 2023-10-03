function change(before, after) {
    
}

function light() {
    $('body').removeClass('dark').addClass('light');
    $('#btn_darklight').text('다크 모드')
    status='light'
}

function dark() {
    $('body').removeClass('light').addClass('dark');
    $('#btn_darklight').text('라이트 모드')
    status='dark'
}

function darklight() {
    if (status=='light'){dark()}
    else {light()}
}

function simplify() {
    $('body').addClass('simple')
    $('#btn_simple').text('자세하게 보기')
    status2='?simple'
}

function unsimplify() {
    $('body').removeClass('simple')
    $('#btn_simple').text('간단하게 보기')
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
