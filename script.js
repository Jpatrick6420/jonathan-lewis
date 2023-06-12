
  

const arm = document.getElementById('arm');

const type = document.getElementById('type');

const seatDepth = document.getElementById('seatDepth');

const seatType = document.getElementById('seatType');

const leg = document.getElementById('leg');

const submit = document.getElementById('submit');






function specialOrderCode(){

// armstyle
let armstyle = "";

if (arm.value == "track") {armstyle = 100} 
else if (arm.value == "roll") {armstyle = 101}
else if ( arm.value == "flare") {armstyle = 102} 
else if (arm.value == "slopeTrack") {armstyle= 105} 
else if (arm.value == "slopeRoll") {armstyle= 104} 
else if (arm.value == "slopeFlare") {armstyle= 103}









//itemType

let itemType ='';

if (type.value == 'sofaPlus') 
{itemType = '-70xx' ;} 
else if (type.value == 'sofa') 
{itemType = '-30xx';} 
else if (type.value == 'loftSofa')
{itemType = '-60xx';}
else if (type.value == 'loveSeat')
{itemType = '-20xx';}
else if (type.value == 'armChair')
{itemType = '-01xx';} 
else if (type.value == 'ottoman')
{itemType = '-02xx';} 
else if (type.value == 'cuddleChair')
{itemType = '-00xx';} 
else if (type.value == 'cuddleOttoman')
{itemType = '-38xx';}
else if (type.value == 'armlessChair') {itemType = '-10xx';} else if (type.value == 'armlessLoftSofa') {itemType = '-03xx';} else if (type.value == 'cornerUnit') {itemType = '-15xx';} else if (type.value == 'cuddleCorner') {itemType = '-11xx';} else if (type.value == '1armChair') {itemType = '-04LF/RF';} else if (type.value == '1armCuddleChair') {itemType = '-74LF/RF';} else if (type.value == '1armChaise') {itemType = '-82LF/RF';} else if (type.value == '1armCuddleChaise') {itemType = '-80LF/RF';} else if (type.value == '1armLoftSofa') {itemType = '-26LF/RF';} else if (type.value == '1armBumperChaise') {itemType = '-13LF/RF';}


  
//depth

let depth ="";

if (seatDepth.value == "classic") {depth = "C"} else {depth = "D"}

//cushion

let cushion ="";

if (seatType.value == "foam") {cushion = "F"} else {cushion= "P"}

//leg

let legType ="";

if (leg.value == 'taperedWalnut') {legType = 'A';} else if (leg.value == 'taperedCarbon') {legType = 'C';} else if (leg.value == 'taperedNatural') {legType = 'B';} else if (leg.value == 'coneWalnut') {legType = 'D';} else if (leg.value == 'coneCarbon') {legType = 'F';} else if (leg.value == 'coneNatural') {legType = 'E';} else if (leg.value == 'metalNickel') {legType = 'G';}else if (leg.value == 'metalCarbon') {legType = 'I';} else if (leg.value == 'metalBrass') {legType = 'H';}


let unitPrice;

switch (type.value){
case "sofaPlus": unitPrice = "$1147"; break;
case "sofa" : unitPrice = "$1026";
break;
case "loftSofa" : unitPrice = "$1002";
break;
case "loveSeat" : unitPrice = "$978";
break;
case "armChair": unitPrice = "$809";
break;
case "ottoman" : unitPrice = "$314";
break;
case "cuddleChair" : unitPrice = "881";
break;
case "cuddleOttoman": unitPrice = "$350";
break;
case "armlessChair" : unitPrice = "$543";
break;
case "armlessLoftSofa" : unitPrice = "$785";
break;
case "cornerUnit": unitPrice = "$604";
break;
case "cuddleCorner" : unitPrice = "$785";
break;
case "1armChair" : unitPrice = "$604";
break;
case "1armCuddleChair": unitPrice = "$664";
break;
case "1armChaise" : unitPrice = "$833";
break;
case "1armCuddleChaise" : unitPrice = "906";
break;
case "1armLoffSofa": unitPrice = "$833";
break;
case "1armBumperChaise" : unitPrice = "$644";
break;
}

document.querySelector('#test').innerHTML = `Model: DL ${armstyle} ${itemType} ${depth} ${cushion} XX ${legType}.`;

document.querySelector('#note').innerHTML = "*Armless pieces always begin with DL 100 because there's no arm style"}

