$(function(){

    var carouselList = $("#carousel ul");
    setInterval(changeSlide, 3000);  

    function changeSlide(){
        carouselList.animate({"marginLeft": -940}, 1000, moveFirstSlide); 
    };  

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    };

    function slideBack () {
        carouselList.animate({"marginLeft": +940}, 1000, moveFirstSlideBack);

        function moveFirstSlideBack () {
            var firstItem = carouselList.find("li:first"),
                lastItem = carouselList.find("li:last");
            firstItem.before(lastItem);
            carouselList.css({marginLeft:0});
        }
    };

    $("#previous").click(function(){
        slideBack();
    });

    $("#next").click(function(){
        changeSlide();
    });

});