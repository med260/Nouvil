let stars       = document.getElementById('stars');  /// D is smaaalll
let moon        = document.getElementById('moon'); 
let mountains3  = document.getElementById('mountains3'); 
let mountains4  = document.getElementById('mountains4'); 
let river       = document.getElementById('river'); 
let boat        = document.getElementById('boat'); 
let nouvil      = document.querySelector(".novil");
window.onscroll = function(){
    let value= scrollY ; 
    stars.style.left          = value     +'px';
    moon.style.top            = value * 4+'px';
    mountains3.style.top      = value * 2.5+'px';
    mountains4.style.top      = value *1.2   +'px';
    river.style.top           = value  *1.1+'px';
    boat.style.top           = value * 1.1  +'px';
    boat.style.left           = value * 3.5 +'px';
    nouvil.style.fontSize     = value +'px';
    if (scrollY>= 67)
    {
        nouvil.style.fontSize     = 70 +'px';
        nouvil.style.position     = 'fixed';
        if(scrollY >= 418 )
        {
            nouvil.style.display     = 'none';
            
        }
        else
        {
            nouvil.style.display     = 'block';
        }
        if(scrollY >=124)
        {
    document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
}else{
    
    document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
    }
}
}


