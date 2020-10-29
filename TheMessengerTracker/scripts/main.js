let mySrc;
let x = 0;
let isAdvanced = false;
let hasWingsuit = false;
let hasGrapple = false;
let hasTabi = false;
let hasThistle = false;
let hasCrown = false;
let hasAmulet = false;
let hasFly = false;
let hasSun = false;
let hasMoon = false;
let hasAcro = false;
let hasNecro = false;
let hasClaustro = false;
let hasPyro = false;
let hasWindmill = false;

//Buttons
let advbtn = document.querySelector('.advbutton');
advbtn.onclick = function() {
	isAdvanced = true;
	updateType();
}
let nrmlbtn = document.querySelector('.nrmlbutton');
nrmlbtn.onclick = function() {
	isAdvanced = false;
	updateType();
}

//TypeUpdater
function updateType() {
	if(isAdvanced === true) {
		//alert("ADVANCED");
		document.getElementById('SealImages').style.visibility="visible";
	} else {
		//alert("NORMAL");
		document.getElementById('SealImages').style.visibility="hidden";
	}
}

//Seals
let villageSeal1 = document.querySelector('.villageSeal1');
villageSeal1.onclick = function() {
	mySrc = villageSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		villageSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		villageSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let autumnSeal1 = document.querySelector('.autumnSeal1');
autumnSeal1.onclick = function() {
	mySrc = autumnSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		autumnSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		autumnSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let autumnSeal2 = document.querySelector('.autumnSeal2');
autumnSeal2.onclick = function() {
	mySrc = autumnSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		autumnSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		autumnSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let autumnSeal3 = document.querySelector('.autumnSeal3');
autumnSeal3.onclick = function() {
	mySrc = autumnSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		autumnSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		autumnSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let autumnSeal4 = document.querySelector('.autumnSeal4');
autumnSeal4.onclick = function() {
	mySrc = autumnSeal4.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		autumnSeal4.setAttribute ('src','images/GraySealCheck.png');
	} else {
		autumnSeal4.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let forlornSeal1 = document.querySelector('.forlornSeal1');
forlornSeal1.onclick = function() {
	mySrc = forlornSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		forlornSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		forlornSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let forlornSeal2 = document.querySelector('.forlornSeal2');
forlornSeal2.onclick = function() {
	mySrc = forlornSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		forlornSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		forlornSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let catacombsSeal1 = document.querySelector('.catacombsSeal1');
catacombsSeal1.onclick = function() {
	mySrc = catacombsSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		catacombsSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		catacombsSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let catacombsSeal2 = document.querySelector('.catacombsSeal2');
catacombsSeal2.onclick = function() {
	mySrc = catacombsSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		catacombsSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		catacombsSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let catacombsSeal3 = document.querySelector('.catacombsSeal3');
catacombsSeal3.onclick = function() {
	mySrc = catacombsSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		catacombsSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		catacombsSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let bambooSeal1 = document.querySelector('.bambooSeal1');
bambooSeal1.onclick = function() {
	mySrc = bambooSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		bambooSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		bambooSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let bambooSeal2 = document.querySelector('.bambooSeal2');
bambooSeal2.onclick = function() {
	mySrc = bambooSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		bambooSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		bambooSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let bambooSeal3 = document.querySelector('.bambooSeal3');
bambooSeal3.onclick = function() {
	mySrc = bambooSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		bambooSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		bambooSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let howlingSeal1 = document.querySelector('.howlingSeal1');
howlingSeal1.onclick = function() {
	mySrc = howlingSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		howlingSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		howlingSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let howlingSeal2 = document.querySelector('.howlingSeal2');
howlingSeal2.onclick = function() {
	mySrc = howlingSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		howlingSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		howlingSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let howlingSeal3 = document.querySelector('.howlingSeal3');
howlingSeal3.onclick = function() {
	mySrc = howlingSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		howlingSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		howlingSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let marshSeal1 = document.querySelector('.marshSeal1');
marshSeal1.onclick = function() {
	mySrc = marshSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		marshSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		marshSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let marshSeal12 = document.querySelector('.marshSeal2');
marshSeal2.onclick = function() {
	mySrc = marshSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		marshSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		marshSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let marshSeal3 = document.querySelector('.marshSeal3');
marshSeal3.onclick = function() {
	mySrc = marshSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		marshSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		marshSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let cragsSeal1 = document.querySelector('.cragsSeal1');
cragsSeal1.onclick = function() {
	mySrc = cragsSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cragsSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		cragsSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let cragsSeal2 = document.querySelector('.cragsSeal2');
cragsSeal2.onclick = function() {
	mySrc = cragsSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cragsSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		cragsSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let cragsSeal3 = document.querySelector('.cragsSeal3');
cragsSeal3.onclick = function() {
	mySrc = cragsSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cragsSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		cragsSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let glacialSeal1 = document.querySelector('.glacialSeal1');
glacialSeal1.onclick = function() {
	mySrc = glacialSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		glacialSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		glacialSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let glacialSeal2 = document.querySelector('.glacialSeal2');
glacialSeal2.onclick = function() {
	mySrc = glacialSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		glacialSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		glacialSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let glacialSeal3 = document.querySelector('.glacialSeal3');
glacialSeal3.onclick = function() {
	mySrc = glacialSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		glacialSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		glacialSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let towerSeal1 = document.querySelector('.towerSeal1');
towerSeal1.onclick = function() {
	mySrc = towerSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		towerSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		towerSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let towerSeal2 = document.querySelector('.towerSeal2');
towerSeal2.onclick = function() {
	mySrc = towerSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		towerSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		towerSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let towerSeal3 = document.querySelector('.towerSeal3');
towerSeal3.onclick = function() {
	mySrc = towerSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		towerSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		towerSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let cloudruinSeal1 = document.querySelector('.cloudruinSeal1');
cloudruinSeal1.onclick = function() {
	mySrc = cloudruinSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cloudruinSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		cloudruinSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let cloudruinSeal2 = document.querySelector('.cloudruinSeal2');
cloudruinSeal2.onclick = function() {
	mySrc = cloudruinSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cloudruinSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		cloudruinSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let cloudruinSeal3 = document.querySelector('.cloudruinSeal3');
cloudruinSeal3.onclick = function() {
	mySrc = cloudruinSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cloudruinSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		cloudruinSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let cloudruinSeal4 = document.querySelector('.cloudruinSeal4');
cloudruinSeal4.onclick = function() {
	mySrc = cloudruinSeal4.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cloudruinSeal4.setAttribute ('src','images/GraySealCheck.png');
	} else {
		cloudruinSeal4.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let underworldSeal1 = document.querySelector('.underworldSeal1');
underworldSeal1.onclick = function() {
	mySrc = underworldSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		underworldSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		underworldSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let underworldSeal2 = document.querySelector('.underworldSeal2');
underworldSeal2.onclick = function() {
	mySrc = underworldSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		underworldSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		underworldSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let underworldSeal3 = document.querySelector('.underworldSeal3');
underworldSeal3.onclick = function() {
	mySrc = underworldSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		underworldSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		underworldSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let underworldSeal4 = document.querySelector('.underworldSeal4');
underworldSeal4.onclick = function() {
	mySrc = underworldSeal4.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		underworldSeal4.setAttribute ('src','images/GraySealCheck.png');
	} else {
		underworldSeal4.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let sunkenSeal1 = document.querySelector('.sunkenSeal1');
sunkenSeal1.onclick = function() {
	mySrc = sunkenSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		sunkenSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		sunkenSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let sunkenSeal2 = document.querySelector('.sunkenSeal2');
sunkenSeal2.onclick = function() {
	mySrc = sunkenSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		sunkenSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		sunkenSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let sunkenSeal3 = document.querySelector('.sunkenSeal3');
sunkenSeal3.onclick = function() {
	mySrc = sunkenSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		sunkenSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		sunkenSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let riviereSeal1 = document.querySelector('.riviereSeal1');
riviereSeal1.onclick = function() {
	mySrc = riviereSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		riviereSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		riviereSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let riviereSeal2 = document.querySelector('.riviereSeal2');
riviereSeal2.onclick = function() {
	mySrc = riviereSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		riviereSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		riviereSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let riviereSeal3 = document.querySelector('.riviereSeal3');
riviereSeal3.onclick = function() {
	mySrc = riviereSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		riviereSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		riviereSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let skylandsSeal1 = document.querySelector('.skylandsSeal1');
skylandsSeal1.onclick = function() {
	mySrc = skylandsSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		skylandsSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		skylandsSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let skylandsSeal2 = document.querySelector('.skylandsSeal2');
skylandsSeal2.onclick = function() {
	mySrc = skylandsSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		skylandsSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		skylandsSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let skylandsSeal3 = document.querySelector('.skylandsSeal3');
skylandsSeal3.onclick = function() {
	mySrc = skylandsSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		skylandsSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		skylandsSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}

//Inventory
let windmillT = document.querySelector('.windmillBW');
windmillT.onclick = function() {
    mySrc = windmillT.getAttribute('src');
    if(mySrc === 'images/Icon_WindmillShurikenBW.png') {
      windmillT.setAttribute ('src','images/Icon_WindmillShuriken.png');
	  hasWindmill = true;
    } else {
      windmillT.setAttribute ('src','images/Icon_WindmillShurikenBW.png');
	  hasWindmill = false;
    }
	logic();
}

let wingsuitT = document.querySelector('.wingsuitBW');
wingsuitT.onclick = function() {
	mySrc = wingsuitT.getAttribute('src');
	if(mySrc === 'images/Icon_WingsuitBW.png') {
		wingsuitT.setAttribute ('src','images/Icon_Wingsuit.png');
		hasWingsuit = true;
	} else {
		wingsuitT.setAttribute ('src','images/Icon_WingsuitBW.png');
		hasWingsuit = false;
	}
	logic();
}

let grappleT = document.querySelector('.grappleBW');
grappleT.onclick = function() {
	mySrc = grappleT.getAttribute('src');
	if(mySrc === 'images/Icon_GraplouBW.png') {
		grappleT.setAttribute ('src','images/Icon_Graplou.png');
		hasGrapple = true;
	} else {
		grappleT.setAttribute ('src','images/Icon_GraplouBW.png');
		hasGrapple = false;
	}
	logic();
}

let tabiT = document.querySelector('.tabiBW');
tabiT.onclick = function() {
	mySrc = tabiT.getAttribute('src');
	if(mySrc === 'images/Icon_LightfootTabiBW.png') {
		tabiT.setAttribute ('src','images/Icon_LightfootTabi.png');
		hasTabi = true;
	} else {
		tabiT.setAttribute ('src','images/Icon_LightfootTabiBW.png');
		hasTabi = false;
	}
	logic();
}

let candleT = document.querySelector('.candleBW');
candleT.onclick = function() {
	mySrc = candleT.getAttribute('src');
	if(mySrc === 'images/Icon_CandleBW.png') {
		candleT.setAttribute ('src','images/Icon_Candle.png');
		x = 1;
	} else if(x===1){
		candleT.setAttribute ('src','images/Icon_AstralTeaSeed.png');
		x = 2;
	} else if(x===2){
		candleT.setAttribute ('src','images/Icon_CandleAndSeeds.png');
		x = 3;
	} else if(x===3) {
		candleT.setAttribute ('src','images/Icon_AstralTeaLeaf.png');
		x = 4;
	} else if(x===4) {
		candleT.setAttribute ('src','images/Icon_CandleAndLeaves.png');
		x = 0;
	} else {
		candleT.setAttribute ('src','images/Icon_CandleBW.png');
	}
}

let shellT = document.querySelector('.shellBW');
shellT.onclick = function() {
	mySrc = shellT.getAttribute('src');
	if(mySrc === 'images/Icon_EnchantedSeashellBW.png') {
		shellT.setAttribute ('src','images/Icon_EnchantedSeashell.png');
	} else {
		shellT.setAttribute ('src','images/Icon_EnchantedSeashellBW.png');
	}
}

let thistleT = document.querySelector('.thistleBW');
thistleT.onclick = function() {
	mySrc = thistleT.getAttribute('src');
	if(mySrc === 'images/Icon_PowerThistleBW.png') {
		thistleT.setAttribute ('src','images/Icon_PowerThistle.png');
		hasThistle = true;
	} else {
		thistleT.setAttribute ('src','images/Icon_PowerThistleBW.png');
		hasThistle = false;
	}
	logic();
}

let crownT = document.querySelector('.crownBW');
crownT.onclick = function() {
	mySrc = crownT.getAttribute('src');
	if(mySrc === 'images/Icon_DemonCrownBW.png') {
		crownT.setAttribute ('src','images/Icon_DemonCrown.png');
		hasCrown = true;
	} else {
		crownT.setAttribute ('src','images/Icon_DemonCrownBW.png');
		hasCrown = false;
	}
	logic();
}

let amuletT = document.querySelector('.amuletBW');
amuletT.onclick = function() {
	mySrc = amuletT.getAttribute('src');
	if(mySrc === 'images/Icon_NecromancerAmuletBW.png') {
		amuletT.setAttribute ('src','images/Icon_NecromancerAmulet.png');
		hasAmulet = true;
	} else {
		amuletT.setAttribute ('src','images/Icon_NecromancerAmuletBW.png');
		hasAmulet = false;
	}
	logic();
}

let flyT = document.querySelector('.flyBW');
flyT.onclick = function() {
	mySrc = flyT.getAttribute('src');
	if(mySrc === 'images/Icon_MagicFireflyBW.png') {
		flyT.setAttribute ('src','images/Icon_MagicFirefly.png');
		hasFly = true;
	} else {
		flyT.setAttribute ('src','images/Icon_MagicFireflyBW.png');
		hasFly = false;
	}
	logic();
}

let sunT = document.querySelector('.sunBW');
sunT.onclick = function() {
	mySrc = sunT.getAttribute('src');
	if(mySrc === 'images/Icon_SunCrestBW.png') {
		sunT.setAttribute ('src','images/Icon_SunCrest.png');
		hasSun = true;
	} else {
		sunT.setAttribute ('src','images/Icon_SunCrestBW.png');
		hasSun = false;
	}
	logic();
}

let moonT = document.querySelector('.moonBW');
moonT.onclick = function() {
	mySrc = moonT.getAttribute('src');
	if(mySrc === 'images/Icon_MoonCrestBW.png') {
		moonT.setAttribute ('src','images/Icon_MoonCrest.png');
		hasMoon = true;
	} else {
		moonT.setAttribute ('src','images/Icon_MoonCrestBW.png');
		hasMoon = false;
	}
	logic();
}

let chaosT = document.querySelector('.chaosBW');
chaosT.onclick = function() {
	mySrc = chaosT.getAttribute('src');
	if(mySrc === 'images/Icon_KeyChaosBW.png') {
		chaosT.setAttribute ('src','images/Icon_KeyChaos.png');
	} else {
		chaosT.setAttribute ('src','images/Icon_KeyChaosBW.png');
	}
}

let hopeT = document.querySelector('.hopeBW');
hopeT.onclick = function() {
	mySrc = hopeT.getAttribute('src');
	if(mySrc === 'images/Icon_KeyHopeBW.png') {
		hopeT.setAttribute ('src','images/Icon_KeyHope.png');
	} else {
		hopeT.setAttribute ('src','images/Icon_KeyHopeBW.png');
	}
}

let courageT = document.querySelector('.courageBW');
courageT.onclick = function() {
	mySrc = courageT.getAttribute('src');
	if(mySrc === 'images/Icon_KeyCourageBW.png') {
		courageT.setAttribute ('src','images/Icon_KeyCourage.png');
	} else {
		courageT.setAttribute ('src','images/Icon_KeyCourageBW.png');
	}
}

let loveT = document.querySelector('.loveBW');
loveT.onclick = function() {
	mySrc = loveT.getAttribute('src');
	if(mySrc === 'images/Icon_KeyLoveBW.png') {
		loveT.setAttribute ('src','images/Icon_KeyLove.png');
	} else {
		loveT.setAttribute ('src','images/Icon_KeyLoveBW.png');
	}
}

let symbiosisT = document.querySelector('.symbiosisBW');
symbiosisT.onclick = function() {
	mySrc = symbiosisT.getAttribute('src');
	if(mySrc === 'images/Icon_KeySymbiosisBW.png') {
		symbiosisT.setAttribute ('src','images/Icon_KeySymbiosis.png');
	} else {
		symbiosisT.setAttribute ('src','images/Icon_KeySymbiosisBW.png');
	}
}

let strengthT = document.querySelector('.strengthBW');
strengthT.onclick = function() {
	mySrc = strengthT.getAttribute('src');
	if(mySrc === 'images/Icon_KeyStrengthBW.png') {
		strengthT.setAttribute ('src','images/Icon_KeyStrength.png');
	} else {
		strengthT.setAttribute ('src','images/Icon_KeyStrengthBW.png');
	}
}

let acroT = document.querySelector('.acroBW');
acroT.onclick = function() {
	mySrc = acroT.getAttribute('src');
	if(mySrc === 'images/Icon_PhobekinAcroBW.png') {
		acroT.setAttribute ('src','images/Icon_PhobekinAcro.png');
		hasAcro = true;
	} else {
		acroT.setAttribute ('src','images/Icon_PhobekinAcroBW.png');
		hasAcro = false;
	}
	logic();
}

let necroT = document.querySelector('.necroBW');
necroT.onclick = function() {
	mySrc = necroT.getAttribute('src');
	if(mySrc === 'images/Icon_PhobekinNecroBW.png') {
		necroT.setAttribute ('src','images/Icon_PhobekinNecro.png');
		hasNecro = true;
	} else {
		necroT.setAttribute ('src','images/Icon_PhobekinNecroBW.png');
		hasNecro = false;
	}
	logic();
}

let claustroT = document.querySelector('.claustroBW');
claustroT.onclick = function() {
	mySrc = claustroT.getAttribute('src');
	if(mySrc === 'images/Icon_PhobekinClaustroBW.png') {
		claustroT.setAttribute ('src','images/Icon_PhobekinClaustro.png');
		hasClaustro = true;
	} else {
		claustroT.setAttribute ('src','images/Icon_PhobekinClaustroBW.png');
		hasClaustro = false;
	}
	logic();
}

let pyroT = document.querySelector('.pyroBW');
pyroT.onclick = function() {
	mySrc = pyroT.getAttribute('src');
	if(mySrc === 'images/Icon_PhobekinPyroBW.png') {
		pyroT.setAttribute ('src','images/Icon_PhobekinPyro.png');
		hasPyro = true;
	} else {
		pyroT.setAttribute ('src','images/Icon_PhobekinPyroBW.png');
		hasPyro = false;
	}
	logic();
}

//MAP
let sunken1 = document.querySelector('.sunken1');
sunken1.onclick = function() {
	mySrc = sunken1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		sunken1.setAttribute ('src','images/GrayCheck.png');
	} else {
		sunken1.setAttribute ('src','images/GreenCheck.png');
	}
}
let sunken2 = document.querySelector('.sunken2');
sunken2.onclick = function() {
	mySrc = sunken2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		sunken2.setAttribute ('src','images/GrayCheck.png');
	} else {
		sunken2.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let sunken3 = document.querySelector('.sunken3');
sunken3.onclick = function() {
	mySrc = sunken3.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		sunken3.setAttribute ('src','images/GrayCheck.png');
	} else {
		sunken3.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let sunken4 = document.querySelector('.sunken4');
sunken4.onclick = function() {
	mySrc = sunken4.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		sunken4.setAttribute ('src','images/GrayCheck.png');
	} else {
		sunken4.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let howling1 = document.querySelector('.howling1');
howling1.onclick = function() {
	mySrc = howling1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		howling1.setAttribute ('src','images/GrayCheck.png');
	} else {
		howling1.setAttribute ('src','images/GreenCheck.png');
	}
}
let marsh1 = document.querySelector('.marsh1');
marsh1.onclick = function() {
	mySrc = marsh1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		marsh1.setAttribute ('src','images/GrayCheck.png');
	} else {
		marsh1.setAttribute ('src','images/GreenCheck.png');
	}
}
let crags1 = document.querySelector('.crags1');
crags1.onclick = function() {
	mySrc = crags1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		crags1.setAttribute ('src','images/GrayCheck.png');
	} else {
		crags1.setAttribute ('src','images/GreenCheck.png');
	}
}
let crags2 = document.querySelector('.crags2');
crags2.onclick = function() {
	mySrc = crags2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		crags2.setAttribute ('src','images/GrayCheck.png');
	} else {
		crags2.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let crags3 = document.querySelector('.crags3');
crags3.onclick = function() {
	mySrc = crags3.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		crags3.setAttribute ('src','images/GrayCheck.png');
	} else {
		crags3.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let crags4 = document.querySelector('.crags4');
crags4.onclick = function() {
	mySrc = crags4.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		crags4.setAttribute ('src','images/GrayCheck.png');
	} else {
		crags4.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let skylands1 = document.querySelector('.skylands1');
skylands1.onclick = function() {
	mySrc = skylands1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		skylands1.setAttribute ('src','images/GrayCheck.png');
	} else {
		skylands1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let cloudruin1 = document.querySelector('.cloudruin1');
cloudruin1.onclick = function() {
	mySrc = cloudruin1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		cloudruin1.setAttribute ('src','images/GrayCheck.png');
	} else {
		cloudruin1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let underworld1 = document.querySelector('.underworld1');
underworld1.onclick = function() {
	mySrc = underworld1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		underworld1.setAttribute ('src','images/GrayCheck.png');
	} else {
		underworld1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let bamboo1 = document.querySelector('.bamboo1');
bamboo1.onclick = function() {
	mySrc = bamboo1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		bamboo1.setAttribute ('src','images/GrayCheck.png');
	} else {
		bamboo1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let catacombs1 = document.querySelector('.catacombs1');
catacombs1.onclick = function() {
	mySrc = catacombs1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		catacombs1.setAttribute ('src','images/GrayCheck.png');
	} else {
		catacombs1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let catacombs2 = document.querySelector('.catacombs2');
catacombs2.onclick = function() {
	mySrc = catacombs2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		catacombs2.setAttribute ('src','images/GrayCheck.png');
	} else {
		catacombs2.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let forlorn1 = document.querySelector('.forlorn1');
forlorn1.onclick = function() {
	mySrc = forlorn1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		forlorn1.setAttribute ('src','images/GrayCheck.png');
	} else {
		forlorn1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let autumn1 = document.querySelector('.autumn1');
autumn1.onclick = function() {
	mySrc = autumn1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		autumn1.setAttribute ('src','images/GrayCheck.png');
	} else {
		autumn1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let autumn2 = document.querySelector('.autumn2');
autumn2.onclick = function() {
	mySrc = autumn2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		autumn2.setAttribute ('src','images/GrayCheck.png');
	} else {
		autumn2.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let village1 = document.querySelector('.village1');
village1.onclick = function() {
	mySrc = village1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		village1.setAttribute ('src','images/GrayCheck.png');
	} else {
		village1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let riviere1 = document.querySelector('.riviere1');
riviere1.onclick = function() {
	mySrc = riviere1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		riviere1.setAttribute ('src','images/GrayCheck.png');
	} else {
		riviere1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let corrupt1 = document.querySelector('.corrupt1');
corrupt1.onclick = function() {
	mySrc = corrupt1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		corrupt1.setAttribute ('src','images/GrayCheck.png');
	} else {
		corrupt1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}

//Map-Logic
function logic() {
	mySrc = sunken1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		sunken1.setAttribute('src','images/GreenCheck.png');
	}
	mySrc = sunken2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasTabi === true) {
			sunken2.setAttribute('src','images/GreenCheck.png');
		}
		else {
			sunken2.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = sunken3.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasTabi === true) {
			sunken3.setAttribute('src','images/GreenCheck.png');
		}
		else {
			sunken3.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = sunken4.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasSun === true && hasMoon === true) {
			sunken4.setAttribute('src','images/GreenCheck.png');
		}
		else {
			sunken4.setAttribute('src','images/RedCheck.png');
		}
	}
	mySrc = howling1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		howling1.setAttribute('src','images/GreenCheck.png');
	}
	mySrc = marsh1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		marsh1.setAttribute('src','images/GreenCheck.png');
	}
	mySrc = crags1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		crags1.setAttribute('src','images/GreenCheck.png');
	}
	mySrc = crags2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasWingsuit === true || hasGrapple === true) {
			crags2.setAttribute('src','images/GreenCheck.png');
		} else {
			crags2.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = crags3.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasThistle === true && (hasWingsuit === true || hasGrapple === true)) {
			crags3.setAttribute('src','images/GreenCheck.png');
		} else if((hasThistle === true) || (hasGrapple === true) || (hasWindmill === true)) {
			crags3.setAttribute('src','images/YellowCheck.png');
		} else {
			crags3.setAttribute('src','images/RedCheck.png');
		}
	}
	mySrc = crags4.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasTabi === true) {
			crags4.setAttribute('src','images/GreenCheck.png');
		} else if(hasGrapple === true) {
			crags4.setAttribute('src','images/YellowCheck.png');
		} else {
			crags4.setAttribute('src','images/RedCheck.png');
		}
	}
	mySrc = skylands1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasFly === true && hasGrapple === true) {
			skylands1.setAttribute('src','images/GreenCheck.png');
		} else if(hasGrapple === true || hasWindmill === true) {
			skylands1.setAttribute('src','images/YellowCheck.png');
		} else {
			skylands1.setAttribute('src','images/RedCheck.png');
		}
	}
	mySrc = cloudruin1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasAmulet === true && hasWingsuit === true) {
			cloudruin1.setAttribute('src','images/GreenCheck.png');
		} else {
			cloudruin1.setAttribute('src','images/RedCheck.png');
		}
	}
	mySrc = underworld1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasTabi === true) {
			underworld1.setAttribute('src','images/GreenCheck.png');
		} else {
			underworld1.setAttribute('src','images/RedCheck.png');
		}
	}
	mySrc = bamboo1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasWingsuit === true) {
			bamboo1.setAttribute('src','images/GreenCheck.png');
		} else {
			bamboo1.setAttribute('src','images/RedCheck.png');
		}
	}
	mySrc = catacombs1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasWingsuit === true) {
			catacombs1.setAttribute('src','images/GreenCheck.png');
		} else {
			catacombs1.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = catacombs2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasWingsuit === true) {
			catacombs2.setAttribute('src','images/GreenCheck.png');
		} else {
			catacombs2.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = forlorn1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasClaustro === true && hasNecro === true && hasAcro === true && hasPyro === true && hasWingsuit === true) {
			forlorn1.setAttribute('src','images/GreenCheck.png');
		} else if(hasGrapple === true || (hasWingsuit === true && hasWindmill === true)) {
			forlorn1.setAttribute('src','images/YellowCheck.png');
		} else {
			forlorn1.setAttribute('src','images/RedCheck.png');
		}
	}
	mySrc = autumn1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasWingsuit === true && hasGrapple === true) {
			autumn1.setAttribute('src','images/GreenCheck.png');
		} else {
			autumn1.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = autumn2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasWingsuit === true) {
			autumn2.setAttribute('src','images/GreenCheck.png');
		} else {
			autumn2.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = village1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasWingsuit === true) {
			village1.setAttribute('src','images/GreenCheck.png');
		} else {
			village1.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = riviere1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasWingsuit === true || hasGrapple === true) {
			riviere1.setAttribute('src','images/GreenCheck.png');
		} else {
			riviere1.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = corrupt1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasFly === true && hasCrown === true) {
			corrupt1.setAttribute('src','images/GreenCheck.png');
		} else {
			corrupt1.setAttribute('src','images/RedCheck.png');
		}
	}
}