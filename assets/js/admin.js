$(document).ready(function() {
    $(function(){
        const Ps = new PerfectScrollbar();
        $(".button-collapse").sideNav();
        var sideNavScrollbar = document.querySelector('.custom-scrollbar');
        Ps.initialize(sideNavScrollbar);  
      })
      
    $('.button-collapse').sideNav();

    $('.collapsible').collapsible();

    $('select').material_select();
});