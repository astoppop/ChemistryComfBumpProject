Jmol._isAsync = true;
var jmolApplet0;
var s = document.location.search;

// Jmol._debugCode = (s.indexOf("debugcode") >= 0);
jmol_isReady = function(applet) {
    document.title = (applet._id + " - Jmol " + Jmol.___JmolVersion);
    Jmol._getElement(applet, "appletdiv").style.border="1px solid blue";
}

var Info = {
    width: 300,
    height: 300,
    debug: false,
    color: "#000000",
    addSelectionOptions: false,
    use: "HTML5",
    j2sPath: "jsmol/js/j2s",
    isSigned: true,
    script: "set platformSpeed 2;set multipleBondSpacing 0.4;set zoomlarge false;set antialiasDisplay;background white;frank off;",
    readyFunction: jmol_isReady,
    disableJ2SLoadMonitor: true,
    disableInitialConsole: true,
    allowJavaScript: true,
    console: "",
};

$(document).ready(function() {
    $("#appdiv0").html(Jmol.getAppletHtml("jmolApplet0", Info));
})
var lastPrompt = 0;