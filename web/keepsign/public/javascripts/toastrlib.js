$(document).ready(function() {
    toastr.options.timeOut = "false";
    toastr.options.closeButton = true;
});
function showToast(tag,message){
    //tag: error,info,warning,success
    toastr[tag](message);
}
function showToastWidthPosition(tag,message,position){
    //tag: error,info,warning,success
    //position:bottom-center
    toastr.remove();
    toastr[tag](message,'',{positionClass:position});
}