let windmillT = document.querySelector('.windmillBW');
let mySrc;
let x = 0;

windmillT.onclick = function() {
    mySrc = windmillT.getAttribute('src');
    if(mySrc === 'images/Icon_WindmillShurikenBW.png') {
      windmillT.setAttribute ('src','images/Icon_WindmillShuriken.png');
    } else {
      windmillT.setAttribute ('src','images/Icon_WindmillShurikenBW.png');
    }
}

let wingsuitT = document.querySelector('.wingsuitBW');
wingsuitT.onclick = function() {
	mySrc = wingsuitT.getAttribute('src');
	if(mySrc === 'images/Icon_WingsuitBW.png') {
		wingsuitT.setAttribute ('src','images/Icon_Wingsuit.png');
	} else {
		wingsuitT.setAttribute ('src','images/Icon_WingsuitBW.png')
	}
}

let grappleT = document.querySelector('.grappleBW');
grappleT.onclick = function() {
	mySrc = grappleT.getAttribute('src');
	if(mySrc === 'images/Icon_GraplouBW.png') {
		grappleT.setAttribute ('src','images/Icon_Graplou.png');
	} else {
		grappleT.setAttribute ('src','images/Icon_GraplouBW.png')
	}
}

let tabiT = document.querySelector('.tabiBW');
tabiT.onclick = function() {
	mySrc = tabiT.getAttribute('src');
	if(mySrc === 'images/Icon_LightfootTabiBW.png') {
		tabiT.setAttribute ('src','images/Icon_LightfootTabi.png');
	} else {
		tabiT.setAttribute ('src','images/Icon_LightfootTabiBW.png')
	}
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
		shellT.setAttribute ('src','images/Icon_EnchantedSeashellBW.png')
	}
}

let thistleT = document.querySelector('.thistleBW');
thistleT.onclick = function() {
	mySrc = thistleT.getAttribute('src');
	if(mySrc === 'images/Icon_PowerThistleBW.png') {
		thistleT.setAttribute ('src','images/Icon_PowerThistle.png');
	} else {
		thistleT.setAttribute ('src','images/Icon_PowerThistleBW.png')
	}
}

let crownT = document.querySelector('.crownBW');
crownT.onclick = function() {
	mySrc = crownT.getAttribute('src');
	if(mySrc === 'images/Icon_DemonCrownBW.png') {
		crownT.setAttribute ('src','images/Icon_DemonCrown.png');
	} else {
		crownT.setAttribute ('src','images/Icon_DemonCrownBW.png')
	}
}

let amuletT = document.querySelector('.amuletBW');
amuletT.onclick = function() {
	mySrc = amuletT.getAttribute('src');
	if(mySrc === 'images/Icon_NecromancerAmuletBW.png') {
		amuletT.setAttribute ('src','images/Icon_NecromancerAmulet.png');
	} else {
		amuletT.setAttribute ('src','images/Icon_NecromancerAmuletBW.png')
	}
}

let flyT = document.querySelector('.flyBW');
flyT.onclick = function() {
	mySrc = flyT.getAttribute('src');
	if(mySrc === 'images/Icon_MagicFireflyBW.png') {
		flyT.setAttribute ('src','images/Icon_MagicFirefly.png');
	} else {
		flyT.setAttribute ('src','images/Icon_MagicFireflyBW.png')
	}
}

let sunT = document.querySelector('.sunBW');
sunT.onclick = function() {
	mySrc = sunT.getAttribute('src');
	if(mySrc === 'images/Icon_SunCrestBW.png') {
		sunT.setAttribute ('src','images/Icon_SunCrest.png');
	} else {
		sunT.setAttribute ('src','images/Icon_SunCrestBW.png')
	}
}

let moonT = document.querySelector('.moonBW');
moonT.onclick = function() {
	mySrc = moonT.getAttribute('src');
	if(mySrc === 'images/Icon_MoonCrestBW.png') {
		moonT.setAttribute ('src','images/Icon_MoonCrest.png');
	} else {
		moonT.setAttribute ('src','images/Icon_MoonCrestBW.png')
	}
}

