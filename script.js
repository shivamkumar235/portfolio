
// var typed = new Typed(".text",{
//     strings: ["Frontend Developer", "Backend Developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     typedelay:1000,
//     loop:true,
    
// })

// let Experiencebtn = document.querySelector(".Experience");
// let Educationbtn = document.querySelector(".Education");
// let content1 =document.querySelector(".content1");
// let content2 = document.querySelector(".content2");

// Experiencebtn.addEventListener("click",function(){
//     content1.style.display = "block";
//     content2.style.display = "none";

// });

// Educationbtn.addEventListener("click",function(){
//     content2.style.display = "block";
//     content1.style.display = "none";


// })

// let skillname = document.querySelector(".container");
// let box = document.querySelector(".image-container");
// let per = document.querySelector(".image-container h1")
// let html = document.querySelector(".html");
// let css = document.querySelector(".css");
// let sql = document.querySelector(".sql");
// let javas = document.querySelector(".js");
// let py = document.querySelector(".py");
// let cp = document.querySelector(".c");
// let persentage = document.querySelector(".present");

// let htmlimage = document.querySelector(".html-img");
// let cssimage = document.querySelector(".css-img");
// let javasimage = document.querySelector(".js-img");
// let sqlimage = document.querySelector(".mysql-img");
// let pyimage = document.querySelector(".py-img");
// let cimage = document.querySelector(".c-img");
// let skills = document.querySelectorAll(".skill")




// skillname.addEventListener("mouseenter",function(){
//        box.style.display = "block"
//        box.style.display = "flex"
//        box.style.justifyContent = "center"
//        per.style.display = "block"
// })

// skillname.addEventListener("mouseleave",function(){
//     box.style.display = "none"
// })

// html.addEventListener("mouseenter",function(){
  
//     persentage.innerHTML = "95%"
//     htmlimage.style.display ="block"
   
  
// })
// css.addEventListener("mouseenter",function(){
//     persentage.innerHTML = "90%"
//     cssimage.style.display ="block"

// })
// javas.addEventListener("mouseenter",function(){
//     persentage.innerHTML = "70%"
//     javasimage.style.display ="block"

// })
// sql.addEventListener("mouseenter",function(){
//     persentage.innerHTML = "5%"
//     sqlimage.style.display ="block"

// })
// cp.addEventListener("mouseenter",function(){
//     persentage.innerHTML = "40%"
//     cimage.style.display ="block"

// })
// py.addEventListener("mouseenter",function(){
//     persentage.innerHTML = "35%"
//     pyimage.style.display ="block"

// })

// // -----------------------Remove-----------------------


// html.addEventListener("mouseleave",function(){
  
//     persentage.innerHTML = "95%"
//     htmlimage.style.display ="none"
   
  
// })
// css.addEventListener("mouseleave",function(){
//     persentage.innerHTML = "90%"
//     cssimage.style.display ="none"

// })
// javas.addEventListener("mouseleave",function(){
//     persentage.innerHTML = "70%"
//     javasimage.style.display ="none"

// })
// sql.addEventListener("mouseleave",function(){
//     persentage.innerHTML = "5%"
//     sqlimage.style.display ="none"

// })
// cp.addEventListener("mouseleave",function(){
//     persentage.innerHTML = "40%"
//     cimage.style.display ="none"

// })
// py.addEventListener("mouseleave",function(){
//     persentage.innerHTML = "35%"
//     pyimage.style.display ="none"

// })




// skills.forEach(function(s){
//        s.addEventListener("mouseenter",function(){
//             var image = s.getAttribute("data-image");
//             box.style.backgroundImage = `url(${image})`
           
//        })
// })

var typed = new Typed(".text",{
    strings: ["Frontend Developer", "Vlogger"],
    typeSpeed:100,
    backSpeed:100,
    typedelay:1000,
    loop:true,
    
})

let Experiencebtn = document.querySelector(".Experience");
let Educationbtn = document.querySelector(".Education");
let content1 =document.querySelector(".content1");
let content2 = document.querySelector(".content2");

Experiencebtn.addEventListener("click",function(){
    content1.style.display = "block";
    content2.style.display = "none";

});

Educationbtn.addEventListener("click",function(){
    content2.style.display = "block";
    content1.style.display = "none";


})

let skillname = document.querySelector(".container");
let box = document.querySelector(".image-container");
let per = document.querySelector(".image-container h1")
let html = document.querySelector(".html");
let css = document.querySelector(".css");
let sql = document.querySelector(".sql");
let javas = document.querySelector(".js");
let py = document.querySelector(".py");
let cp = document.querySelector(".c");
let persentage = document.querySelector(".present");

let htmlimage = document.querySelector(".html-img");
let cssimage = document.querySelector(".css-img");
let javasimage = document.querySelector(".js-img");
let sqlimage = document.querySelector(".mysql-img");
let pyimage = document.querySelector(".py-img");
let cimage = document.querySelector(".c-img");
let skills = document.querySelectorAll(".skill")




skillname.addEventListener("mouseenter",function(){
       box.style.display = "block"
       box.style.display = "flex"
       box.style.justifyContent = "center"
       per.style.display = "block"
})

skillname.addEventListener("mouseleave",function(){
    box.style.display = "none"
})

html.addEventListener("mouseenter",function(){
  
    persentage.innerHTML = "95%"
    htmlimage.style.display ="block"
   
  
})
css.addEventListener("mouseenter",function(){
    persentage.innerHTML = "90%"
    cssimage.style.display ="block"

})
javas.addEventListener("mouseenter",function(){
    persentage.innerHTML = "70%"
    javasimage.style.display ="block"

})
sql.addEventListener("mouseenter",function(){
    persentage.innerHTML = "50%"
    sqlimage.style.display ="block"

})
cp.addEventListener("mouseenter",function(){
    persentage.innerHTML = "40%"
    cimage.style.display ="block"

})
py.addEventListener("mouseenter",function(){
    persentage.innerHTML = "35%"
    pyimage.style.display ="block"

})

// -----------------------Remove-----------------------


html.addEventListener("mouseleave",function(){
  
    persentage.innerHTML = "95%"
    htmlimage.style.display ="none"
   
  
})
css.addEventListener("mouseleave",function(){
    persentage.innerHTML = "90%"
    cssimage.style.display ="none"

})
javas.addEventListener("mouseleave",function(){
    persentage.innerHTML = "70%"
    javasimage.style.display ="none"

})
sql.addEventListener("mouseleave",function(){
    persentage.innerHTML = "50%"
    sqlimage.style.display ="none"

})
cp.addEventListener("mouseleave",function(){
    persentage.innerHTML = "40%"
    cimage.style.display ="none"

})
py.addEventListener("mouseleave",function(){
    persentage.innerHTML = "35%"
    pyimage.style.display ="none"

})




skills.forEach(function(s){
       s.addEventListener("mouseenter",function(){
            var image = s.getAttribute("data-image");
            box.style.backgroundImage = `url(${image})`
           
       })
})