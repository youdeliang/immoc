export function formateDate(time) {
    if (!time) return
    return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
}

export function timeFormat(format) {
    const time = new Date()
    var date = {
        "M+": time.getMonth() + 1,
        "D+": time.getDate(),
        "Y+": time.getFullYear(),
        "h+": time.getHours(),
        "m+": time.getMinutes(),
        "s+": time.getSeconds(),
        "q+": Math.floor((time.getMonth()+3)/3),  //季度
        "S+": time.getMilliseconds()              //毫秒
    }
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ?
                date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }

    return format;
}