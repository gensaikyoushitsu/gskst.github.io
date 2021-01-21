
var obtn = document.getElementsByClassName("btn btn-lang-selector btn-orange");
var policy = document.getElementById("policy");
obtn[0].onclick = function(){
    console.log("日语")
    policy.src = "policy.html";
}
obtn[1].onclick = function(){
    console.log("英语")
    policy.src = "policy.html";
}
obtn[2].onclick = function(){
    console.log("中文")
    policy.src = "隐私政策.html";
}