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
// Global vars
//////////////////////////////////////////////
var $leftSidebarContainer = null,
    $mainContainerContainer = null;


//////////////////////////////////////////////
// Initializes components
//////////////////////////////////////////////
$(document).ready(function () {
    //////////////////////////////////////////////
    // left sidebar
    /////////////////////////////////////////////////////
    $leftSidebarContainer = $(".left-sidebar-container");
    $mainContainerContainer = $(".main-container-container");

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

        // Set containers height
        setContainersHeight();
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


    // Set containers height
    setContainersHeight();
});


// Set containers height
function setContainersHeight() {
    var windowHeight = $(window).height(),
        windowHeightPx = (windowHeight + 'px');

    $leftSidebarContainer.css({'max-height': windowHeightPx});
    $mainContainerContainer.css({'max-height': windowHeightPx});
}