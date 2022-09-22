Vue.createApp({
    data(){
        return{
            header: "My Website",
            headerItems: ["Item1","Item2","Item3","Item4"],
            title: "Welcome to MyHome",
            promotions: [
                {name:"Blackpink", color:"team1"},
                {name:"Girl's Day", color:"team2"},
            ],
            items: "",
            ct: 0,
            lst: [0,0,0],
        }
    },
    setup(){
        let items = [
            {name:"Jisoo", team:"bp_m1", color:"R"},
            {name:"Jennie", team:"bp_m2", color:"R"},
            {name:"Yura", team:"gd_m1", color:"B"},
            {name:"Min-ah", team:"gd_m2", color:"B"},
            {name:"Rose", team:"bp_m3", color:"R"},
            {name:"Lisa", team:"bp_m4", color:"R"},
            {name:"So Jin", team:"gd_m3", color:"B"},
            {name:"Hyeri", team:"gd_m4", color:"B"},
        ]

        let width = document.body.clientWidth
        if(width < 1201 && width>600){
            items = [
                {name:"Jisoo", team:"bp_m1", color:"R"},
                {name:"Yura", team:"gd_m1", color:"B"},
                {name:"Jennie", team:"bp_m2", color:"R"},
                {name:"Min-ah", team:"gd_m2", color:"B"},
                {name:"Rose", team:"bp_m3", color:"R"},
                {name:"So Jin", team:"gd_m3", color:"B"},
                {name:"Lisa", team:"bp_m4", color:"R"},
                {name:"Hyeri", team:"gd_m4", color:"B"},
            ]
        }else if(width <= 600){
            items = [
                {name:"Jisoo", team:"bp_m1", color:"R"},
                {name:"Jennie", team:"bp_m2", color:"R"},
                {name:"Rose", team:"bp_m3", color:"R"},
                {name:"Lisa", team:"bp_m4", color:"R"},
                {name:"Yura", team:"gd_m1", color:"B"},
                {name:"Min-ah", team:"gd_m2", color:"B"},
                {name:"So Jin", team:"gd_m3", color:"B"},
                {name:"Hyeri", team:"gd_m4", color:"B"},
            ]
        }

        return {
            items
        }
    },
    methods: {
        burgerin(){
            this.ct ++
            let burgerPage = document.querySelector(".burgerPage")
            burgerPage.classList.add("pageIn")
            burgerPage.classList.remove("pageOut")
            // console.log(this.ct)
            let click = 0
            document.addEventListener("click",function(evt){
                click ++
                if (click > 1){
                    // console.log("click: ",click)
                    this.removeEventListener("click", arguments.callee)
                    burgerPage.classList.remove("pageIn")
                    burgerPage.classList.add("pageOut")
                }
            })
            return this.ct
        },
    },
    mounted(){
        // let list = [0,0,0]
        var lst = JSON.parse( JSON.stringify(this.lst))
        window.addEventListener("resize", ()=>{
            let width = document.body.clientWidth
            if(width > 1200){
                lst[0] = 1
            }else if(width <= 1200 && width >600){
                lst[1] = 1
            }else if(width <= 600){
                lst[2] = 1
            }
            let ct = 0
            for(let i of lst){
                i == 1 ? ct++ : null
            }
            if(ct > 1){
                window.location.href = "../index.html"
            }
        }, true);
    },
}).mount("#app")


// 原生 js 做法
/* 
let burger = document.querySelector(".burger")
let burgerPage = document.querySelector(".burgerPage")
let exit = document.querySelector(".exit")

burger.onclick = function(){
    burgerPage.classList.add("pageIn")
    burgerPage.classList.remove("pageOut")
    setTimeout(()=>{
        exit.style = "display: block"
    },300)
}
exit.onclick = function(){
    exit.style = "display: none"
    burgerPage.classList.remove("pageIn")
    burgerPage.classList.add("pageOut")
}
*/


/*
if(window.attachEvent) {
    window.attachEvent('onresize', function() {
        alert('attachEvent - resize');
    });
}
else if(window.addEventListener) {
    window.addEventListener('resize', function() {
        console.log('addEventListener - resize');
    }, true);
}
else {
    //The browser does not support Javascript event binding
}
*/
/*
let list = [0,0,0]
window.addEventListener("resize", function(){
    let width = document.body.clientWidth
    if(width > 1200){
        list[0] = 1
    }else if(width <= 1200 && width >600){
        list[1] = 1
    }else if(width <= 600){
        list[2] = 1
    }
    let ct = 0
    for(let i of list){
        i == 1 ? ct++ : null
    }
    if(ct > 1){
        window.open("../index.html","_self")
    }

}, true);
*/