let mySrc;
let showMap = true;
let isPP = false;
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
let sealbtn = document.querySelector('.sealbutton');
sealbtn.onclick = function() {
	if(isAdvanced === false) {
		isAdvanced = true;
		document.getElementById('SealImages').style.visibility="visible";
		logic();
		return;
	}
	isAdvanced = false;
	document.getElementById('SealImages').style.visibility="hidden";
}
let xtrabtn = document.querySelector('.xtrabutton');
xtrabtn.onclick = function() {
	document.getElementById('extras').style.visibility="visible";
}
let ppbtn = document.querySelector('.ppbutton');
ppbtn.onclick = function() {
	if(isPP === false) {
		isPP = true;
		document.getElementById('PPMap').style.display="block";
		PPLogic();
		return;
	}
	isPP = false;
	document.getElementById('PPMap').style.display="none";
}
let dlmapbtn = document.querySelector('.dlmapbutton');
dlmapbtn.onclick = function() {
	document.getElementById('MinMaps').style.display="none";
}
let mapbtn = document.querySelector('.mapbutton');
mapbtn.onclick = function() {
	if(showMap === true){
		showMap = false;
		document.getElementById('MapImages').style.display="none";
		document.getElementById('SealImages').style.display="none";
		return;
	}
	showMap = true;
	document.getElementById('MapImages').style.display="block";
	document.getElementById('SealImages').style.display="block";
	logic(); //remove this
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
	if(isAdvanced === true) {
		sealLogic();
	}
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
	if(isAdvanced === true) {
		sealLogic();
	}
	if(isPP === true) {
		PPLogic();
	}
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
	if(isAdvanced === true) {
		sealLogic();
	}
	if(isPP === true) {
		PPLogic();
	}
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
	if(isAdvanced === true) {
		sealLogic();
	}
}

