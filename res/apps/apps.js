//
// Exported functions
//
/*
 * getAllAppInfoList()
 * Returns: All the app info objects as a list.
 */
/* exported getAllAppInfoList */

/*
 * generateAllAppsHtmlString()
 * Returns: All the apps html string.
 */
/* exported generateAllAppsHtmlString */


// OK - Define class AppInfo
function AppInfo()
{
    "use strict";

    // Properties
    this.name      = "";    // App name
    this.appid     = "";    // App id
    this.icon      = "";    // App icon name(without extension. e.g: "fire", and you must provide "fire.png" file)
    this.intro     = "";    // App introduction
    this.desc      = "";    // **NOT USED**: App detailed description
    this.lines     = 0;     // If app introduction is too short, you can set this to an extra lines.

    // Instance Methods
    this.getAppName = function() {
        return this.name;
    };

    this.getAppId = function() {
        return this.appid;
    };

    this.getAppIconName = function() {
        return this.icon + ".png";
    };

    this.getUrl = function() {
        return "https://www.microsoft.com/store/apps/" + this.appid;
    };

    this.getIntro = function() {
        return this.intro;
    };

    this.getDescription = function() {
        return this.desc;
    };

    this.getExtraLines = function() {
        return this.lines;
    };
}

// OK - Get all the AppInfo objects as a list.
function getAllAppInfoList()
{
    "use strict";

    // initialize a list to hold all the app info objects.
    var allAppsList = [];

    // Initialize AppInfo object.
    // Initialization template.
    /*

        var winApp = new AppInfo();
        winApp.name      = "";           // App name
        winApp.appid     = "";           // Your app or product id (windows 10 app).
        winApp.icon      = "";           // App icon name(without extension)
        winApp.intro     = "";           // App introduction
        winApp.desc      = "NOT USED";   // **NOT USED**: App detailed description
        winApp.lines     = 0;            // 0, 1, 2. Extra lines.

    */

    // App 1. demo app.
    var winDemo = new AppInfo();
    winDemo.name      = ".";
    winDemo.appid     = "YYYYYYYYYY";
    winDemo.icon      = "yyyyy";
    winDemo.intro     = ".";
    winDemo.desc      = "";
    winDemo.lines     = 0;

    // Add to list
    allAppsList.push(winDemo);        // winDemo

    // return this list
    return allAppsList;
}

// OK - Generate all apps html codes as a string.
function generateAllAppsHtmlString()
{
    "use strict";

    var htmlString = '';

    // Get all the apps
    var allAppsList = getAllAppInfoList();
    var allAppsCount = allAppsList.length;
    for (var aIndex = 0; aIndex < allAppsCount; aIndex++)
    {
        // Fetch each app info here
        var appInfo = allAppsList[aIndex];
        var appName = appInfo.getAppName();
        var appIcon = appInfo.getAppIconName();
        var appUrl = appInfo.getUrl();
        var appIntro = appInfo.getIntro();
        var appLines = appInfo.getExtraLines();

        // Compose app icon style
        var appIconStyle = 'background-image: url(res/apps/' + appIcon + ');';

        // Check to see if we need to add extra lines
        var extraLineHtmlString = '';
        for (var tmpLine = 0; tmpLine < appLines; tmpLine++) {
            extraLineHtmlString += '<p>&nbsp;</p>';
        }

        // Compose html string
        htmlString += '<div class="col-10 col-md-8 col-lg-6 col-xl-5">';
        htmlString += '    <div class="card service-card mb-50 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">';
        htmlString += '        <div class="card-body">';
        htmlString += '            <a href="' + appUrl + '" class="wuy_app_icon" target="_blank" style="' + appIconStyle + '"></a>';
        htmlString += '            <h4>' + appName + '</h4>';
        htmlString += '            <p>' + appIntro + '</p>';
        htmlString += '            <br/>';
        htmlString += '            <a href="' + appUrl + '" target="_blank"><button type="button" class="btn btn-outline-dark">View on the Microsoft Store</button></a>';
        htmlString += extraLineHtmlString;
        htmlString += '        </div>';
        htmlString += '    </div>';
        htmlString += '</div>';
    }

    // Returns
    return htmlString;
}