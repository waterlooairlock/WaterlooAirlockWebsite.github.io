$(document).ready(function () {
    var SCRIPT_ROOT = "../"
    if (window.location.href.includes("index.html"))
        SCRIPT_ROOT = "./"
    $("head").html($("head").html() +
        `
    <meta charset="utf-8">
    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="`+ SCRIPT_ROOT + `watlocklogotab.png" type="image/x-icon">
    <link rel="icon" href="`+ SCRIPT_ROOT + `watlocklogotab.png" type="image/x-icon">
    <!-- Bootstrap core CSS -->
    <link href="`+ SCRIPT_ROOT + `vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="`+ SCRIPT_ROOT + `vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

    <!-- Plugin CSS -->
    <link href="`+ SCRIPT_ROOT + `vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="`+ SCRIPT_ROOT + `css/style.css" rel="stylesheet">

    <!--Scripts-->
    `);

    function dynamicallyLoadScript(url) {
        var script = document.createElement("script");
        script.src = SCRIPT_ROOT + url;
        document.head.appendChild(script);
    }
    let script_list = ["vendor/jquery/jquery.min.js", "vendor/scrollreveal/scrollreveal.min.js", "vendor/jquery-easing/jquery.easing.min.js",
        "js/main.js", "vendor/bootstrap/js/bootstrap.bundle.min.js"]
    script_list.forEach(dynamicallyLoadScript)
    {/* <img class="rounded" src="`+SCRIPT_ROOT+`img/logo.jpg" style="width: 40px"; height="auto";> */ }

    let dark = (SCRIPT_ROOT == "./" && $(window).width() > 785) ? " " : "bg-dark";
    let logo = (SCRIPT_ROOT == "./" && $(window).width() > 785 ? "watlocklogowhite.png" : "watlocklogowhite.png");
    $('nav').html(
        `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top `+ dark + `" id="mainNav">
        <div class="container">

            <a class="navbar-brand" href="`+ SCRIPT_ROOT + `index"><img src="` + SCRIPT_ROOT + `` + logo + `" height="auto" width="100px" alt="watlockicon"></a>

            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="`+ SCRIPT_ROOT + `pages/MeetTheTeam" style="color:white">Meet The Team</a>
                </li>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="`+ SCRIPT_ROOT + `pages/timeline" style="color:white">Timeline</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="`+ SCRIPT_ROOT + `pages/CoopApplication" style="color:white">Co-Op</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="`+ SCRIPT_ROOT + `pages/joinus" style="color:white">Join Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="`+ SCRIPT_ROOT + `pages/sponsors"style="color:white">Sponsors</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="`+ SCRIPT_ROOT + `pages/contactus"style="color:white">Contact Us</a>
                </li>

                  </ul>
            </div>
        </div>

    </nav>
    `);

    $('footer').addClass('footer')(`
    <div class="container text-right" >
        <a href="https://www.linkedin.com/company/watlock/" target="_blank" id="social_media_icon">
            <i class="fa fa-linkedin-square fa-4x mb-3 media-icon" aria-hidden="true"></i>
        </a>
        &nbsp
        <a href="https://www.facebook.com/WaterlooAirlock/" target="_blank" id="social_media_icon">
            <i class="fa fa-facebook-square fa-4x mb-3 media-icon" aria-hidden="true"></i>
        </a>
        &nbsp
        <a href = "https://www.instagram.com/wat.lock" target = "_blank" id= "social_media_icon">
            <i class="fa fa-instagram fa-4x mb-3 media-icon" aria-hidden="true"></i>
        </a>
        &nbsp
        <a href = "https://twitter.com/lock_wat" target = "_blank" id= "social_media_icon">
            <i class="fa fa-twitter-square fa-4x mb-3 media-icon" aria-hidden="true"></i>
        </a>
    </div>`)

});