let candleT = document.querySelector('.candleBW');
candleT.onclick = function() {
	mySrc = candleT.getAttribute('src');
	if(mySrc === 'images/Icon_CandleBW.png') {
		candleT.setAttribute ('src','images/Icon_Candle.png');
	} else if(mySrc === 'images/Icon_Candle.png'){
		candleT.setAttribute ('src','images/Icon_AstralTeaSeed.png');
	} else if(mySrc === 'images/Icon_AstralTeaSeed.png'){
		candleT.setAttribute ('src','images/Icon_CandleAndSeeds.png');
	} else if(mySrc === 'images/Icon_CandleAndSeeds.png') {
		candleT.setAttribute ('src','images/Icon_AstralTeaLeaf.png');
	} else if(mySrc === 'images/Icon_AstralTeaLeaf.png') {
		candleT.setAttribute ('src','images/Icon_CandleAndLeaves.png');
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
	if(isAdvanced === true) {
		sealLogic();
	}
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
	if(isAdvanced === true) {
		sealLogic();
	}
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
	if(isAdvanced === true) {
		sealLogic();
	}
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
	if(isAdvanced === true) {
		sealLogic();
	}
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
	if(isAdvanced === true) {
		sealLogic();
	}
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
	if(isAdvanced === true) {
		sealLogic();
	}
}

let sealNum = document.querySelector('.sealNumber');
let powerSeal = document.querySelector('.powerSeal');
powerSeal.onclick = function() {
	mySrc = sealNum.getAttribute('src');
	if(event.shiftKey) {
		if(sealNum.innerHTML != "0")
			sealNum.innerHTML = parseInt(sealNum.innerHTML, 0) - 1;
	} else if(sealNum.innerHTML != "45") {
		sealNum.innerHTML = parseInt(sealNum.innerHTML, 0) + 1;
	}
}

//MAP
let sunken1 = document.querySelector('.sunken1');
sunken1.onclick = function() {
	mySrc = sunken1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		sunken1.setAttribute ('src','images/GrayCheck.png');
		tabi.style="background: white;mix-blend-mode: saturation;";
	} else {
		sunken1.setAttribute ('src','images/GreenCheck.png');
		tabi.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let sunken2 = document.querySelector('.sunken2');
sunken2.onclick = function() {
	mySrc = sunken2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		sunken2.setAttribute ('src','images/GrayCheck.png');
		sun.style="background: white;mix-blend-mode: saturation;";
	} else {
		sunken2.setAttribute ('src','images/GreenCheck.png');
		sun.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let sunken3 = document.querySelector('.sunken3');
sunken3.onclick = function() {
	mySrc = sunken3.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		sunken3.setAttribute ('src','images/GrayCheck.png');
		moon.style="background: white;mix-blend-mode: saturation;";
	} else {
		sunken3.setAttribute ('src','images/GreenCheck.png');
		moon.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let sunken4 = document.querySelector('.sunken4');
sunken4.onclick = function() {
	mySrc = sunken4.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		sunken4.setAttribute ('src','images/GrayCheck.png');
		love.style="background: white;mix-blend-mode: saturation;";
	} else {
		sunken4.setAttribute ('src','images/GreenCheck.png');
		love.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let howling1 = document.querySelector('.howling1');
howling1.onclick = function() {
	mySrc = howling1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		howling1.setAttribute ('src','images/GrayCheck.png');
		wingsuit.style="background: white;mix-blend-mode: saturation;";
	} else {
		howling1.setAttribute ('src','images/GreenCheck.png');
		wingsuit.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let marsh1 = document.querySelector('.marsh1');
marsh1.onclick = function() {
	mySrc = marsh1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		marsh1.setAttribute ('src','images/GrayCheck.png');
		shell.style="background: white;mix-blend-mode: saturation;";
	} else {
		marsh1.setAttribute ('src','images/GreenCheck.png');
		shell.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let crags1 = document.querySelector('.crags1');
crags1.onclick = function() {
	mySrc = crags1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		crags1.setAttribute ('src','images/GrayCheck.png');
		grapple.style="background: white;mix-blend-mode: saturation;";
	} else {
		crags1.setAttribute ('src','images/GreenCheck.png');
		grapple.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let crags2 = document.querySelector('.crags2');
crags2.onclick = function() {
	mySrc = crags2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		crags2.setAttribute ('src','images/GrayCheck.png');
		thistle.style="background: white;mix-blend-mode: saturation;";
	} else {
		crags2.setAttribute ('src','images/GreenCheck.png');
		thistle.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let crags3 = document.querySelector('.crags3');
crags3.onclick = function() {
	mySrc = crags3.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		crags3.setAttribute ('src','images/GrayCheck.png');
		strength.style="background: white;mix-blend-mode: saturation;";
	} else {
		crags3.setAttribute ('src','images/GreenCheck.png');
		strength.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let crags4 = document.querySelector('.crags4');
crags4.onclick = function() {
	mySrc = crags4.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		crags4.setAttribute ('src','images/GrayCheck.png');
		pyro.style="background: white;mix-blend-mode: saturation;";
	} else {
		crags4.setAttribute ('src','images/GreenCheck.png');
		pyro.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let skylands1 = document.querySelector('.skylands1');
skylands1.onclick = function() {
	mySrc = skylands1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		skylands1.setAttribute ('src','images/GrayCheck.png');
		symbiosis.style="background: white;mix-blend-mode: saturation;";
	} else {
		skylands1.setAttribute ('src','images/GreenCheck.png');
		symbiosis.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let cloudruin1 = document.querySelector('.cloudruin1');
cloudruin1.onclick = function() {
	mySrc = cloudruin1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		cloudruin1.setAttribute ('src','images/GrayCheck.png');
		acro.style="background: white;mix-blend-mode: saturation;";
	} else {
		cloudruin1.setAttribute ('src','images/GreenCheck.png');
		acro.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let underworld1 = document.querySelector('.underworld1');
underworld1.onclick = function() {
	mySrc = underworld1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		underworld1.setAttribute ('src','images/GrayCheck.png');
		chaos.style="background: white;mix-blend-mode: saturation;";
	} else {
		underworld1.setAttribute ('src','images/GreenCheck.png');
		chaos.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let bamboo1 = document.querySelector('.bamboo1');
bamboo1.onclick = function() {
	mySrc = bamboo1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		bamboo1.setAttribute ('src','images/GrayCheck.png');
		claustro.style="background: white;mix-blend-mode: saturation;";
	} else {
		bamboo1.setAttribute ('src','images/GreenCheck.png');
		claustro.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let catacombs1 = document.querySelector('.catacombs1');
catacombs1.onclick = function() {
	mySrc = catacombs1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		catacombs1.setAttribute ('src','images/GrayCheck.png');
		amulet.style="background: white;mix-blend-mode: saturation;";
	} else {
		catacombs1.setAttribute ('src','images/GreenCheck.png');
		amulet.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let catacombs2 = document.querySelector('.catacombs2');
catacombs2.onclick = function() {
	mySrc = catacombs2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		catacombs2.setAttribute ('src','images/GrayCheck.png');
		necro.style="background: white;mix-blend-mode: saturation;";
	} else {
		catacombs2.setAttribute ('src','images/GreenCheck.png');
		necro.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let forlorn1 = document.querySelector('.forlorn1');
forlorn1.onclick = function() {
	mySrc = forlorn1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		forlorn1.setAttribute ('src','images/GrayCheck.png');
		crown.style="background: white;mix-blend-mode: saturation;";
	} else {
		forlorn1.setAttribute ('src','images/GreenCheck.png');
		crown.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let autumn1 = document.querySelector('.autumn1');
autumn1.onclick = function() {
	mySrc = autumn1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		autumn1.setAttribute ('src','images/GrayCheck.png');
		keyofhope.style="background: white;mix-blend-mode: saturation;";
	} else {
		autumn1.setAttribute ('src','images/GreenCheck.png');
		keyofhope.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let autumn2 = document.querySelector('.autumn2');
autumn2.onclick = function() {
	mySrc = autumn2.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		autumn2.setAttribute ('src','images/GrayCheck.png');
		claws.style="background: white;mix-blend-mode: saturation;";
	} else {
		autumn2.setAttribute ('src','images/GreenCheck.png');
		claws.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let village1 = document.querySelector('.village1');
village1.onclick = function() {
	mySrc = village1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		village1.setAttribute ('src','images/GrayCheck.png');
		candle.style="background: white;mix-blend-mode: saturation;";
	} else {
		village1.setAttribute ('src','images/GreenCheck.png');
		candle.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let riviere1 = document.querySelector('.riviere1');
riviere1.onclick = function() {
	mySrc = riviere1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		riviere1.setAttribute ('src','images/GrayCheck.png');
		fairy.style="background: white;mix-blend-mode: saturation;";
	} else {
		riviere1.setAttribute ('src','images/GreenCheck.png');
		fairy.style="background: none; rgba(FF,FF,FF,0.0);";
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

//Seals
let villageSeal1 = document.querySelector('.villageSeal1');
villageSeal1.onclick = function() {
	mySrc = villageSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		villageSeal1.setAttribute ('src','images/GraySealCheck.png');
		NVseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		villageSeal1.setAttribute ('src','images/GreenSealCheck.png');
		NVseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let autumnSeal1 = document.querySelector('.autumnSeal1');
autumnSeal1.onclick = function() {
	mySrc = autumnSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		autumnSeal1.setAttribute ('src','images/GraySealCheck.png');
		AHseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		autumnSeal1.setAttribute ('src','images/GreenSealCheck.png');
		AHseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let autumnSeal2 = document.querySelector('.autumnSeal2');
autumnSeal2.onclick = function() {
	mySrc = autumnSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		autumnSeal2.setAttribute ('src','images/GraySealCheck.png');
		AHseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		autumnSeal2.setAttribute ('src','images/GreenSealCheck.png');
		AHseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let autumnSeal3 = document.querySelector('.autumnSeal3');
autumnSeal3.onclick = function() {
	mySrc = autumnSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		autumnSeal3.setAttribute ('src','images/GraySealCheck.png');
		AHseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		autumnSeal3.setAttribute ('src','images/GreenSealCheck.png');
		AHseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let autumnSeal4 = document.querySelector('.autumnSeal4');
autumnSeal4.onclick = function() {
	mySrc = autumnSeal4.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		autumnSeal4.setAttribute ('src','images/GraySealCheck.png');
		AHseal4.style="background: white;mix-blend-mode: saturation;";
	} else {
		autumnSeal4.setAttribute ('src','images/GreenSealCheck.png');
		AHseal4.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let forlornSeal1 = document.querySelector('.forlornSeal1');
forlornSeal1.onclick = function() {
	mySrc = forlornSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		forlornSeal1.setAttribute ('src','images/GraySealCheck.png');
		FTseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		forlornSeal1.setAttribute ('src','images/GreenSealCheck.png');
		FTseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let forlornSeal2 = document.querySelector('.forlornSeal2');
forlornSeal2.onclick = function() {
	mySrc = forlornSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		forlornSeal2.setAttribute ('src','images/GraySealCheck.png');
		FTseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		forlornSeal2.setAttribute ('src','images/GreenSealCheck.png');
		FTseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let catacombsSeal1 = document.querySelector('.catacombsSeal1');
catacombsSeal1.onclick = function() {
	mySrc = catacombsSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		catacombsSeal1.setAttribute ('src','images/GraySealCheck.png');
		Caseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		catacombsSeal1.setAttribute ('src','images/GreenSealCheck.png');
		Caseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let catacombsSeal2 = document.querySelector('.catacombsSeal2');
catacombsSeal2.onclick = function() {
	mySrc = catacombsSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		catacombsSeal2.setAttribute ('src','images/GraySealCheck.png');
		Caseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		catacombsSeal2.setAttribute ('src','images/GreenSealCheck.png');
		Caseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let catacombsSeal3 = document.querySelector('.catacombsSeal3');
catacombsSeal3.onclick = function() {
	mySrc = catacombsSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		catacombsSeal3.setAttribute ('src','images/GraySealCheck.png');
		Caseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		catacombsSeal3.setAttribute ('src','images/GreenSealCheck.png');
		Caseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let bambooSeal1 = document.querySelector('.bambooSeal1');
bambooSeal1.onclick = function() {
	mySrc = bambooSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		bambooSeal1.setAttribute ('src','images/GraySealCheck.png');
		BCseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		bambooSeal1.setAttribute ('src','images/GreenSealCheck.png');
		BCseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let bambooSeal2 = document.querySelector('.bambooSeal2');
bambooSeal2.onclick = function() {
	mySrc = bambooSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		bambooSeal2.setAttribute ('src','images/GraySealCheck.png');
		BCseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		bambooSeal2.setAttribute ('src','images/GreenSealCheck.png');
		BCseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let bambooSeal3 = document.querySelector('.bambooSeal3');
bambooSeal3.onclick = function() {
	mySrc = bambooSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		bambooSeal3.setAttribute ('src','images/GraySealCheck.png');
		BCseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		bambooSeal3.setAttribute ('src','images/GreenSealCheck.png');
		BCseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let howlingSeal1 = document.querySelector('.howlingSeal1');
howlingSeal1.onclick = function() {
	mySrc = howlingSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		howlingSeal1.setAttribute ('src','images/GraySealCheck.png');
		HGseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		howlingSeal1.setAttribute ('src','images/GreenSealCheck.png');
		HGseal1.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let howlingSeal2 = document.querySelector('.howlingSeal2');
howlingSeal2.onclick = function() {
	mySrc = howlingSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		howlingSeal2.setAttribute ('src','images/GraySealCheck.png');
		HGseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		howlingSeal2.setAttribute ('src','images/GreenSealCheck.png');
		HGseal2.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let howlingSeal3 = document.querySelector('.howlingSeal3');
howlingSeal3.onclick = function() {
	mySrc = howlingSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		howlingSeal3.setAttribute ('src','images/GraySealCheck.png');
		HGseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		howlingSeal3.setAttribute ('src','images/GreenSealCheck.png');
		HGseal3.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let marshSeal1 = document.querySelector('.marshSeal1');
marshSeal1.onclick = function() {
	mySrc = marshSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		marshSeal1.setAttribute ('src','images/GraySealCheck.png');
		QMseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		marshSeal1.setAttribute ('src','images/GreenSealCheck.png');
		QMseal1.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let marshSeal12 = document.querySelector('.marshSeal2');
marshSeal2.onclick = function() {
	mySrc = marshSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		marshSeal2.setAttribute ('src','images/GraySealCheck.png');
		QMseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		marshSeal2.setAttribute ('src','images/GreenSealCheck.png');
		QMseal2.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let marshSeal3 = document.querySelector('.marshSeal3');
marshSeal3.onclick = function() {
	mySrc = marshSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		marshSeal3.setAttribute ('src','images/GraySealCheck.png');
		QMseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		marshSeal3.setAttribute ('src','images/GreenSealCheck.png');
		QMseal3.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let cragsSeal1 = document.querySelector('.cragsSeal1');
cragsSeal1.onclick = function() {
	mySrc = cragsSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cragsSeal1.setAttribute ('src','images/GraySealCheck.png');
		SCseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		cragsSeal1.setAttribute ('src','images/GreenSealCheck.png');
		SCseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let cragsSeal2 = document.querySelector('.cragsSeal2');
cragsSeal2.onclick = function() {
	mySrc = cragsSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cragsSeal2.setAttribute ('src','images/GraySealCheck.png');
		SCseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		cragsSeal2.setAttribute ('src','images/GreenSealCheck.png');
		SCseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let cragsSeal3 = document.querySelector('.cragsSeal3');
cragsSeal3.onclick = function() {
	mySrc = cragsSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cragsSeal3.setAttribute ('src','images/GraySealCheck.png');
		SCseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		cragsSeal3.setAttribute ('src','images/GreenSealCheck.png');
		SCseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let glacialSeal1 = document.querySelector('.glacialSeal1');
glacialSeal1.onclick = function() {
	mySrc = glacialSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		glacialSeal1.setAttribute ('src','images/GraySealCheck.png');
		GPseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		glacialSeal1.setAttribute ('src','images/GreenSealCheck.png');
		GPseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let glacialSeal2 = document.querySelector('.glacialSeal2');
glacialSeal2.onclick = function() {
	mySrc = glacialSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		glacialSeal2.setAttribute ('src','images/GraySealCheck.png');
		GPseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		glacialSeal2.setAttribute ('src','images/GreenSealCheck.png');
		GPseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let glacialSeal3 = document.querySelector('.glacialSeal3');
glacialSeal3.onclick = function() {
	mySrc = glacialSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		glacialSeal3.setAttribute ('src','images/GraySealCheck.png');
		GPseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		glacialSeal3.setAttribute ('src','images/GreenSealCheck.png');
		GPseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let towerSeal1 = document.querySelector('.towerSeal1');
towerSeal1.onclick = function() {
	mySrc = towerSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		towerSeal1.setAttribute ('src','images/GraySealCheck.png');
		TTseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		towerSeal1.setAttribute ('src','images/GreenSealCheck.png');
		TTseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let towerSeal2 = document.querySelector('.towerSeal2');
towerSeal2.onclick = function() {
	mySrc = towerSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		towerSeal2.setAttribute ('src','images/GraySealCheck.png');
		TTseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		towerSeal2.setAttribute ('src','images/GreenSealCheck.png');
		TTseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let towerSeal3 = document.querySelector('.towerSeal3');
towerSeal3.onclick = function() {
	mySrc = towerSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		towerSeal3.setAttribute ('src','images/GraySealCheck.png');
		TTseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		towerSeal3.setAttribute ('src','images/GreenSealCheck.png');
		TTseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let cloudruinSeal1 = document.querySelector('.cloudruinSeal1');
cloudruinSeal1.onclick = function() {
	mySrc = cloudruinSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cloudruinSeal1.setAttribute ('src','images/GraySealCheck.png');
		CRseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		cloudruinSeal1.setAttribute ('src','images/GreenSealCheck.png');
		CRseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let cloudruinSeal2 = document.querySelector('.cloudruinSeal2');
cloudruinSeal2.onclick = function() {
	mySrc = cloudruinSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cloudruinSeal2.setAttribute ('src','images/GraySealCheck.png');
		CRseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		cloudruinSeal2.setAttribute ('src','images/GreenSealCheck.png');
		CRseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let cloudruinSeal3 = document.querySelector('.cloudruinSeal3');
cloudruinSeal3.onclick = function() {
	mySrc = cloudruinSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cloudruinSeal3.setAttribute ('src','images/GraySealCheck.png');
		CRseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		cloudruinSeal3.setAttribute ('src','images/GreenSealCheck.png');
		CRseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let cloudruinSeal4 = document.querySelector('.cloudruinSeal4');
cloudruinSeal4.onclick = function() {
	mySrc = cloudruinSeal4.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		cloudruinSeal4.setAttribute ('src','images/GraySealCheck.png');
		CRseal4.style="background: white;mix-blend-mode: saturation;";
	} else {
		cloudruinSeal4.setAttribute ('src','images/GreenSealCheck.png');
		CRseal4.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let underworldSeal1 = document.querySelector('.underworldSeal1');
underworldSeal1.onclick = function() {
	mySrc = underworldSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		underworldSeal1.setAttribute ('src','images/GraySealCheck.png');
		Unseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		underworldSeal1.setAttribute ('src','images/GreenSealCheck.png');
		Unseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let underworldSeal2 = document.querySelector('.underworldSeal2');
underworldSeal2.onclick = function() {
	mySrc = underworldSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		underworldSeal2.setAttribute ('src','images/GraySealCheck.png');
		Unseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		underworldSeal2.setAttribute ('src','images/GreenSealCheck.png');
		Unseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let underworldSeal3 = document.querySelector('.underworldSeal3');
underworldSeal3.onclick = function() {
	mySrc = underworldSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		underworldSeal3.setAttribute ('src','images/GraySealCheck.png');
		Unseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		underworldSeal3.setAttribute ('src','images/GreenSealCheck.png');
		Unseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let underworldSeal4 = document.querySelector('.underworldSeal4');
underworldSeal4.onclick = function() {
	mySrc = underworldSeal4.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		underworldSeal4.setAttribute ('src','images/GraySealCheck.png');
		Unseal4.style="background: white;mix-blend-mode: saturation;";
	} else {
		underworldSeal4.setAttribute ('src','images/GreenSealCheck.png');
		Unseal4.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let sunkenSeal1 = document.querySelector('.sunkenSeal1');
sunkenSeal1.onclick = function() {
	mySrc = sunkenSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		sunkenSeal1.setAttribute ('src','images/GraySealCheck.png');
		SSseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		sunkenSeal1.setAttribute ('src','images/GreenSealCheck.png');
		SSseal1.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let sunkenSeal2 = document.querySelector('.sunkenSeal2');
sunkenSeal2.onclick = function() {
	mySrc = sunkenSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		sunkenSeal2.setAttribute ('src','images/GraySealCheck.png');
		SSseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		sunkenSeal2.setAttribute ('src','images/GreenSealCheck.png');
		SSseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let sunkenSeal3 = document.querySelector('.sunkenSeal3');
sunkenSeal3.onclick = function() {
	mySrc = sunkenSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		sunkenSeal3.setAttribute ('src','images/GraySealCheck.png');
		SSseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		sunkenSeal3.setAttribute ('src','images/GreenSealCheck.png');
		SSseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let riviereSeal1 = document.querySelector('.riviereSeal1');
riviereSeal1.onclick = function() {
	mySrc = riviereSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		riviereSeal1.setAttribute ('src','images/GraySealCheck.png');
		RTseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		riviereSeal1.setAttribute ('src','images/GreenSealCheck.png');
		RTseal1.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let riviereSeal2 = document.querySelector('.riviereSeal2');
riviereSeal2.onclick = function() {
	mySrc = riviereSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		riviereSeal2.setAttribute ('src','images/GraySealCheck.png');
		RTseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		riviereSeal2.setAttribute ('src','images/GreenSealCheck.png');
		RTseal2.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let riviereSeal3 = document.querySelector('.riviereSeal3');
riviereSeal3.onclick = function() {
	mySrc = riviereSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		riviereSeal3.setAttribute ('src','images/GraySealCheck.png');
		RTseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		riviereSeal3.setAttribute ('src','images/GreenSealCheck.png');
		RTseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let skylandsSeal1 = document.querySelector('.skylandsSeal1');
skylandsSeal1.onclick = function() {
	mySrc = skylandsSeal1.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		skylandsSeal1.setAttribute ('src','images/GraySealCheck.png');
		ESseal1.style="background: white;mix-blend-mode: saturation;";
	} else {
		skylandsSeal1.setAttribute ('src','images/GreenSealCheck.png');
		ESseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let skylandsSeal2 = document.querySelector('.skylandsSeal2');
skylandsSeal2.onclick = function() {
	mySrc = skylandsSeal2.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		skylandsSeal2.setAttribute ('src','images/GraySealCheck.png');
		ESseal2.style="background: white;mix-blend-mode: saturation;";
	} else {
		skylandsSeal2.setAttribute ('src','images/GreenSealCheck.png');
		ESseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}
let skylandsSeal3 = document.querySelector('.skylandsSeal3');
skylandsSeal3.onclick = function() {
	mySrc = skylandsSeal3.getAttribute('src');
	if(mySrc !== 'images/GraySealCheck.png') {
		skylandsSeal3.setAttribute ('src','images/GraySealCheck.png');
		ESseal3.style="background: white;mix-blend-mode: saturation;";
	} else {
		skylandsSeal3.setAttribute ('src','images/GreenSealCheck.png');
		ESseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		logic();
	}
}

//PP Checks
let feather1 = document.querySelector('.feather1');
feather1.onclick = function() {
	mySrc = feather1.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		feather1.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		feather1.setAttribute ('src','images/GreenPPCheck.png');
	}
}
let feather2 = document.querySelector('.feather2');
feather2.onclick = function() {
	mySrc = feather2.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		feather2.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		feather2.setAttribute ('src','images/GreenPPCheck.png');
	}
}
let feather3 = document.querySelector('.feather3');
feather3.onclick = function() {
	mySrc = feather3.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		feather3.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		feather3.setAttribute ('src','images/GreenPPCheck.png');
		PPLogic();
	}
}
let feather4 = document.querySelector('.feather4');
feather4.onclick = function() {
	mySrc = feather4.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		feather4.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		feather4.setAttribute ('src','images/GreenPPCheck.png');
	}
}
let mask1 = document.querySelector('.mask1');
mask1.onclick = function() {
	mySrc = mask1.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		mask1.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		mask1.setAttribute ('src','images/GreenPPCheck.png');
	}
}
let mask2 = document.querySelector('.mask2');
mask2.onclick = function() {
	mySrc = mask2.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		mask2.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		mask2.setAttribute ('src','images/GreenPPCheck.png');
	}
}
let mask3 = document.querySelector('.mask3');
mask3.onclick = function() {
	mySrc = mask3.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		mask3.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		mask3.setAttribute ('src','images/GreenPPCheck.png');
		PPLogic();
	}
}
let mask4 = document.querySelector('.mask4');
mask4.onclick = function() {
	mySrc = mask4.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		mask4.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		mask4.setAttribute ('src','images/GreenPPCheck.png');
		PPLogic();
	}
}
let mask5 = document.querySelector('.mask5');
mask5.onclick = function() {
	mySrc = mask5.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		mask5.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		mask5.setAttribute ('src','images/GreenPPCheck.png');
		PPLogic();
	}
}
let mask6 = document.querySelector('.mask6');
mask6.onclick = function() {
	mySrc = mask6.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		mask6.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		mask6.setAttribute ('src','images/GreenPPCheck.png');
		PPLogic();
	}
}
let mask7 = document.querySelector('.mask7');
mask7.onclick = function() {
	mySrc = mask7.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		mask7.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		mask7.setAttribute ('src','images/GreenPPCheck.png');
		PPLogic();
	}
}
let mask8 = document.querySelector('.mask8');
mask8.onclick = function() {
	mySrc = mask8.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		mask8.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		mask8.setAttribute ('src','images/GreenPPCheck.png');
		PPLogic();
	}
}
let mask9 = document.querySelector('.mask9');
mask9.onclick = function() {
	mySrc = mask9.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		mask9.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		mask9.setAttribute ('src','images/GreenPPCheck.png');
		PPLogic();
	}
}
let mask10 = document.querySelector('.mask10');
mask10.onclick = function() {
	mySrc = mask10.getAttribute('src');
	if(mySrc !== 'images/GrayPPCheck.png') {
		mask10.setAttribute ('src','images/GrayPPCheck.png');
	} else {
		mask10.setAttribute ('src','images/GreenPPCheck.png');
		PPLogic();
	}
}

//Map Maximized
let NVMapMin = document.querySelector('.NVMapMin');
NVMapMin.onclick = function() {
	mySrc = NVMapMin.getAttribute('src');
	//alert("you pressed NV Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.NVMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let AHMapMin = document.querySelector('.AHMapMin');
AHMapMin.onclick = function() {
	mySrc = AHMapMin.getAttribute('src');
	//alert("you pressed AH Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.AHMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let CaMapMin = document.querySelector('.CaMapMin');
CaMapMin.onclick = function() {
	mySrc = CaMapMin.getAttribute('src');
	//alert("you pressed Ca Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.CaMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let FTMapMin = document.querySelector('.FTMapMin');
FTMapMin.onclick = function() {
	mySrc = FTMapMin.getAttribute('src');
	//alert("you pressed FT Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.FTMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let RTMapMin = document.querySelector('.RTMapMin');
RTMapMin.onclick = function() {
	mySrc = RTMapMin.getAttribute('src');
	//alert("you pressed RT Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.RTMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let BCMapMin = document.querySelector('.BCMapMin');
BCMapMin.onclick = function() {
	mySrc = BCMapMin.getAttribute('src');
	//alert("you pressed BC Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.BCMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let HGMapMin = document.querySelector('.HGMapMin');
HGMapMin.onclick = function() {
	mySrc = HGMapMin.getAttribute('src');
	//alert("you pressed HG Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.HGMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let SSMapMin = document.querySelector('.SSMapMin');
SSMapMin.onclick = function() {
	mySrc = SSMapMin.getAttribute('src');
	//alert("you pressed SS Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.SSMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let QMMapMin = document.querySelector('.QMMapMin');
QMMapMin.onclick = function() {
	mySrc = QMMapMin.getAttribute('src');
	//alert("you pressed QM Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.QMMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let GPMapMin = document.querySelector('.GPMapMin');
GPMapMin.onclick = function() {
	mySrc = GPMapMin.getAttribute('src');
	//alert("you pressed GP Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.GPMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let SCMapMin = document.querySelector('.SCMapMin');
SCMapMin.onclick = function() {
	mySrc = SCMapMin.getAttribute('src');
	//alert("you pressed SC Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.SCMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let UnMapMin = document.querySelector('.UnMapMin');
UnMapMin.onclick = function() {
	mySrc = UnMapMin.getAttribute('src');
	//alert("you pressed Un Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.UnMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let CRMapMin = document.querySelector('.CRMapMin');
CRMapMin.onclick = function() {
	mySrc = CRMapMin.getAttribute('src');
	//alert("you pressed CR Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.CRMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let ESMapMin = document.querySelector('.ESMapMin');
ESMapMin.onclick = function() {
	mySrc = ESMapMin.getAttribute('src');
	//alert("you pressed ES Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.ESMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}
let TTMapMin = document.querySelector('.TTMapMin');
TTMapMin.onclick = function() {
	mySrc = TTMapMin.getAttribute('src');
	//alert("you pressed TT Map Min");
	document.querySelector('.MinimizedMap').style.visibility="hidden";
	document.getElementById('SealImages').style.visibility="hidden";
	document.querySelector('.TTMapMax').style.visibility="visible";
	document.querySelector('.backButton').style.visibility="visible";
}

let NVtoAHwarp = document.querySelector('.NVtoAHwarp');
NVtoAHwarp.onclick = function() {
	mySrc = NVtoAHwarp.getAttribute('src');
	document.querySelector('.NVMapMax').style.visibility="hidden";
	document.querySelector('.AHMapMax').style.visibility="visible";
}
let seeds = document.querySelector('.seeds');
seeds.onclick = function() {
	myStyle = seeds.getAttribute('style');
	if(seeds.style.background !== "white") {
		//alert("white found");
		seeds.style="background: white;mix-blend-mode: saturation;";
	} else {
		//alert("white not found");
		seeds.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let candle = document.querySelector('.candle');
candle.onclick = function() {
	myStyle = candle.getAttribute('style');
	if(candle.style.background !== "white") {
		//alert("white found");
		candle.style="background: white;mix-blend-mode: saturation;";
		village1.setAttribute ('src','images/GrayCheck.png');
	} else {
		//alert("white not found");
		candle.style="background: none; rgba(FF,FF,FF,0.0);";
		village1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let NVseal1 = document.querySelector('.NVseal1');
NVseal1.onclick = function() {
	myStyle = NVseal1.getAttribute('style');
	if(NVseal1.style.background !== "white") {
		//alert("white found");
		NVseal1.style="background: white;mix-blend-mode: saturation;";
		villageSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		//alert("white not found");
		NVseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		villageSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let AHtoNVwarp = document.querySelector('.AHtoNVwarp');
AHtoNVwarp.onclick = function() {
	mySrc = AHtoNVwarp.getAttribute('src');
	document.querySelector('.AHMapMax').style.visibility="hidden";
	document.querySelector('.NVMapMax').style.visibility="visible";
}
let AHtoFTwarp = document.querySelector('.AHtoFTwarp');
AHtoFTwarp.onclick = function() {
	mySrc = AHtoFTwarp.getAttribute('src');
	document.querySelector('.AHMapMax').style.visibility="hidden";
	document.querySelector('.FTMapMax').style.visibility="visible";
}
let AHtoCawarp = document.querySelector('.AHtoCawarp');
AHtoCawarp.onclick = function() {
	mySrc = AHtoCawarp.getAttribute('src');
	document.querySelector('.AHMapMax').style.visibility="hidden";
	document.querySelector('.CaMapMax').style.visibility="visible";
}
let keyofhope = document.querySelector('.keyofhope');
keyofhope.onclick = function() {
	myStyle = keyofhope.getAttribute('style');
	if(keyofhope.style.background !== "white") {
		//alert("white found");
		keyofhope.style="background: white;mix-blend-mode: saturation;";
		autumn1.setAttribute ('src','images/GrayCheck.png');
	} else {
		//alert("white not found");
		keyofhope.style="background: none; rgba(FF,FF,FF,0.0);";
		autumn1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let claws = document.querySelector('.claws');
claws.onclick = function() {
	myStyle = claws.getAttribute('style');
	if(claws.style.background !== "white") {
		//alert("white found");
		claws.style="background: white;mix-blend-mode: saturation;";
		autumn2.setAttribute ('src','images/GrayCheck.png');
	} else {
		//alert("white not found");
		claws.style="background: none; rgba(FF,FF,FF,0.0);";
		autumn2.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let AHseal1 = document.querySelector('.AHseal1');
AHseal1.onclick = function() {
	myStyle = AHseal1.getAttribute('style');
	if(AHseal1.style.background !== "white") {
		//alert("white found");
		AHseal1.style="background: white;mix-blend-mode: saturation;";
		autumnSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		//alert("white not found");
		AHseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		autumnSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let AHseal2 = document.querySelector('.AHseal2');
AHseal2.onclick = function() {
	myStyle = AHseal2.getAttribute('style');
	if(AHseal2.style.background !== "white") {
		//alert("white found");
		AHseal2.style="background: white;mix-blend-mode: saturation;";
		autumnSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		//alert("white not found");
		AHseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		autumnSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let AHseal3 = document.querySelector('.AHseal3');
AHseal3.onclick = function() {
	myStyle = AHseal3.getAttribute('style');
	if(AHseal3.style.background !== "white") {
		//alert("white found");
		AHseal3.style="background: white;mix-blend-mode: saturation;";
		autumnSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		//alert("white not found");
		AHseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		autumnSeal3.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let AHseal4 = document.querySelector('.AHseal4');
AHseal4.onclick = function() {
	myStyle = AHseal4.getAttribute('style');
	if(AHseal4.style.background !== "white") {
		//alert("white found");
		AHseal4.style="background: white;mix-blend-mode: saturation;";
		autumnSeal4.setAttribute ('src','images/GraySealCheck.png');
	} else {
		//alert("white not found");
		AHseal4.style="background: none; rgba(FF,FF,FF,0.0);";
		autumnSeal4.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let CatoFTwarp = document.querySelector('.CatoFTwarp');
CatoFTwarp.onclick = function() {
	mySrc = CatoFTwarp.getAttribute('src');
	document.querySelector('.CaMapMax').style.visibility="hidden";
	document.querySelector('.FTMapMax').style.visibility="visible";
}
let CatoAHwarp = document.querySelector('.CatoAHwarp');
CatoAHwarp.onclick = function() {
	mySrc = CatoAHwarp.getAttribute('src');
	document.querySelector('.CaMapMax').style.visibility="hidden";
	document.querySelector('.AHMapMax').style.visibility="visible";
}
let CatoRTwarp = document.querySelector('.CatoRTwarp');
CatoRTwarp.onclick = function() {
	mySrc = CatoRTwarp.getAttribute('src');
	document.querySelector('.CaMapMax').style.visibility="hidden";
	document.querySelector('.RTMapMax').style.visibility="visible";
}
let CatoBCwarp = document.querySelector('.CatoBCwarp');
CatoBCwarp.onclick = function() {
	mySrc = CatoBCwarp.getAttribute('src');
	document.querySelector('.CaMapMax').style.visibility="hidden";
	document.querySelector('.BCMapMax').style.visibility="visible";
}
let amulet = document.querySelector('.amulet');
amulet.onclick = function() {
	myStyle = amulet.getAttribute('style');
	if(amulet.style.background !== "white") {
		amulet.style="background: white;mix-blend-mode: saturation;";
		catacombs1.setAttribute ('src','images/GrayCheck.png');
	} else {
		amulet.style="background: none; rgba(FF,FF,FF,0.0);";
		catacombs1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let necro = document.querySelector('.necro');
necro.onclick = function() {
	myStyle = necro.getAttribute('style');
	if(necro.style.background !== "white") {
		necro.style="background: white;mix-blend-mode: saturation;";
		catacombs2.setAttribute ('src','images/GrayCheck.png');
	} else {
		necro.style="background: none; rgba(FF,FF,FF,0.0);";
		catacombs2.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let Caseal1 = document.querySelector('.Caseal1');
Caseal1.onclick = function() {
	myStyle = Caseal1.getAttribute('style');
	if(Caseal1.style.background !== "white") {
		Caseal1.style="background: white;mix-blend-mode: saturation;";
		catacombsSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		Caseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		catacombsSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let Caseal2 = document.querySelector('.Caseal2');
Caseal2.onclick = function() {
	myStyle = Caseal2.getAttribute('style');
	if(Caseal2.style.background !== "white") {
		Caseal2.style="background: white;mix-blend-mode: saturation;";
		catacombsSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		Caseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		catacombsSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let Caseal3 = document.querySelector('.Caseal3');
Caseal3.onclick = function() {
	myStyle = Caseal3.getAttribute('style');
	if(Caseal3.style.background !== "white") {
		Caseal3.style="background: white;mix-blend-mode: saturation;";
		catacombsSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		Caseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		catacombsSeal3.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let FTtoAHwarp = document.querySelector('.FTtoAHwarp');
FTtoAHwarp.onclick = function() {
	mySrc = FTtoAHwarp.getAttribute('src');
	document.querySelector('.FTMapMax').style.visibility="hidden";
	document.querySelector('.AHMapMax').style.visibility="visible";
}
let FTtoCawarp = document.querySelector('.FTtoCawarp');
FTtoCawarp.onclick = function() {
	mySrc = FTtoCawarp.getAttribute('src');
	document.querySelector('.FTMapMax').style.visibility="hidden";
	document.querySelector('.CaMapMax').style.visibility="visible";
}
let FTtoBCwarp = document.querySelector('.FTtoBCwarp');
FTtoBCwarp.onclick = function() {
	mySrc = FTtoBCwarp.getAttribute('src');
	document.querySelector('.FTMapMax').style.visibility="hidden";
	document.querySelector('.BCMapMax').style.visibility="visible";
}
let crown = document.querySelector('.crown');
crown.onclick = function() {
	myStyle = crown.getAttribute('style');
	if(crown.style.background !== "white") {
		crown.style="background: white;mix-blend-mode: saturation;";
		forlorn1.setAttribute ('src','images/GrayCheck.png');
	} else {
		crown.style="background: none; rgba(FF,FF,FF,0.0);";
		forlorn1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let FTseal1 = document.querySelector('.FTseal1');
FTseal1.onclick = function() {
	myStyle = FTseal1.getAttribute('style');
	if(FTseal1.style.background !== "white") {
		FTseal1.style="background: white;mix-blend-mode: saturation;";
		forlornSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		FTseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		forlornSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let FTseal2 = document.querySelector('.FTseal2');
FTseal2.onclick = function() {
	myStyle = FTseal2.getAttribute('style');
	if(FTseal2.style.background !== "white") {
		FTseal2.style="background: white;mix-blend-mode: saturation;";
		forlornSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		FTseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		forlornSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let fairy = document.querySelector('.fairy');
fairy.onclick = function() {
	myStyle = fairy.getAttribute('style');
	if(fairy.style.background !== "white") {
		fairy.style="background: white;mix-blend-mode: saturation;";
		riviere1.setAttribute ('src','images/GrayCheck.png');
	} else {
		fairy.style="background: none; rgba(FF,FF,FF,0.0);";
		riviere1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let RTseal1 = document.querySelector('.RTseal1');
RTseal1.onclick = function() {
	myStyle = RTseal1.getAttribute('style');
	if(RTseal1.style.background !== "white") {
		RTseal1.style="background: white;mix-blend-mode: saturation;";
		riviereSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		RTseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		riviereSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let RTseal2 = document.querySelector('.RTseal2');
RTseal2.onclick = function() {
	myStyle = RTseal2.getAttribute('style');
	if(RTseal2.style.background !== "white") {
		RTseal2.style="background: white;mix-blend-mode: saturation;";
		riviereSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		RTseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		riviereSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let RTseal3 = document.querySelector('.RTseal3');
RTseal3.onclick = function() {
	myStyle = RTseal3.getAttribute('style');
	if(RTseal3.style.background !== "white") {
		RTseal3.style="background: white;mix-blend-mode: saturation;";
		riviereSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		RTseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		riviereSeal3.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let BCtoFTwarp = document.querySelector('.BCtoFTwarp');
BCtoFTwarp.onclick = function() {
	mySrc = BCtoFTwarp.getAttribute('src');
	document.querySelector('.BCMapMax').style.visibility="hidden";
	document.querySelector('.FTMapMax').style.visibility="visible";
}
let BCtoCawarp = document.querySelector('.BCtoCawarp');
BCtoCawarp.onclick = function() {
	mySrc = BCtoCawarp.getAttribute('src');
	document.querySelector('.BCMapMax').style.visibility="hidden";
	document.querySelector('.CaMapMax').style.visibility="visible";
}
let BCtoHGwarp = document.querySelector('.BCtoHGwarp');
BCtoHGwarp.onclick = function() {
	mySrc = BCtoHGwarp.getAttribute('src');
	document.querySelector('.BCMapMax').style.visibility="hidden";
	document.querySelector('.HGMapMax').style.visibility="visible";
}
let claustro = document.querySelector('.claustro');
claustro.onclick = function() {
	myStyle = claustro.getAttribute('style');
	if(claustro.style.background !== "white") {
		claustro.style="background: white;mix-blend-mode: saturation;";
		bamboo1.setAttribute ('src','images/GrayCheck.png');
	} else {
		claustro.style="background: none; rgba(FF,FF,FF,0.0);";
		bamboo1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let BCseal1 = document.querySelector('.BCseal1');
BCseal1.onclick = function() {
	myStyle = BCseal1.getAttribute('style');
	if(BCseal1.style.background !== "white") {
		BCseal1.style="background: white;mix-blend-mode: saturation;";
		bambooSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		BCseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		bambooSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let BCseal2 = document.querySelector('.BCseal2');
BCseal2.onclick = function() {
	myStyle = BCseal2.getAttribute('style');
	if(BCseal2.style.background !== "white") {
		BCseal2.style="background: white;mix-blend-mode: saturation;";
		bambooSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		BCseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		bambooSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let BCseal3 = document.querySelector('.BCseal3');
BCseal3.onclick = function() {
	myStyle = BCseal3.getAttribute('style');
	if(BCseal3.style.background !== "white") {
		BCseal3.style="background: white;mix-blend-mode: saturation;";
		bambooSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		BCseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		bambooSeal3.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let HGtoBCwarp = document.querySelector('.HGtoBCwarp');
HGtoBCwarp.onclick = function() {
	mySrc = HGtoBCwarp.getAttribute('src');
	document.querySelector('.HGMapMax').style.visibility="hidden";
	document.querySelector('.BCMapMax').style.visibility="visible";
}
let HGtoSSwarp = document.querySelector('.HGtoSSwarp');
HGtoSSwarp.onclick = function() {
	mySrc = HGtoSSwarp.getAttribute('src');
	document.querySelector('.HGMapMax').style.visibility="hidden";
	document.querySelector('.SSMapMax').style.visibility="visible";
}
let HGtoQMwarp = document.querySelector('.HGtoQMwarp');
HGtoQMwarp.onclick = function() {
	mySrc = HGtoQMwarp.getAttribute('src');
	document.querySelector('.HGMapMax').style.visibility="hidden";
	document.querySelector('.QMMapMax').style.visibility="visible";
}
let HGtoQMwarp2 = document.querySelector('.HGtoQMwarp2');
HGtoQMwarp2.onclick = function() {
	mySrc = HGtoQMwarp2.getAttribute('src');
	document.querySelector('.HGMapMax').style.visibility="hidden";
	document.querySelector('.QMMapMax').style.visibility="visible";
}
let wingsuit = document.querySelector('.wingsuit');
wingsuit.onclick = function() {
	myStyle = wingsuit.getAttribute('style');
	if(wingsuit.style.background !== "white") {
		wingsuit.style="background: white;mix-blend-mode: saturation;";
		howling1.setAttribute ('src','images/GrayCheck.png');
	} else {
		wingsuit.style="background: none; rgba(FF,FF,FF,0.0);";
		howling1.setAttribute ('src','images/GreenCheck.png');
	}
}
let HGseal1 = document.querySelector('.HGseal1');
HGseal1.onclick = function() {
	myStyle = HGseal1.getAttribute('style');
	if(HGseal1.style.background !== "white") {
		HGseal1.style="background: white;mix-blend-mode: saturation;";
		howlingSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		HGseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		howlingSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let HGseal2 = document.querySelector('.HGseal2');
HGseal2.onclick = function() {
	myStyle = HGseal2.getAttribute('style');
	if(HGseal2.style.background !== "white") {
		HGseal2.style="background: white;mix-blend-mode: saturation;";
		howlingSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		HGseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		howlingSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let HGseal3 = document.querySelector('.HGseal3');
HGseal3.onclick = function() {
	myStyle = HGseal3.getAttribute('style');
	if(HGseal3.style.background !== "white") {
		HGseal3.style="background: white;mix-blend-mode: saturation;";
		howlingSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		HGseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		howlingSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let SStoHGwarp = document.querySelector('.SStoHGwarp');
SStoHGwarp.onclick = function() {
	mySrc = SStoHGwarp.getAttribute('src');
	document.querySelector('.SSMapMax').style.visibility="hidden";
	document.querySelector('.HGMapMax').style.visibility="visible";
}
let tabi = document.querySelector('.tabi');
tabi.onclick = function() {
	myStyle = tabi.getAttribute('style');
	if(tabi.style.background !== "white") {
		tabi.style="background: white;mix-blend-mode: saturation;";
		sunken1.setAttribute ('src','images/GrayCheck.png');
	} else {
		tabi.style="background: none; rgba(FF,FF,FF,0.0);";
		sunken1.setAttribute ('src','images/GreenCheck.png');
	}
}
let sun = document.querySelector('.sun');
sun.onclick = function() {
	myStyle = sun.getAttribute('style');
	if(sun.style.background !== "white") {
		sun.style="background: white;mix-blend-mode: saturation;";
		sunken2.setAttribute ('src','images/GrayCheck.png');
	} else {
		sun.style="background: none; rgba(FF,FF,FF,0.0);";
		sunken2.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let moon = document.querySelector('.moon');
moon.onclick = function() {
	myStyle = moon.getAttribute('style');
	if(moon.style.background !== "white") {
		moon.style="background: white;mix-blend-mode: saturation;";
		sunken3.setAttribute ('src','images/GrayCheck.png');
	} else {
		moon.style="background: none; rgba(FF,FF,FF,0.0);";
		sunken3.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let love = document.querySelector('.love');
love.onclick = function() {
	myStyle = love.getAttribute('style');
	if(love.style.background !== "white") {
		love.style="background: white;mix-blend-mode: saturation;";
		sunken4.setAttribute ('src','images/GrayCheck.png');
	} else {
		love.style="background: none; rgba(FF,FF,FF,0.0);";
		sunken4.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let SSseal1 = document.querySelector('.SSseal1');
SSseal1.onclick = function() {
	myStyle = SSseal1.getAttribute('style');
	if(SSseal1.style.background !== "white") {
		SSseal1.style="background: white;mix-blend-mode: saturation;";
		sunkenSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		SSseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		sunkenSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let SSseal2 = document.querySelector('.SSseal2');
SSseal2.onclick = function() {
	myStyle = SSseal2.getAttribute('style');
	if(SSseal2.style.background !== "white") {
		SSseal2.style="background: white;mix-blend-mode: saturation;";
		sunkenSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		SSseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		sunkenSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let SSseal3 = document.querySelector('.SSseal3');
SSseal3.onclick = function() {
	myStyle = SSseal3.getAttribute('style');
	if(SSseal3.style.background !== "white") {
		SSseal3.style="background: white;mix-blend-mode: saturation;";
		sunkenSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		SSseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		sunkenSeal3.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let QMtoHGwarp = document.querySelector('.QMtoHGwarp');
QMtoHGwarp.onclick = function() {
	mySrc = QMtoHGwarp.getAttribute('src');
	document.querySelector('.QMMapMax').style.visibility="hidden";
	document.querySelector('.HGMapMax').style.visibility="visible";
}
let QMtoHGwarp2 = document.querySelector('.QMtoHGwarp2');
QMtoHGwarp2.onclick = function() {
	mySrc = QMtoHGwarp2.getAttribute('src');
	document.querySelector('.QMMapMax').style.visibility="hidden";
	document.querySelector('.HGMapMax').style.visibility="visible";
}
let QMtoSCwarp = document.querySelector('.QMtoSCwarp');
QMtoSCwarp.onclick = function() {
	mySrc = QMtoSCwarp.getAttribute('src');
	document.querySelector('.QMMapMax').style.visibility="hidden";
	document.querySelector('.SCMapMax').style.visibility="visible";
}
let QMtoSCwarp2 = document.querySelector('.QMtoSCwarp2');
QMtoSCwarp2.onclick = function() {
	mySrc = QMtoSCwarp2.getAttribute('src');
	document.querySelector('.QMMapMax').style.visibility="hidden";
	document.querySelector('.SCMapMax').style.visibility="visible";
}
let shell = document.querySelector('.shell');
shell.onclick = function() {
	myStyle = shell.getAttribute('style');
	if(shell.style.background !== "white") {
		shell.style="background: white;mix-blend-mode: saturation;";
		marsh1.setAttribute ('src','images/GrayCheck.png');
	} else {
		shell.style="background: none; rgba(FF,FF,FF,0.0);";
		marsh1.setAttribute ('src','images/GreenCheck.png');
	}
}
let QMseal1 = document.querySelector('.QMseal1');
QMseal1.onclick = function() {
	myStyle = QMseal1.getAttribute('style');
	if(QMseal1.style.background !== "white") {
		QMseal1.style="background: white;mix-blend-mode: saturation;";
		marshSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		QMseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		marshSeal1.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let QMseal2 = document.querySelector('.QMseal2');
QMseal2.onclick = function() {
	myStyle = QMseal2.getAttribute('style');
	if(QMseal2.style.background !== "white") {
		QMseal2.style="background: white;mix-blend-mode: saturation;";
		marshSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		QMseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		marshSeal2.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let QMseal3 = document.querySelector('.QMseal3');
QMseal3.onclick = function() {
	myStyle = QMseal3.getAttribute('style');
	if(QMseal3.style.background !== "white") {
		QMseal3.style="background: white;mix-blend-mode: saturation;";
		marshSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		QMseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		marshSeal3.setAttribute ('src','images/GreenSealCheck.png');
	}
}
let GPtoSCwarp = document.querySelector('.GPtoSCwarp');
GPtoSCwarp.onclick = function() {
	mySrc = GPtoSCwarp.getAttribute('src');
	document.querySelector('.GPMapMax').style.visibility="hidden";
	document.querySelector('.SCMapMax').style.visibility="visible";
}
let GPtoCRwarp = document.querySelector('.GPtoCRwarp');
GPtoCRwarp.onclick = function() {
	mySrc = GPtoCRwarp.getAttribute('src');
	document.querySelector('.GPMapMax').style.visibility="hidden";
	document.querySelector('.CRMapMax').style.visibility="visible";
}
let GPtoESwarp = document.querySelector('.GPtoESwarp');
GPtoESwarp.onclick = function() {
	mySrc = GPtoESwarp.getAttribute('src');
	document.querySelector('.GPMapMax').style.visibility="hidden";
	document.querySelector('.ESMapMax').style.visibility="visible";
}
let GPseal1 = document.querySelector('.GPseal1');
GPseal1.onclick = function() {
	myStyle = GPseal1.getAttribute('style');
	if(GPseal1.style.background !== "white") {
		GPseal1.style="background: white;mix-blend-mode: saturation;";
		glacialSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		GPseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		glacialSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let GPseal2 = document.querySelector('.GPseal2');
GPseal2.onclick = function() {
	myStyle = GPseal2.getAttribute('style');
	if(GPseal2.style.background !== "white") {
		GPseal2.style="background: white;mix-blend-mode: saturation;";
		glacialSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		GPseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		glacialSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let GPseal3 = document.querySelector('.GPseal3');
GPseal3.onclick = function() {
	myStyle = GPseal3.getAttribute('style');
	if(GPseal3.style.background !== "white") {
		GPseal3.style="background: white;mix-blend-mode: saturation;";
		glacialSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		GPseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		glacialSeal3.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let SCtoQMwarp = document.querySelector('.SCtoQMwarp');
SCtoQMwarp.onclick = function() {
	mySrc = SCtoQMwarp.getAttribute('src');
	document.querySelector('.SCMapMax').style.visibility="hidden";
	document.querySelector('.QMMapMax').style.visibility="visible";
}
let SCtoGPwarp = document.querySelector('.SCtoGPwarp');
SCtoGPwarp.onclick = function() {
	mySrc = SCtoGPwarp.getAttribute('src');
	document.querySelector('.SCMapMax').style.visibility="hidden";
	document.querySelector('.GPMapMax').style.visibility="visible";
}
let SCtoQMwarp2 = document.querySelector('.SCtoQMwarp2');
SCtoQMwarp2.onclick = function() {
	mySrc = SCtoQMwarp2.getAttribute('src');
	document.querySelector('.SCMapMax').style.visibility="hidden";
	document.querySelector('.QMMapMax').style.visibility="visible";
}
let SCtoUnwarp = document.querySelector('.SCtoUnwarp');
SCtoUnwarp.onclick = function() {
	mySrc = SCtoUnwarp.getAttribute('src');
	document.querySelector('.SCMapMax').style.visibility="hidden";
	document.querySelector('.UnMapMax').style.visibility="visible";
}
let grapple = document.querySelector('.grapple');
grapple.onclick = function() {
	myStyle = grapple.getAttribute('style');
	if(grapple.style.background !== "white") {
		grapple.style="background: white;mix-blend-mode: saturation;";
		crags1.setAttribute ('src','images/GrayCheck.png');
	} else {
		grapple.style="background: none; rgba(FF,FF,FF,0.0);";
		crags1.setAttribute ('src','images/GreenCheck.png');
	}
}
let thistle = document.querySelector('.thistle');
thistle.onclick = function() {
	myStyle = thistle.getAttribute('style');
	if(thistle.style.background !== "white") {
		thistle.style="background: white;mix-blend-mode: saturation;";
		crags2.setAttribute ('src','images/GrayCheck.png');
	} else {
		thistle.style="background: none; rgba(FF,FF,FF,0.0);";
		crags2.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let leaves = document.querySelector('.leaves');
leaves.onclick = function() {
	myStyle = leaves.getAttribute('style');
	if(leaves.style.background !== "white") {
		leaves.style="background: white;mix-blend-mode: saturation;";
	} else {
		leaves.style="background: none; rgba(FF,FF,FF,0.0);";
	}
}
let strength = document.querySelector('.strength');
strength.onclick = function() {
	myStyle = strength.getAttribute('style');
	if(strength.style.background !== "white") {
		strength.style="background: white;mix-blend-mode: saturation;";
		crags3.setAttribute ('src','images/GrayCheck.png');
	} else {
		strength.style="background: none; rgba(FF,FF,FF,0.0);";
		crags3.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let pyro = document.querySelector('.pyro');
pyro.onclick = function() {
	myStyle = pyro.getAttribute('style');
	if(pyro.style.background !== "white") {
		pyro.style="background: white;mix-blend-mode: saturation;";
		crags4.setAttribute ('src','images/GrayCheck.png');
	} else {
		pyro.style="background: none; rgba(FF,FF,FF,0.0);";
		crags4.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let SCseal1 = document.querySelector('.SCseal1');
SCseal1.onclick = function() {
	myStyle = SCseal1.getAttribute('style');
	if(SCseal1.style.background !== "white") {
		SCseal1.style="background: white;mix-blend-mode: saturation;";
		cragsSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		SCseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		cragsSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let SCseal2 = document.querySelector('.SCseal2');
SCseal2.onclick = function() {
	myStyle = SCseal1.getAttribute('style');
	if(SCseal2.style.background !== "white") {
		SCseal2.style="background: white;mix-blend-mode: saturation;";
		cragsSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		SCseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		cragsSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let SCseal3 = document.querySelector('.SCseal3');
SCseal3.onclick = function() {
	myStyle = SCseal3.getAttribute('style');
	if(SCseal3.style.background !== "white") {
		SCseal3.style="background: white;mix-blend-mode: saturation;";
		cragsSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		SCseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		cragsSeal3.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let UntoSCwarp = document.querySelector('.UntoSCwarp');
UntoSCwarp.onclick = function() {
	mySrc = UntoSCwarp.getAttribute('src');
	document.querySelector('.UnMapMax').style.visibility="hidden";
	document.querySelector('.SCMapMax').style.visibility="visible";
}
let chaos = document.querySelector('.chaos');
chaos.onclick = function() {
	myStyle = chaos.getAttribute('style');
	if(chaos.style.background !== "white") {
		chaos.style="background: white;mix-blend-mode: saturation;";
		underworld1.setAttribute ('src','images/GrayCheck.png');
	} else {
		chaos.style="background: none; rgba(FF,FF,FF,0.0);";
		underworld1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let Unseal1 = document.querySelector('.Unseal1');
Unseal1.onclick = function() {
	myStyle = Unseal1.getAttribute('style');
	if(Unseal1.style.background !== "white") {
		Unseal1.style="background: white;mix-blend-mode: saturation;";
		underworldSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		Unseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		underworldSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let Unseal2 = document.querySelector('.Unseal2');
Unseal2.onclick = function() {
	myStyle = Unseal2.getAttribute('style');
	if(Unseal2.style.background !== "white") {
		Unseal2.style="background: white;mix-blend-mode: saturation;";
		underworldSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		Unseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		underworldSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let Unseal3 = document.querySelector('.Unseal3');
Unseal3.onclick = function() {
	myStyle = Unseal3.getAttribute('style');
	if(Unseal3.style.background !== "white") {
		Unseal3.style="background: white;mix-blend-mode: saturation;";
		underworldSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		Unseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		underworldSeal3.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let Unseal4 = document.querySelector('.Unseal4');
Unseal4.onclick = function() {
	myStyle = Unseal4.getAttribute('style');
	if(Unseal4.style.background !== "white") {
		Unseal4.style="background: white;mix-blend-mode: saturation;";
		underworldSeal4.setAttribute ('src','images/GraySealCheck.png');
	} else {
		Unseal4.style="background: none; rgba(FF,FF,FF,0.0);";
		underworldSeal4.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let CRtoGPwarp = document.querySelector('.CRtoGPwarp');
CRtoGPwarp.onclick = function() {
	mySrc = CRtoGPwarp.getAttribute('src');
	document.querySelector('.CRMapMax').style.visibility="hidden";
	document.querySelector('.GPMapMax').style.visibility="visible";
}
let acro = document.querySelector('.acro');
acro.onclick = function() {
	myStyle = acro.getAttribute('style');
	if(acro.style.background !== "white") {
		acro.style="background: white;mix-blend-mode: saturation;";
		cloudruin1.setAttribute ('src','images/GrayCheck.png');
	} else {
		acro.style="background: none; rgba(FF,FF,FF,0.0);";
		cloudruin1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let CRseal1 = document.querySelector('.CRseal1');
CRseal1.onclick = function() {
	myStyle = CRseal1.getAttribute('style');
	if(CRseal1.style.background !== "white") {
		CRseal1.style="background: white;mix-blend-mode: saturation;";
		cloudruinSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		CRseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		cloudruinSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let CRseal2 = document.querySelector('.CRseal2');
CRseal2.onclick = function() {
	myStyle = CRseal2.getAttribute('style');
	if(CRseal2.style.background !== "white") {
		CRseal2.style="background: white;mix-blend-mode: saturation;";
		cloudruinSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		CRseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		cloudruinSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let CRseal3 = document.querySelector('.CRseal3');
CRseal3.onclick = function() {
	myStyle = CRseal3.getAttribute('style');
	if(CRseal3.style.background !== "white") {
		CRseal3.style="background: white;mix-blend-mode: saturation;";
		cloudruinSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		CRseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		cloudruinSeal3.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let CRseal4 = document.querySelector('.CRseal4');
CRseal4.onclick = function() {
	myStyle = CRseal4.getAttribute('style');
	if(CRseal4.style.background !== "white") {
		CRseal4.style="background: white;mix-blend-mode: saturation;";
		cloudruinSeal4.setAttribute ('src','images/GraySealCheck.png');
	} else {
		CRseal4.style="background: none; rgba(FF,FF,FF,0.0);";
		cloudruinSeal4.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let symbiosis = document.querySelector('.symbiosis');
symbiosis.onclick = function() {
	myStyle = symbiosis.getAttribute('style');
	if(symbiosis.style.background !== "white") {
		symbiosis.style="background: white;mix-blend-mode: saturation;";
		skylands1.setAttribute ('src','images/GrayCheck.png');
	} else {
		symbiosis.style="background: none; rgba(FF,FF,FF,0.0);";
		skylands1.setAttribute ('src','images/GreenCheck.png');
		logic();
	}
}
let ESseal1 = document.querySelector('.ESseal1');
ESseal1.onclick = function() {
	myStyle = ESseal1.getAttribute('style');
	if(ESseal1.style.background !== "white") {
		ESseal1.style="background: white;mix-blend-mode: saturation;";
		skylandsSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		ESseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		skylandsSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let ESseal2 = document.querySelector('.ESseal2');
ESseal2.onclick = function() {
	myStyle = ESseal2.getAttribute('style');
	if(ESseal2.style.background !== "white") {
		ESseal2.style="background: white;mix-blend-mode: saturation;";
		skylandsSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		ESseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		skylandsSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let ESseal3 = document.querySelector('.ESseal3');
ESseal3.onclick = function() {
	myStyle = ESseal3.getAttribute('style');
	if(ESseal3.style.background !== "white") {
		ESseal3.style="background: white;mix-blend-mode: saturation;";
		skylandsSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		ESseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		skylandsSeal3.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let TTseal1 = document.querySelector('.TTseal1');
TTseal1.onclick = function() {
	myStyle = TTseal1.getAttribute('style');
	if(TTseal1.style.background !== "white") {
		TTseal1.style="background: white;mix-blend-mode: saturation;";
		towerSeal1.setAttribute ('src','images/GraySealCheck.png');
	} else {
		TTseal1.style="background: none; rgba(FF,FF,FF,0.0);";
		towerSeal1.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let TTseal2 = document.querySelector('.TTseal2');
TTseal2.onclick = function() {
	myStyle = TTseal2.getAttribute('style');
	if(TTseal2.style.background !== "white") {
		TTseal2.style="background: white;mix-blend-mode: saturation;";
		towerSeal2.setAttribute ('src','images/GraySealCheck.png');
	} else {
		TTseal2.style="background: none; rgba(FF,FF,FF,0.0);";
		towerSeal2.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let TTseal3 = document.querySelector('.TTseal3');
TTseal3.onclick = function() {
	myStyle = TTseal3.getAttribute('style');
	if(TTseal3.style.background !== "white") {
		TTseal3.style="background: white;mix-blend-mode: saturation;";
		towerSeal3.setAttribute ('src','images/GraySealCheck.png');
	} else {
		TTseal3.style="background: none; rgba(FF,FF,FF,0.0);";
		towerSeal3.setAttribute ('src','images/GreenSealCheck.png');
		logic();
	}
}
let backButton = document.querySelector('.backButton');
backButton.onclick = function() {
	mySrc = backButton.getAttribute('src');
	//alert("you pressed BACK BUTTON");
	document.querySelector('.MinimizedMap').style.visibility="visible";
	if(isAdvanced)
		document.getElementById('SealImages').style.visibility="visible";
	document.querySelector('.NVMapMax').style.visibility="hidden";
	document.querySelector('.AHMapMax').style.visibility="hidden";
	document.querySelector('.CaMapMax').style.visibility="hidden";
	document.querySelector('.FTMapMax').style.visibility="hidden";
	document.querySelector('.RTMapMax').style.visibility="hidden";
	document.querySelector('.BCMapMax').style.visibility="hidden";
	document.querySelector('.HGMapMax').style.visibility="hidden";
	document.querySelector('.SSMapMax').style.visibility="hidden";
	document.querySelector('.QMMapMax').style.visibility="hidden";
	document.querySelector('.GPMapMax').style.visibility="hidden";
	document.querySelector('.SCMapMax').style.visibility="hidden";
	document.querySelector('.UnMapMax').style.visibility="hidden";
	document.querySelector('.CRMapMax').style.visibility="hidden";
	document.querySelector('.ESMapMax').style.visibility="hidden";
	document.querySelector('.TTMapMax').style.visibility="hidden";
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
		} else {
			crags3.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = crags4.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasTabi === true) {
			crags4.setAttribute('src','images/GreenCheck.png');
		} else {
			crags4.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = skylands1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasFly === true && hasGrapple === true) {
			skylands1.setAttribute('src','images/GreenCheck.png');
		} else if(hasGrapple === true || hasWindmill === true || hasWingsuit === true || hasFly === true) {
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
			cloudruin1.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = underworld1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasTabi === true) {
			underworld1.setAttribute('src','images/GreenCheck.png');
		} else {
			underworld1.setAttribute('src','images/YellowCheck.png');
		}
	}
	mySrc = bamboo1.getAttribute('src');
	if(mySrc !== 'images/GrayCheck.png') {
		if(hasWingsuit === true) {
			bamboo1.setAttribute('src','images/GreenCheck.png');
		} else if(hasGrapple === true) {
			bamboo1.setAttribute('src','images/OrangeCheck.png');
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
		} else {
			forlorn1.setAttribute('src','images/YellowCheck.png');
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
	//Seals logic
	if(isAdvanced === true) {
		mySrc = villageSeal1.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true && hasGrapple === true) {
				villageSeal1.setAttribute('src','images/GreenSealCheck.png');
			} else if(hasGrapple === true) { 
				villageSeal1.setAttribute('src','images/YellowSealCheck.png');
			} else {
				villageSeal1.setAttribute('src','images/RedSealCheck.png');
			}
		}
		mySrc = autumnSeal1.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true) {
				autumnSeal1.setAttribute('src','images/GreenSealCheck.png');
			} else {
				autumnSeal1.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = autumnSeal2.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true) {
				autumnSeal2.setAttribute('src','images/GreenSealCheck.png');
			} else {
				autumnSeal2.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = autumnSeal3.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true) {
				autumnSeal3.setAttribute('src','images/GreenSealCheck.png');
			} else {
				autumnSeal3.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = autumnSeal4.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true) {
				autumnSeal4.setAttribute('src','images/GreenSealCheck.png');
			} else if(hasWindmill === true || hasGrapple === true) {
				autumnSeal4.setAttribute('src','images/YellowSealCheck.png');
			} else {
				autumnSeal4.setAttribute('src','images/RedSealCheck.png');
			}
		}
		mySrc = forlornSeal1.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasClaustro === true && hasNecro === true && hasAcro === true && hasPyro === true && hasWingsuit === true) {
				forlornSeal1.setAttribute('src','images/GreenSealCheck.png');
			} else {
				forlornSeal1.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = forlornSeal2.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasClaustro === true && hasNecro === true && hasAcro === true && hasPyro === true && hasWingsuit === true) {
				forlornSeal2.setAttribute('src','images/GreenSealCheck.png');
			} else {
				forlornSeal2.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = catacombsSeal1.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true) {
				catacombsSeal1.setAttribute('src','images/GreenSealCheck.png');
			} else {
				catacombsSeal1.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = catacombsSeal2.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true) {
				catacombsSeal2.setAttribute('src','images/GreenSealCheck.png');
			} else {
				catacombsSeal2.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = catacombsSeal3.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true) {
				catacombsSeal3.setAttribute('src','images/GreenSealCheck.png');
			} else {
				catacombsSeal3.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = bambooSeal1.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true) {
				bambooSeal1.setAttribute('src','images/GreenSealCheck.png');
			} else {
				bambooSeal1.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = bambooSeal2.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true) {
				bambooSeal2.setAttribute('src','images/GreenSealCheck.png');
			} else {
				bambooSeal2.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = bambooSeal3.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true) {
				bambooSeal3.setAttribute('src','images/GreenSealCheck.png');
			} else {
				bambooSeal3.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = cragsSeal1.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true || hasGrapple === true) {
				cragsSeal1.setAttribute('src','images/GreenSealCheck.png');
			} else {
				cragsSeal1.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = cragsSeal2.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true || hasGrapple === true) {
				cragsSeal2.setAttribute('src','images/GreenSealCheck.png');
			} else {
				cragsSeal2.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = cragsSeal3.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true || hasGrapple === true) {
				cragsSeal3.setAttribute('src','images/GreenSealCheck.png');
			} else {
				cragsSeal3.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = glacialSeal1.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasGrapple === true) {
				glacialSeal1.setAttribute('src','images/GreenSealCheck.png');
			} else {
				glacialSeal1.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = glacialSeal2.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true || hasGrapple === true) {
				glacialSeal2.setAttribute('src','images/GreenSealCheck.png');
			} else {
				glacialSeal2.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = glacialSeal3.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true || hasGrapple === true) {
				glacialSeal3.setAttribute('src','images/GreenSealCheck.png');
			} else {
				glacialSeal3.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = towerSeal1.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasGrapple === true) {
				towerSeal1.setAttribute('src','images/GreenSealCheck.png');
			} else if(hasWindmill === true) { 
				towerSeal1.setAttribute('src','images/YellowSealCheck.png');
			} else {
				towerSeal1.setAttribute('src','images/RedSealCheck.png');
			}
		}
		mySrc = towerSeal2.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true) {
				towerSeal2.setAttribute('src','images/GreenSealCheck.png');
			} else {
				towerSeal2.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = towerSeal3.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true && hasGrapple === true) {
				towerSeal3.setAttribute('src','images/GreenSealCheck.png');
			} else {
				towerSeal3.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = cloudruinSeal1.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasAmulet === true && hasWingsuit === true) {
				cloudruinSeal1.setAttribute('src','images/GreenSealCheck.png');
			} else {
				cloudruinSeal1.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = cloudruinSeal2.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasAmulet === true && hasWingsuit === true) {
				cloudruinSeal2.setAttribute('src','images/GreenSealCheck.png');
			} else {
				cloudruinSeal2.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = cloudruinSeal3.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasAmulet === true && hasWingsuit === true) {
				cloudruinSeal3.setAttribute('src','images/GreenSealCheck.png');
			} else {
				cloudruinSeal3.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = cloudruinSeal4.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasAmulet === true && hasWingsuit === true) {
				cloudruinSeal4.setAttribute('src','images/GreenSealCheck.png');
			} else {
				cloudruinSeal4.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = underworldSeal1.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true && hasTabi === true) {
				underworldSeal1.setAttribute('src','images/GreenSealCheck.png');
			} else {
				underworldSeal1.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = underworldSeal2.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasTabi === true) {
				underworldSeal2.setAttribute('src','images/GreenSealCheck.png');
			} else {
				underworldSeal2.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = underworldSeal3.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true && hasTabi === true) {
				underworldSeal3.setAttribute('src','images/GreenSealCheck.png');
			} else {
				underworldSeal3.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = underworldSeal4.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasGrapple === true && hasTabi === true) {
				underworldSeal4.setAttribute('src','images/GreenSealCheck.png');
			} else if(hasWingsuit === true || hasGrapple === true) {
				underworldSeal4.setAttribute('src','images/YellowSealCheck.png');
			} else {
				underworldSeal4.setAttribute('src','images/RedSealCheck.png');
			}
		}
		mySrc = sunkenSeal2.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasTabi === true) {
				sunkenSeal2.setAttribute('src','images/GreenSealCheck.png');
			} else {
				sunkenSeal2.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = sunkenSeal3.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasTabi === true) {
				sunkenSeal3.setAttribute('src','images/GreenSealCheck.png');
			} else {
				sunkenSeal3.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = riviereSeal3.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasWingsuit === true || hasGrapple === true) {
				riviereSeal3.setAttribute('src','images/GreenSealCheck.png');
			} else {
				riviereSeal3.setAttribute('src','images/YellowSealCheck.png');
			}
		}
		mySrc = skylandsSeal1.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasFly === true && hasWingsuit === true) {
				skylandsSeal1.setAttribute('src','images/GreenSealCheck.png');
			} else if(hasWingsuit === true || hasGrapple === true || hasWindmill === true || hasFly === true) {
				skylandsSeal1.setAttribute('src','images/YellowSealCheck.png');
			} else {
				skylandsSeal1.setAttribute('src','images/RedSealCheck.png');
			}
		}
		mySrc = skylandsSeal2.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasFly === true && hasGrapple === true) {
				skylandsSeal2.setAttribute('src','images/GreenSealCheck.png');
			} else if(hasGrapple === true || hasWindmill === true || hasWingsuit === true || hasFly === true) {
				skylandsSeal2.setAttribute('src','images/YellowSealCheck.png');
			} else {
				skylandsSeal2.setAttribute('src','images/RedSealCheck.png');
			}
		}
		mySrc = skylandsSeal3.getAttribute('src');
		if(mySrc !== 'images/GraySealCheck.png') {
			if(hasFly === true && hasGrapple === true) {
				skylandsSeal3.setAttribute('src','images/GreenSealCheck.png');
			} else if(hasWingsuit === true || hasGrapple === true || hasWindmill === true || hasFly === true) {
				skylandsSeal3.setAttribute('src','images/YellowSealCheck.png');
			} else {
				skylandsSeal3.setAttribute('src','images/RedSealCheck.png');
			}
		}
	}
	if(isPP === true) {
		mySrc = mask3.getAttribute('src');
		if(mySrc !== 'images/GrayPPCheck.png') {
			if(hasGrapple === true) {
				mask3.setAttribute('src','images/GreenPPCheck.png');
			} else {
				mask3.setAttribute('src','images/YellowPPCheck.png');
			}
		}
		mySrc = mask4.getAttribute('src');
		if(mySrc !== 'images/GrayPPCheck.png') {
			if(hasGrapple === true && hasWingsuit === true) {
				mask4.setAttribute('src','images/GreenPPCheck.png');
			} else {
				mask4.setAttribute('src','images/RedPPCheck.png');
			}
		}
		mySrc = mask5.getAttribute('src');
		if(mySrc !== 'images/GrayPPCheck.png') {
			if(hasGrapple === true && hasWingsuit === true) {
				mask5.setAttribute('src','images/GreenPPCheck.png');
			} else if(hasWingsuit === true) { 
				mask5.setAttribute('src','images/YellowPPCheck.png');
			} else {
				mask5.setAttribute('src','images/RedPPCheck.png');
			}
		}
		mySrc = mask6.getAttribute('src');
		if(mySrc !== 'images/GrayPPCheck.png') {
			if(hasGrapple === true && hasWingsuit === true) {
				mask6.setAttribute('src','images/GreenPPCheck.png');
			} else if(hasWingsuit === true) {
				mask6.setAttribute('src','images/YellowPPCheck.png');
			} else {
				mask6.setAttribute('src','images/RedPPCheck.png');
			}
		}
		mySrc = mask7.getAttribute('src');
		if(mySrc !== 'images/GrayPPCheck.png') {
			if(hasGrapple === true && hasWingsuit === true) {
				mask7.setAttribute('src','images/GreenPPCheck.png');
			} else if(hasWingsuit === true) {
				mask7.setAttribute('src','images/YellowPPCheck.png');
			} else {
				mask7.setAttribute('src','images/RedPPCheck.png');
			}
		}
		mySrc = mask8.getAttribute('src');
		if(mySrc !== 'images/GrayPPCheck.png') {
			if(hasGrapple === true && hasWingsuit === true) {
				mask8.setAttribute('src','images/GreenPPCheck.png');
			} else if(hasWingsuit === true) {
				mask8.setAttribute('src','images/YellowPPCheck.png');
			} else {
				mask8.setAttribute('src','images/RedPPCheck.png');
			}
		}
		mySrc = mask9.getAttribute('src');
		if(mySrc !== 'images/GrayPPCheck.png') {
			if(hasGrapple === true && hasWingsuit === true) {
				mask9.setAttribute('src','images/GreenPPCheck.png');
			} else if(hasWingsuit === true) {
				mask9.setAttribute('src','images/YellowPPCheck.png');
			} else {
				mask9.setAttribute('src','images/RedPPCheck.png');
			}
		}
		mySrc = mask10.getAttribute('src');
		if(mySrc !== 'images/GrayPPCheck.png') {
			if(hasGrapple === true && hasWingsuit === true) {
				mask10.setAttribute('src','images/GreenPPCheck.png');
			} else if(hasWingsuit === true) {
				mask10.setAttribute('src','images/YellowPPCheck.png');
			} else {
				mask10.setAttribute('src','images/RedPPCheck.png');
			}
		}
	}
}