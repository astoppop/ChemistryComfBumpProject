const possMols = [
    ['H2O', 'dihydrogen monoxide'],
    ['CO2', 'carbon dioxide'],
    ['SCl2', 'sulfur dichloride'],
    ['OF2', 'oxygen difluoride'],
    ['NO2', 'nitrogen dioxide'],
    ['CBr4', 'carbon tetrabromide'],
    ['SO3', 'sulfur trioxide'],
    ['SF6', 'sulfur hexafluoride'],
    ['SiO2', 'silicon dioxide'],
    ['BF3', 'boron trifluoride'],
    ['N2O4', 'dinitrogen tetroxide'],
    ['SiBr4', 'silicon tetrabromide'],
    ['CS2', 'carbon disulfide'],
    ['BrF3', 'bromine trifluoride'],
    ['N2O3', 'dinitrogen trioxide'],
    ['ClF3', 'chlorine trifluoride'],
    ['ClO', 'chlorine monoxide'],
    ['SeO3', 'selenium trioxide'],
    ['SeCl4', 'selenium tetrachloride'],
    ['SeS2', 'selenium disulfide'],
    ['CCl4', 'carbon tetrachloride'],
    ['ICl3', 'iodine trichloride'],
    ['NO', 'nitrogen monoxide'],
]; 

const colorKey = {
    1: "FFFFFF",
    2: "D9FFFF",
    3: "CC80FF",
    4: "C2FF00",
    5: "FFB5B5",
    6: "909090",
    7: "3050F8",
    8: "FF0D0D",
    9: "90E050",
    10: "B3E3F5",
    11: "AB5CF2",
    12: "8AFF00",
    13: "BFA6A6",
    14: "F0C8A0",
    15: "FF8000",
    16: "FFFF30",
    17: "1FF01F",
    18: "80D1E3",
    19: "8F40D4",
    20: "3DFF00",
    21: "E6E6E6",
    22: "BFC2C7",
    23: "A6A6AB",
    24: "8A99C7",
    25: "9C7AC7",
    26: "E06633",
    27: "F090A0",
    28: "50D050",
    29: "C88033",
    30: "7D80B0",
    31: "C28F8F",
    32: "668F8F",
    33: "BD80E3",
    34: "FFA100",
    35: "A62929",
    36: "5CB8D1",
    37: "702EB0",
    38: "00FF00",
    39: "94FFFF",
    40: "94E0E0",
    41: "73C2C9",
    42: "54B5B5",
    43: "3B9E9E",
    44: "248F8F",
    45: "0A7D8C",
    46: "006985",
    47: "C0C0C0",
    48: "FFD98F",
    49: "A67573",
    50: "668080",
    51: "9E63B5",
    52: "D47A00",
    53: "940094",
    54: "429EB0",
    55: "57178F",
    56: "00C900",
    57: "70D4FF",
    58: "FFFFC7",
    59: "D9FFC7",
    60: "C7FFC7",
    61: "A3FFC7",
    62: "8FFFC7",
    63: "61FFC7",
    64: "45FFC7",
    65: "30FFC7",
    66: "1FFFC7",
    67: "00FF9C",
    68: "00E675",
    69: "00D452",
    70: "00BF38",
    71: "00AB24",
    72: "4DC2FF",
    73: "4DA6FF",
    74: "2194D6",
    75: "267DAB",
    76: "266696",
    77: "175487",
    78: "D0D0E0",
    79: "FFD123",
    80: "B8B8D0",
    81: "A6544D",
    82: "575961",
    83: "9E4FB5",
    84: "AB5C00",
    85: "754F45",
    86: "428296",
    87: "420066",
    88: "007D00",
    89: "70ABFA",
    90: "00BAFF",
    91: "00A1FF",
    92: "008FFF",
    93: "0080FF",
    94: "006BFF",
    95: "545CF2",
    96: "785CE3",
    97: "8A4FE3",
    98: "A136D4",
    99: "B31FD4",
    100: "B31FBA",
    101: "B30DA6",
    102: "BD0D87",
    103: "C70066",
    104: "CC0059",
    105: "D1004F",
    106: "D90045",
    107: "E00038",
    108: "E6002E",
    109: "EB0026",
};

