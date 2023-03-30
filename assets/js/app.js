let _flag = 1
let show = document.querySelector(".hamburgerMenu")
 let _liShow = document.querySelector("._li")
 let _more = document.querySelector(".more")
 console.log(_liShow);
 let _h = document.querySelector('.acormenu').clientHeight
 let _moreMenu = document.querySelector('.moreMenu').clientHeight
 //console.log(_moreMenu);
 // console.log(_h);
 document.querySelector('.acormenu').style.height =0+'0px'
document.querySelector('.moreMenu').style.height =0+'0px'


 
 


function menuIcon(e){
     
      let  _sp = e.children
    
    /* ============ */
    if(_flag % 2){
       //show.style.transform = 'translate(0)'
       show.classList.add('show-menu')
      _sp[1].style.opacity = '0' 
       _sp[0].style.transform='rotate(-56deg)'
       _sp[2].style.transform='rotate(56deg)'
    }else{
       _sp[1].style.opacity = '1'
       _sp[0].style.transform='rotate(0)'
       _sp[2].style.transform='rotate(0)'
    //show.style.transform = 'translate(-130%)'
    show.classList.remove('show-menu')
    }
    _flag++
}

_liShow.addEventListener('mousemove', () =>{
   document.querySelector('.acormenu').style.height =_h+'px'


   
})
_liShow.addEventListener('mouseleave', () =>{
   document.querySelector('.acormenu').style.height =0+'px'


   
})
_more.addEventListener('mousemove', () =>{
   document.querySelector('.moreMenu').style.height =_moreMenu+'px' 
})
_more.addEventListener('mouseleave', () =>{
  document.querySelector('.moreMenu').style.height =0+'px' 
})