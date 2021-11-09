function createArray(input)
{
	var arr = input.split('\\\r\n');
	arr.pop();
	alert(arr);
	chrome.webRequest.onBeforeRequest.addListener(	
		function(details) { return { cancel: true }},
		{ urls: arr },
		["blocking"]
	)
}

const url = chrome.runtime.getURL('links.txt');
fetch(url)
    .then((response) => {
		if (!response.ok) {
           throw new Error("HTTP error " + response.status);
		}
		return response.text();
	})
    .then((str) => createArray(str));