const cls = "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 ";
const new_cls = "border-indigo-500 text-gray-900 ";

let act_tab = String(window.location.href);
act_tab = act_tab.split("/")
act_tab = act_tab[act_tab.length-1]


act_tab = act_tab.substring(0,act_tab.length-5)


if(act_tab === "index" || act_tab===null || act_tab==="") {
    act_tab = "home";
}
else if(act_tab === "admin_login")  act_tab = "login";
const tab_change = document.getElementById(act_tab);

const last_act = document.getElementsByClassName(new_cls);
for(var i =0; i<last_act.length;i++) {
    // console.log(last_act[i])
    last_act[i].className = last_act[i].className.replace(new_cls,cls)
    // console.log(last_act[i])
}
tab_change.className = tab_change.className.replace(cls,new_cls);





// for anime

const anime_titles = document.getElementsByClassName("anime_title");

const anime_texts = document.getElementsByClassName("anime_text");
const anime_titles2 = document.getElementsByClassName("anime_title2");
const anime_texts2 = document.getElementsByClassName("anime_text2");
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


    Array.prototype.forEach.call(anime_titles, anime_title => {
        document.addEventListener('scroll', function(){
            if(isInViewport(anime_title)){
                // console.log("triggered")
                $(anime_title).show().addClass('animate__animated animate__fadeInLeft')
            }

        });
    })

    Array.prototype.forEach.call(anime_titles2, anime_title2 => {
       
            if(isInViewport(anime_title2)){
                // console.log("triggered")
                $(anime_title2).show().addClass('animate__animated animate__fadeInUp')
            }

        
    })

    Array.prototype.forEach.call(anime_texts2, anime_text2 => {
       
        if(isInViewport(anime_text2)){
            // console.log("triggered")
            $(anime_text2).show().addClass('animate__animated animate__fadeInUp')
        }

    
})


   


    Array.prototype.forEach.call(anime_texts, anime_text => {
        document.addEventListener('scroll', function(){
            if(isInViewport(anime_text)){
                // console.log("triggered")
                $(anime_text).show().addClass('animate__animated animate__fadeIn')
            }

        });
    })

