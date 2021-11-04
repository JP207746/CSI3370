let blockList = new FileReader("links.rtf");
//var MyBlob = new Blob([file_in], {type : 'text/plain'});
let file = new file([""], {type : 'text/plain'});
file_in = blockList.readAsDataURL(file);
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: blockList },
    ["blocking"]
)