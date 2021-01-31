// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
import {generateQuery} from 'backend/logic.jsw';
import wixLocation from 'wix-location';
import {session} from 'wix-storage';

let symptoms = [];
let duration;
let intensity;

$w.onReady(function () {
	
});

export async function generate_click(event) {
	for (var i=1; i<9; i++) {
		let selectionTag = "#selectionTags" + i;
		let val = $w(selectionTag).value[0];
		
		if (val === undefined) {
			continue;
		} else {
			symptoms.push(val);
		}
	}

	let durationVal = $w('#dropdown1').value;

	if (durationVal.includes("15")) {
		duration = 30;
	} else {
		duration = 45;
	}

	intensity = $w('#dropdown2').value;

	if (symptoms.length !== 0 && duration !== undefined && intensity !== undefined) {
		let data = await generateQuery(symptoms, duration, intensity);

		for (var j=1; j<data.length+1; j++) {
			let fitnessName = "fitness" + j;
			let yogaName = "yoga" + j;
			session.setItem(fitnessName, data[j-1][0]);
			session.setItem(yogaName, data[j-1][1]);
		}

		wixLocation.to('/exercises');
	}
}