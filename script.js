$(document).ready(function(){
 // $("#btn").click(function(){
 //   $("#img").attr("src", "./images/car1.jpg").hide(5000)
 //  
 // })

  $(".fa-sharp").click(function(){
    $("#input").attr("type", "text")
  })


  //$("#btn").click(function(){
  //  $("#test").load("readme.txt")
  //})

  $("#btn").click(function(){
    $.get({
      url: "server.js",
      data: 1,
      success:function(data){
        console.log(data)
      } 
    })
  })
})

/*
traversing
this is same as complex selector also known as dom tree

common method for traversing

1.  ancestor method
    parent
    parents
    parentsUntil

2. descendant selector
    children
    find

3.  sibling selector
    sibling
    next
    prev

*/