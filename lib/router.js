Router.configure ({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route ("/", {
    name: "homeIndex",
    data: function (){
        return {
            header: "Welcome to the Rocket Shop",
            message: "Your place for the rocket science."
        }
    }
})

Router.route("/about", {
    name: "homeAbout"
})

Router.route("/contact", {
    name: "contactAbout"
})