const arm = document.getElementById('arm');
const type = document.getElementById('type');
const seatDepth = document.getElementById('seatDepth');
const seatType = document.getElementById('seatType');
const leg = document.getElementById('leg');
const submit = document.getElementById('submit');

function specialOrderCode() {

    document.querySelector('#test').innerHTML = `Model: DL ${armStyle(arm.value)} 
    ${itemType(type.value)} 
    ${sofaDepth(seatDepth.value)} 
    ${cushionStyle(seatType.value)} 
    XX 
    ${legType(leg.value)}.`;
    document.getElementById('price').innerHTML = unitPrice(seatType.value);

    document.querySelector('#note').innerHTML = "*Armless pieces always begin with DL 100 because there's no arm style"
}

function armStyle(style) {
    let armStyleCode;

    switch (style) {

        case "track": armStyleCode = 100; break;
        case "roll": armStyleCode = 101; break;
        case "flare": armStyleCode = 102; break;
        case "slopeTrack": armStyleCode = 105; break;
        case "slopeRoll": armStyleCode = 104; break;
        case "slopeFlare": armStyleCode = 103; break;
        default: console.log(arm.value + "was selected");
    }
    return armStyleCode
}

function itemType(style) {

    let itemType = '';

    switch (style) {
        case "sofaPlus": itemType = "-70xx"; break;
        case 'sofa': itemType = '-30xx'; break;
        case 'loftSofa': itemType = '-60xx'; break;
        case 'loveSeat': itemType = '-20xx'; break;
        case 'armChair': itemType = '-01xx'; break;
        case 'ottoman': itemType = '-02xx'; break;
        case 'cuddleChair': itemType = '-00xx'; break;
        case 'cuddleOttoman': itemType = '-38xx'; break;
        case 'armlessChair': itemType = '-10xx'; break;
        case 'armlessLoftSofa': itemType = '-03xx'; break;
        case 'cornerUnit': itemType = '-15xx'; break;
        case 'cuddleCorner': itemType = '-11xx'; break;
        case '1armChair': itemType = '-04LF/RF'; break;
        case '1armCuddleChair': itemType = '-74LF/RF'; break;
        case '1armChaise': itemType = '-82LF/RF'; break;
        case '1armCuddleChaise': itemType = '-80LF/RF'; break;
        case '1armLoftSofa': itemType = '-26LF/RF'; break;
        case '1armBumperChaise': itemType = '-13LF/RF'; break;
        default: console.log("there was no arm item type selected")

    }
    return itemType;

}

function sofaDepth(style) {
    let depth = "";

    if (style == "classic") { depth = "C" } else { depth = "D" }

    return depth;
}


function legType(style) {
    let legType = "";

    switch (style) {
        case 'taperedWalnut': legType = 'A'; break;
        case 'taperedCarbon': legType = 'C'; break;
        case 'taperedNatural': legType = 'B'; break;
        case 'coneWalnut': legType = 'D'; break;
        case 'coneCarbon': legType = 'F'; break;
        case 'coneNatural': legType = 'E'; break;
        case 'metalNickel': legType = 'G'; break;
        case 'metalCarbon': legType = 'I'; break;
        case 'metalBrass': legType = 'H'; break;
    }
    return legType;
}

