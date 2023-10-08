function loadSch(yy,mm) {
  if (yy=='22' && parseInt(mm) < 5) {
    alert('존재하지 않는 페이지입니다,')
  } else {
  $.ajax({
    url: './'+yy+mm+'.txt',
    dataType: 'text'
  }).done(setCalender);
  $('#selectedMonth').text(mm)
  $('#selectedYear').text('20'+yy+'.')
  $('#month_box > .selected').removeClass('selected')
  $('#'+mm).addClass('selected')
  setyear(yy);
  setButton(yy,mm);
  }
}

function setyear(yy) {
  $('#year_box > .selected').removeClass('selected')
  $('#20'+yy).addClass('selected')
  year = yy
}

function setButton(yy,mm) {
  var M = parseInt(mm);
  var Y = parseInt(yy);

  $('.unupdated').removeClass('unupdated')
  if (Y==23 && M==01) {
  $('#left_btn').attr("onclick","alert('첫 번째 페이지입니다.')").addClass('unupdated')
  $('#left_btn_h').attr("onclick","alert('첫 번째 페이지입니다.')").addClass('unupdated')
  } else {
  var prevY = Y
  var prevM = M - 1
  if (prevM==0) {
    prevY += -1;
    prevM = 12;
  }
  prevM = String(prevM).padStart(2,'0');
  $('#left_btn').attr("onclick","loadSch('"+prevY+"','"+prevM+"')")
  $('#left_btn_h').attr("onclick","loadSch('"+prevY+"','"+prevM+"')")
  }
  if (Y==23 && M==12) {
  $('#right_btn').attr("onclick","alert('업데이트 예정')").addClass('unupdated')
  } else {
  var nextY = Y;
  var nextM = M + 1;
  if (nextM==13) {
    nextY += 1;
    nextM = 1;
  }
  nextM = String(nextM).padStart(2,'0');
  $('#right_btn').attr("onclick","loadSch('"+nextY+"','"+nextM+"')")
  }
}

function setCalender(data) {
  $('table').remove();
  var rawAllDates = data.split(/\r?\n|\r/);
  var allDates = rawAllDates.filter(function(item) {
    return item !== null && item !== undefined && item !== '';
  });
  var table = '<table><thead><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr></thead><tbody>';
  for (var singleDate = 0; singleDate < allDates.length; singleDate++) {
    if (singleDate % 7 === 0) {
      table += '<tr>'
    }
    table += '<td>'
    if (!(allDates[singleDate] == '0')) {
      var schS = allDates[singleDate].split('%');
      for (var sch = 0; sch < schS.length; sch++) {
        if (sch === 0) {
          table += '<date>' + schS[0] + '</date>'
        } else {
          rawSch = schS[sch].split('+')
          table += '<button class="sch">[' + rawSch[0] + ']<span class="detail_shown"> ' + rawSch[1] + '</span></button><hv><p class="detail_hidden">' + rawSch[1] + '</p>'
          if (!(rawSch[2] == '0')) {
            table += rawSch[2]
          }
          if (!(rawSch[3] == '0')) {
            table += '<p class="mem">' + rawSch[3] + '</p>'
          }
          table += '</hv>'
        }
      }
    }
    table += '</td>'
    if (singleDate % 7 === 6) {
      table += '</tr>'
    }
  }
  table += '</tbody>';
  table += '</table>';
  $('#content').append(table);
}

function setScroll() {
  $('.drop').width($('#btn_drop').width()+25);
  $("#month_box").scrollTop( $("#month_box > .selected").offset().top - $("#01").offset().top - 75 + $("#01").height()/2 );
  $("#year_box").scrollTop( $("#year_box > .selected").offset().top - $("#2022").offset().top );
}

data0 = location.href.split('&')
if (data0.length>1){
var yymm=data0[1].split('?')[0];
loadSch( yymm.slice(0,2) , yymm.slice(2) );
} else {
var dt = new Date();
loadSch( String(dt.getFullYear()).slice(2) , String(dt.getMonth()+1).padStart(2,'0');
}