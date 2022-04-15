var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function getFormatedDate(date){
    let str = "";
    str += normilizeTime(date.getDate()) + '.';
    str += normilizeTime(date.getMonth() + 1) + '.';
    str += date.getFullYear() +' ';
    str += normilizeTime(date.getHours()) +':';
    str += normilizeTime(date.getMinutes()) + ' ';
    str += days[ date.getDay() ];
    return str;
}

function normilizeTime(t){
    let s = t.toString()
    if(s.length == 1){
        return '0' + s;
    }
    return s;
}
