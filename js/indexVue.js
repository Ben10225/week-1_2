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
}).mount("#app")