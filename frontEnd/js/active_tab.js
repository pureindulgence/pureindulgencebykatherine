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
    console.log(last_act[i])
    last_act[i].className = last_act[i].className.replace(new_cls,cls)
    console.log(last_act[i])
}
tab_change.className = tab_change.className.replace(cls,new_cls);

