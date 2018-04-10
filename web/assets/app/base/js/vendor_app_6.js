/**
 * App base scripts. Uses raw javascript and jquery.
 */


//////////////////////////////////////////////
// Log debug
//////////////////////////////////////////////
if (_app.isDebug) {
    console.log('***** DEBUG MODE ENABLED *****');
    console.log('Global var (_app):');
    console.log(_app);
}


//////////////////////////////////////////////
// Initializes components
//////////////////////////////////////////////
$(document).ready(function () {
    //////////////////////////////////////////////
    // left sidebar
    /////////////////////////////////////////////////////
    var $leftSidebarContainer = $(".left-sidebar-container");

    // Compact menu on initialize
    if ($(this).width() < 768) {
        $leftSidebarContainer.addClass("-compacted");
    }

    // Compact menu when screen is less than 768px
    $(window).bind("resize", function () {
        if ($(this).width() < 768) {
            $leftSidebarContainer.addClass('-compacted')
        } else {
            $leftSidebarContainer.removeClass('-compacted')
        }
    });

    // Compact menu trough button
    $('.navbar-minimalize').click(function () {
        $leftSidebarContainer.toggleClass("-compacted");
    });

    // Instantiate MetsiMenu
    $('#js_navbar').metisMenu();


    //////////////////////////////////////////////
    // dropdown toggle
    /////////////////////////////////////////////////////
    var $dropdowns = $('.dropdown-toggle');
    $dropdowns.click(function (event) {
        event.preventDefault();
        $(this).next('.dropdown-menu').toggle();
    });


    //////////////////////////////////////////////
    // Document click to reset features
    //////////////////////////////////////////////
    $(document).click(function(event) {
        // NOTE: Use "$dropdowns.has(event.target)" if target is inside
        $dropdowns.each(function() {
            if(!$(this).is(event.target)) {
                $(this).next('.dropdown-menu').hide();
            }
        });
    });
});








// Local Storage functions
// Set proper body class and plugins based on user configuration
$(document).ready(function () {
    if (localStorageSupport) {

        var collapse = localStorage.getItem("collapse_menu");
        var fixedsidebar = localStorage.getItem("fixedsidebar");
        var fixednavbar = localStorage.getItem("fixednavbar");
        var boxedlayout = localStorage.getItem("boxedlayout");
        var fixedfooter = localStorage.getItem("fixedfooter");

        var body = $('body');






        if (boxedlayout == 'on') {
            body.addClass('boxed-layout');
        }

        if (fixedfooter == 'on') {
            $(".footer").addClass('fixed');
        }
    }
});

// check if browser support HTML5 local storage
function localStorageSupport() {
    return (('localStorage' in window) && window['localStorage'] !== null)
}

// For demo purpose - animation css script
function animationHover(element, animation) {
    element = $(element);
    element.hover(
        function () {
            element.addClass('animated ' + animation);
        },
        function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}

// Dragable panels
function WinMove() {
    var element = "[class*=col]";
    var handle = ".ibox-title";
    var connect = "[class*=col]";
    $(element).sortable(
        {
            handle: handle,
            connectWith: connect,
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8
        })
        .disableSelection();
}