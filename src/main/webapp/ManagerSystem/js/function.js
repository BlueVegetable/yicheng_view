function getAcademy(academy) {
    switch(academy) {
        case 0:return "华南理工大学";
        case 1:return "华南师范大学";
        case 2:return "暨南大学";
        case 3:return "广东外语外贸大学";
        case 4:return "汕头大学";
        case 5:return "广东财经大学";
        default:return "";
    }
}
function getProfession(profession) {
    switch(profession) {
        case "0":return "计算机科学与计划";
        default:return "";
    }
}
function getLevel(level) {
    switch(level) {
        case 0 : return "专科";
        case 1 : return "专升本";
        default : return "";
    }
}
function getType(type) {
    switch(type) {
        case 0 : return "自学考试";
        case 1 : return "远程教育";
        case 2 : return "成人高考";
        default : return "";
    }
}