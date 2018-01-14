function aa(){
    $.ajax({
        url: 'http://file-download-baseservice-prod.ipaas.enncloud.cn/test-0001/c76f8efc-2300-487a-b33a-2b48b645c4dc.jpg?e=1508140726&op=upload&token=1:46da6863d820adb23bc5:1d914ea14e7642fb777a67816913cbbaceed4f36ae99dfda8a19d2b019e7c175',
        type: 'POST',
        cache: false,
        data: new FormData($('#uploadForm')[0]),
        processData: false,
        contentType: false
    }).done(function(res) {
        alert(res);

    }).fail(function(res) {
        alert(res.statusText );
    });
}