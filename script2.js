var PublisherID = "9e6be2cf-d822-4fd2-b778-432266e6b2bf";
	var AppName = "star galaxy";
	var SlotName = "star galaxy";
	
function CallAds(runtime)
	{
		console.log("Called Get Ad");
		try {
			console.log("Called Ad try");
			// display ad
			getKaiAd({
				publisher: PublisherID,
	            app: AppName,
	            slot: SlotName,
	            test: 0,
				/* only for responsive ads */
				/*h: adMaxHeight,
				w: adMaxWidth,
				container: adContainer,*/
				/* up to here */

				/* error codes */
				
				onerror: err => console.error('Ads error catch:', err),
				onready: ad => {
					ad.call('display')
					{
					runtime.globalVars.score = runtime.globalVars.score + runtime.globalVars.reward;
					
			
					}
						/* , {
						tabindex: adTabIndex
						navClass: 'navItem',
						display: 'block'
					} */
					ad.on('click', () => console.log('ad clicked'))
					ad.on('close', closeAd)
					ad.on('display', displayAd)

				}
			});
		} catch (e) {
			var message = 'ds not available: ';
			console.log("Called Ad catch");
			console.log(message);
			/*if (!fullscreenAd) {
				adContainer.innerText = message;
			}*/
		}
	}

	function displayAd() {
		console.log('ad displayed');
		/*if (fullscreenAd) {
			app.fullAdVisible = true;
		}*/
		/* do something, like pause the app */
	}

	function closeAd() {
		console.log('ad closed');
		//if (fullscreenAd) {
		//	setTimeout(function () {
		//		app.fullAdVisible = false;
		runtime.globalVars.score = runtime.globalVars.score + runtime.globalVars.reward;
		//		app.activeNavItem.focus();
		//	}, 200); /* delayed to avoid background button execution */
		//}
	}