function cushionStyle(style) {
    let cushion = "";

    if (style == "foam") { cushion = "F" } else { cushion = "P" }
    return cushion;
}
function unitPrice(cushionType) {
    let unitPrice;


    if (type.value === "sofaPlus" && cushionStyle(cushionType) === "F") {
        unitPrice = "$1147";
    }
    else if (type.value === "sofaPlus" && cushionStyle(cushionType) === "P") {
        unitPrice = "$1570"
    }
    else if (type.value === "sofa" && cushionStyle(cushionType) === "F") {
        unitPrice = "$1026"
    }
    else if (type.value === "sofa" && cushionStyle(cushionType) === "P") {
        unitPrice = "$1449"
    }
    else if (type.value === "loftSofa" && cushionStyle(cushionType) === "F") {
        unitPrice = "$1002"
    }
    else if (type.value === "loftSofa" && cushionStyle(cushionType) === "P") {
        unitPrice = "$1328"
    }
    else if (type.value === "loveSeat" && cushionStyle(cushionType) === "F") {
        unitPrice = "$978"
    }
    else if (type.value === "loveSeat" && cushionStyle(cushionType) === "P") {
        unitPrice = "$1244"
    }
    else if (type.value === "armChair" && cushionStyle(cushionType) === "F") {
        unitPrice = "$809"
    }
    else if (type.value === "armChair" && cushionStyle(cushionType) === "P") {
        unitPrice = "$966"
    }
    else if (type.value === " ottoman" && cushionStyle(cushionType) === "F") {
        unitPrice = "$314"
    }
    else if (type.value === " ottoman" && cushionStyle(cushionType) === "P") {
        unitPrice = "$471"
    }

    else if (type.value === "cuddleChair" && cushionStyle(cushionType) === "F") {
        unitPrice = "$881"
    }
    else if (type.value === "cuddleChair" && cushionStyle(cushionType) === "P") {
        unitPrice = "$1111"
    }
    else if (type.value === "cuddleOttoman" && cushionStyle(cushionType) === "F") {
        unitPrice = "$350"
    }
    else if (type.value === "cuddleOttoman" && cushionStyle(cushionType) === "P") {
        unitPrice = "$507"
    }
    else if (type.value === "armlessChair" && cushionStyle(cushionType) === "F") {
        unitPrice = "$543"
    }
    else if (type.value === "armlessChair" && cushionStyle(cushionType) === "P") {
        unitPrice = "$700"
    }
    else if (type.value === "armlessLoftSofa" && cushionStyle(cushionType) === "F") {
        unitPrice = "$785"
    }
    else if (type.value === "armlessLoftSofa" && cushionStyle(cushionType) === "P") {
        unitPrice = "$1051"
    }
    else if (type.value === "cornerUnit" && cushionStyle(cushionType) === "F") {
        unitPrice = "$604"
    }
    else if (type.value === "cornerUnit" && cushionStyle(cushionType) === "P") {
        unitPrice = "$833"
    }
    else if (type.value === "cuddleCorner" && cushionStyle(cushionType) === "F") {
        unitPrice = "$785"
    }
    else if (type.value === "cuddleCorner" && cushionStyle(cushionType) === "P") {
        unitPrice = "$1051"
    }
    else if (type.value === "1armChair" && cushionStyle(cushionType) === "F") {
        unitPrice = "$604"
    }
    else if (type.value === "1armChair" && cushionStyle(cushionType) === "P") {
        unitPrice = "$833";
    }
    else if (type.value === "1armCuddleChair" && cushionStyle(cushionType) === "F") {
        unitPrice = "$664"
    }
    else if (type.value === "1armCuddleChair" && cushionStyle(cushionType) === "P") {
        unitPrice = "$894"
    }
    else if (type.value === "1armChaise" && cushionStyle(cushionType) === "F") {
        unitPrice = "$833"
    }
    else if (type.value === "1armChaise" && cushionStyle(cushionType) === "P") {
        unitPrice = "$1099"
    }
    else if (type.value === "1armCuddleChaise" && cushionStyle(cushionType) === "F") {
        unitPrice = "$906"
    }
    else if (type.value === "1armCuddleChaise" && cushionStyle(cushionType) === "P") {
        unitPrice = "$1232"
    }
    else if (type.value === "1armLoftSofa" && cushionStyle(cushionType) === "F") {
        unitPrice = "$833"
    }
    else if (type.value === "1armLoftSofa" && cushionStyle(cushionType) === "P") {
        unitPrice = "$1099"
    }
    else if (type.value === "1armBumperChaise" && cushionStyle(cushionType) === "F") {
        unitPrice = "$664"
    }
    else if (type.value === "1armBumperChaise" && cushionStyle(cushionType) === "P") {
        unitPrice = "$978"
    }
    else { console.log(itemType(styleType) + cushionStyle(cushionType)) }

    return unitPrice;
}
