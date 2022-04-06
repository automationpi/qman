var app = new Vue({
    el: "#app",
    data:{
        image: "https://terminalroot.com.br/assets/img/about/author.jpg",
        name: "eriton",
        surname: "Santos",
        email: "eunaosei@gmail.com",
        telephone: "+55 (85) 9990-6664",
        gender: "mascule",
    },
    methods: {
        user_api: {
            axios.get("https://randomuser.me/api")
        },
    }
})
