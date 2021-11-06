function readTextFile(callback)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "links.rtf", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
				var array = allText.split('\\');
				alert(array);
                return allText;
            }
        }
    }
    rawFile.send(null);
	return null;
}

chrome.webRequest.onBeforeRequest.addListener(	
	function(details) { return { cancel: true }},
    { urls: readTextFile() },
    ["blocking"]
)