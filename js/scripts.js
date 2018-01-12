$(function(){

    var carouselList = $("#carousel ul");
    //setInterval(changeSlide, 3000);  

    function changeSlide(){
        carouselList.animate({"marginLeft": -1880}, 1000, moveFirstSlide); 
    };  

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:-940});
    };

    function slideBack () {
        carouselList.animate({"marginLeft": 0}, 1000, moveFirstSlideBack);

        function moveFirstSlideBack () {
            var firstItem = carouselList.find("li:first"),
                lastItem = carouselList.find("li:last");
            firstItem.before(lastItem);
            carouselList.css({marginLeft:-940});
        }
    };

    $("#next").click(function(){
        changeSlide();
    });

    $("#previous").click(function(){
        slideBack();
    });
    
});