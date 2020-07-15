export default {
formateDate(time) {
    if (!time) return
    return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
}
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

    // RegExp.$1,test,exec;
    // var r = /(\d+)-(\w+)/;//RegExp.$1为第一个子匹配（表达式中括号的部分）,最多是$99
    // var b=r.exec("2013-love-b");//返回整个匹配的字符串
    // console.log(b+"   "+RegExp.$1+"=="+RegExp.$2);
    
    // b = r.test("1997-good");//返回是否存在满足匹配
    // console.log(b+"   "+RegExp.$1+"=="+RegExp.$2)

    return format;
}


