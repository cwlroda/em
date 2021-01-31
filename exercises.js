// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
import {session} from 'wix-storage';

$w.onReady(function () {
	// Write your JavaScript here

	// To select an element by ID use: $w("#elementID")

	// Click "Preview" to run your code
	var i = 1;

	$w("#section1col2rep1").forEachItem(($item, itemData, index) => {
		let fitnessName = "fitness" + i;
		let yogaName = "yoga" + i;
		
		$item("#videoPlayer1").src = session.getItem(fitnessName);
		$item("#videoPlayer2").src = session.getItem(yogaName);

		i++;
	});
});