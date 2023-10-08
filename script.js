function light() {
    $('body').removeClass('dark').addClass('light');
    $('#btn_darklight').text('다크 모드')
    isDark='n'
}

function dark() {
    $('body').removeClass('light').addClass('dark');
    $('#btn_darklight').text('라이트 모드')
    isDark='y'
}

function darklight() {
    if (isDark=='n'){dark()}
    else {light()}
    localStorage.setItem('isDark',isDark)
}

function simplify() {
    $('body').addClass('simple')
    $('#btn_simple').text('자세하게 보기')
    isSimple='y'
}

function unsimplify() {
    $('body').removeClass('simple')
    $('#btn_simple').text('간단하게 보기')
    isSimple='n'
}

function simple() {
    if (isSimple=='y'){unsimplify()}
    else {simplify()}
    localStorage.setItem('isSimple',isSimple)
}

isDark = localStorage.getItem('isDark')
isSimple = localStorage.getItem('isSimple')

if (isDark=='n') {light()}
if (isSimple=='y') {simplify()}