let chaosT = document.querySelector('.chaosBW');
chaosT.onclick = function() {
	mySrc = chaosT.getAttribute('src');
	if(mySrc === 'images/Icon_KeyChaosBW.png') {
		chaosT.setAttribute ('src','images/Icon_KeyChaos.png');
	} else {
		chaosT.setAttribute ('src','images/Icon_KeyChaosBW.png')
	}
}

let hopeT = document.querySelector('.hopeBW');
hopeT.onclick = function() {
	mySrc = hopeT.getAttribute('src');
	if(mySrc === 'images/Icon_KeyHopeBW.png') {
		hopeT.setAttribute ('src','images/Icon_KeyHope.png');
	} else {
		hopeT.setAttribute ('src','images/Icon_KeyHopeBW.png')
	}
}

let courageT = document.querySelector('.courageBW');
courageT.onclick = function() {
	mySrc = courageT.getAttribute('src');
	if(mySrc === 'images/Icon_KeyCourageBW.png') {
		courageT.setAttribute ('src','images/Icon_KeyCourage.png');
	} else {
		courageT.setAttribute ('src','images/Icon_KeyCourageBW.png')
	}
}

let loveT = document.querySelector('.loveBW');
loveT.onclick = function() {
	mySrc = loveT.getAttribute('src');
	if(mySrc === 'images/Icon_KeyLoveBW.png') {
		loveT.setAttribute ('src','images/Icon_KeyLove.png');
	} else {
		loveT.setAttribute ('src','images/Icon_KeyLoveBW.png')
	}
}

let symbiosisT = document.querySelector('.symbiosisBW');
symbiosisT.onclick = function() {
	mySrc = symbiosisT.getAttribute('src');
	if(mySrc === 'images/Icon_KeySymbiosisBW.png') {
		symbiosisT.setAttribute ('src','images/Icon_KeySymbiosis.png');
	} else {
		symbiosisT.setAttribute ('src','images/Icon_KeySymbiosisBW.png')
	}
}

let strengthT = document.querySelector('.strengthBW');
strengthT.onclick = function() {
	mySrc = strengthT.getAttribute('src');
	if(mySrc === 'images/Icon_KeyStrengthBW.png') {
		strengthT.setAttribute ('src','images/Icon_KeyStrength.png');
	} else {
		strengthT.setAttribute ('src','images/Icon_KeyStrengthBW.png')
	}
}

let acroT = document.querySelector('.acroBW');
acroT.onclick = function() {
	mySrc = acroT.getAttribute('src');
	if(mySrc === 'images/Icon_PhobekinAcroBW.png') {
		acroT.setAttribute ('src','images/Icon_PhobekinAcro.png');
	} else {
		acroT.setAttribute ('src','images/Icon_PhobekinAcroBW.png')
	}
}

let necroT = document.querySelector('.necroBW');
necroT.onclick = function() {
	mySrc = necroT.getAttribute('src');
	if(mySrc === 'images/Icon_PhobekinNecroBW.png') {
		necroT.setAttribute ('src','images/Icon_PhobekinNecro.png');
	} else {
		necroT.setAttribute ('src','images/Icon_PhobekinNecroBW.png')
	}
}

let claustroT = document.querySelector('.claustroBW');
claustroT.onclick = function() {
	mySrc = claustroT.getAttribute('src');
	if(mySrc === 'images/Icon_PhobekinClaustroBW.png') {
		claustroT.setAttribute ('src','images/Icon_PhobekinClaustro.png');
	} else {
		claustroT.setAttribute ('src','images/Icon_PhobekinClaustroBW.png')
	}
}

let pyroT = document.querySelector('.pyroBW');
pyroT.onclick = function() {
	mySrc = pyroT.getAttribute('src');
	if(mySrc === 'images/Icon_PhobekinPyroBW.png') {
		pyroT.setAttribute ('src','images/Icon_PhobekinPyro.png');
	} else {
		pyroT.setAttribute ('src','images/Icon_PhobekinPyroBW.png')
	}
}