const atomicNumberToSymbol = {
    1: "H",
    2: "He",
    3: "Li",
    4: "Be",
    5: "B",
    6: "C",
    7: "N",
    8: "O",
    9: "F",
    10: "Ne",
    11: "Na",
    12: "Mg",
    13: "Al",
    14: "Si",
    15: "P",
    16: "S",
    17: "Cl",
    18: "Ar",
    19: "K",
    20: "Ca",
    21: "Sc",
    22: "Ti",
    23: "V",
    24: "Cr",
    25: "Mn",
    26: "Fe",
    27: "Co",
    28: "Ni",
    29: "Cu",
    30: "Zn",
    31: "Ga",
    32: "Ge",
    33: "As",
    34: "Se",
    35: "Br",
    36: "Kr",
    37: "Rb",
    38: "Sr",
    39: "Y",
    40: "Zr",
    41: "Nb",
    42: "Mo",
    43: "Tc",
    44: "Ru",
    45: "Rh",
    46: "Pd",
    47: "Ag",
    48: "Cd",
    49: "In",
    50: "Sn",
    51: "Sb",
    52: "Te",
    53: "I",
    54: "Xe",
    55: "Cs",
    56: "Ba",
    57: "La",
    58: "Ce",
    59: "Pr",
    60: "Nd",
    61: "Pm",
    62: "Sm",
    63: "Eu",
    64: "Gd",
    65: "Tb",
    66: "Dy",
    67: "Ho",
    68: "Er",
    69: "Tm",
    70: "Yb",
    71: "Lu",
    72: "Hf",
    73: "Ta",
    74: "W",
    75: "Re",
    76: "Os",
    77: "Ir",
    78: "Pt",
    79: "Au",
    80: "Hg",
    81: "Tl",
    82: "Pb",
    83: "Bi",
    84: "Po",
    85: "At",
    86: "Rn",
    87: "Fr",
    88: "Ra",
    89: "Ac",
    90: "Th",
    91: "Pa",
    92: "U",
    93: "Np",
    94: "Pu",
    95: "Am",
    96: "Cm",
    97: "Bk",
    98: "Cf",
    99: "Es",
    100: "Fm",
    101: "Md",
    102: "No",
    103: "Lr",
    104: "Rf",
    105: "Db",
    106: "Sg",
    107: "Bh",
    108: "Hs",
    109: "Mt",
};

var currMolI = -1;
var currMolCID;
var elements;

var key;

var feedback;
var correct;
var incorrect;

var nameInput;

shuffle(possMols);

$(document).ready(function() {
    key = $('.key');
    feedback = $('.feedback');
    correct = $('.correct');
    incorrect = $('.incorrect');
    nameInput = $('#name-input');
});

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

function handleQuestion() {
    feedback.addClass('hidden');
    nameInput[0].value = '';

    currMolI++;
    if (jmolApplet0) {
        console.log(`Fetching CID for ${possMols[currMolI][0]}`);
        fetch(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${possMols[currMolI][1]}/json?AllowOtherElements=false&MaxSeconds=1`)
        .then(response => {console.log("Received json for CID"); return response.json();})
        .then(data => {
            currMolCID = data.PC_Compounds[0].id.id.cid;
            Jmol.script(jmolApplet0, `load https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${currMolCID}/sdf`);
            handleKey([...new Set(data.PC_Compounds[0].atoms.element)]);
        });
    }
    return false;
}

function handleKey(elements) {
    key.empty();
    elements.forEach(element => {
        let elementKey = $(document.createElement('p'));
        elementKey.css('color', colorKey[element]);
        elementKey.css('margin', 0);
        elementKey.text(atomicNumberToSymbol[element]);
        key.append(elementKey);
    });
}

function handleSubmit() {
    var submitted = nameInput[0].value.toUpperCase();
    feedback.removeClass('hidden');
    correct.addClass('hidden');
    incorrect.addClass('hidden');

    if (submitted == possMols[currMolI][1].toUpperCase()) {
        correct.removeClass('hidden');
    } else {
        incorrect.removeClass('hidden');
    }
}

$(document).ready(function() {
    handleQuestion();
});
