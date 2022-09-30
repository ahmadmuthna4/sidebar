/*global $ */

$(function () {
    'use strict';
    $('.info-list li').click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});


let opin=document.getElementById("opin");
let sidebar=document.getElementById("sidebar");
let list=document.getElementById("list");
let close=document.getElementById("close");
let listContent=document.getElementById("list-content");
opin.addEventListener("click",()=>{
    sidebar.style.width="180px";
    const list = setTimeout(viewList, 100);
    const listContent = setTimeout(viewListContent, 180);
    console.log("ljoguc")
})
close.addEventListener("click",()=>{
     listContent.style.width="0";
     setTimeout(()=>{
        list.style.width="0";
     }, 100);
     setTimeout(()=>{
        sidebar.style.width="0";
     }, 180);
   
    console.log("ljoguc")
})

function viewList() {
    list.style.width="90%";
}
function viewListContent() {
    listContent.style.width="90%";
}