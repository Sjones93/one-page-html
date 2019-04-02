function init(){
    let currentView = "home";
    let nextView = "";

    $("nav a").click(function(e){
        let pageName = e.currentTarget.id;

        if(pageName != currentView){
            $("." + currentView).css("display", "none");
            $("." + pageName).css("display", "block");
            currentView = pageName;


            console.log(currentView);
        }

        // if(pageName == currentView){
        //     $("." + currentView).css("display", "block");

        //     console.log(currentView);
        // }
        
        console.log(pageName);
    })
}



$(document).ready(function(){
    // $("." + currentView).css("display", "block");
    init();
});