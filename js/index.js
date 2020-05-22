const gasolineUrl = './images/customs/mercedes.png';
const dieselUrl = './images/customs/cruiser.png';
const hybridUrl = './images/customs/toyota.png';
const electroUrl = './images/customs/nissan.jpg';
const allCarsUrl = './images/customs/american.png';

let fuel = '';
let auction = 'iaai';
let carYear = 0;
let carPrice = 0;
let carVolume = 0;

let auctionPrice = 0;
let excisePrice = 0;
let dutyPrice = 0;
let ndsPrice = 0;

let baseRate = 0;
let engineCoefficient = 0;
let ageCoefficient = 0;

let state = 'FL';
let port = 'lit';
let category = 1;

let customsPrice = 0;
let deliveryPrice = 0;
let portDeliveryPrice = 0;
let postDeliveryPrice = 0;
let insurancePrice = carPrice * 0.009;

let standard = 500;
let standardPlus = 600;
let expert = 300;

function deliveryPriceCount() {
  if (carPrice > 0) {
    postDeliveryPrice = 75;
    if (port === 'ukr') {
      if (state === 'NJ') {
        portDeliveryPrice = 700;
        if (category === 1) deliveryPrice = 700 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 700 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'GA') {
        portDeliveryPrice = 700;
        if (category === 1) deliveryPrice = 700 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 700 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'FL') {
        portDeliveryPrice = 730;
        if (category === 1) deliveryPrice = 730 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 730 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'TX') {
        portDeliveryPrice = 750;
        if (category === 1) deliveryPrice = 750 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 750 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'CA') {
        portDeliveryPrice = 975;
        if (category === 1) deliveryPrice = 975 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 975 + 300 + 100 + carPrice * 0.009;
      }
    } else {
      if (state === 'NJ') {
        portDeliveryPrice = 600;
        if (category === 1) deliveryPrice = 600 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 600 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'GA') {
        portDeliveryPrice = 600;
        if (category === 1) deliveryPrice = 600 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 600 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'FL') {
        portDeliveryPrice = 700;
        if (category === 1) deliveryPrice = 700 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 700 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'TX') {
        portDeliveryPrice = 675;
        if (category === 1) deliveryPrice = 675 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 675 + 300 + 100 + carPrice * 0.009;
      } else if (state === 'CA') {
        portDeliveryPrice = 925;
        if (category === 1) deliveryPrice = 925 + 300 + 100 + carPrice * 0.009;
        if (category === 2) deliveryPrice = 50 + 925 + 300 + 100 + carPrice * 0.009;
      }
    }
  }
}
function handleFuelChanges() {
  if (fuel === 'gasoline') {
    $('.big-car-image').attr('src', gasolineUrl);
    dutyPrice = +carPrice * 0.1;
    if (+carVolume * 1000 <= 3000) {
      baseRate = 50;
      excisePrice = 50 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    } else {
      baseRate = 100;
      excisePrice = 100 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    }
  } else if (fuel === 'diesel') {
    $('.big-car-image').attr('src', dieselUrl);
    dutyPrice = +carPrice * 0.1;
    if (+carVolume * 1000 <= 3500) {
      baseRate = 75;
      excisePrice = 75 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    } else {
      baseRate = 150;
      excisePrice = 150 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;

    }
  } else if (fuel === 'hybrid') {
    $('.big-car-image').attr('src', hybridUrl);
    dutyPrice = +carPrice * 0.1;
    if (+carVolume * 1000 <= 3000) {
      baseRate = 50;
      excisePrice = 50 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    } else {
      baseRate = 100;
      excisePrice = 100 * +engineCoefficient * +ageCoefficient;
      ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
      customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    }
  } else if (fuel === 'electro') {
    $('.big-car-image').attr('src', electroUrl);
    baseRate = 50;
    dutyPrice = 0;
    excisePrice = +carVolume * 1.08;
    ndsPrice = 0;
    customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
  }
}
function countAuctionPrice() {
  if (auction === 'copart') {
    if (carPrice >= 0 && carPrice <= 49.99) {
      auctionPrice = 1;
    } else if (carPrice >= 50 && carPrice <= 99.99) {
      auctionPrice = 1;
    } else if (carPrice >= 100 && carPrice <= 199.99) {
      auctionPrice = (25 + 29);
    } else if (carPrice >= 200 && carPrice <= 299.99) {
      auctionPrice = (50 + 29);
    } else if (carPrice >= 300 && carPrice <= 349.99) {
      auctionPrice = (75 + 29);
    } else if (carPrice >= 350 && carPrice <= 399.99) {
      auctionPrice = (75 + 29);
    } else if (carPrice >= 400 && carPrice <= 449.99) {
      auctionPrice = (110 + 29);
    } else if (carPrice >= 450 && carPrice <= 499.99) {
      auctionPrice = (110 + 29);
    } else if (carPrice >= 500 && carPrice <= 549.99) {
      auctionPrice = (125 + 39);
    } else if (carPrice >= 550 && carPrice <= 599.99) {
      auctionPrice = (130 + 39);
    } else if (carPrice >= 600 && carPrice <= 699.99) {
      auctionPrice = (140 + 39);
    } else if (carPrice >= 700 && carPrice <= 799.99) {
      auctionPrice = (155 + 39);
    } else if (carPrice >= 800 && carPrice <= 899.99) {
      auctionPrice = (170 + 39);
    } else if (carPrice >= 900 && carPrice <= 999.99) {
      auctionPrice = (185 + 39);
    } else if (carPrice >= 1000 && carPrice <= 1199.99) {
      auctionPrice = (200 + 59);
    } else if (carPrice >= 1200 && carPrice <= 1299.99) {
      auctionPrice = (225 + 59);
    } else if (carPrice >= 1300 && carPrice <= 1399.99) {
      auctionPrice = (240 + 59);
    } else if (carPrice >= 1400 && carPrice <= 1499.99) {
      auctionPrice = (250 + 59);
    } else if (carPrice >= 1500 && carPrice <= 1599.99) {
      auctionPrice = (260 + 69);
    } else if (carPrice >= 1600 && carPrice <= 1699.99) {
      auctionPrice = (270 + 69);
    } else if (carPrice >= 1700 && carPrice <= 1799.99) {
      auctionPrice = (285 + 69);
    } else if (carPrice >= 1800 && carPrice <= 1999.99) {
      auctionPrice = (300 + 69);
    } else if (carPrice >= 2000 && carPrice <= 2399.99) {
      auctionPrice = (325 + 79);
    } else if (carPrice >= 2400 && carPrice <= 2499.99) {
      auctionPrice = (335 + 79);
    } else if (carPrice >= 2500 && carPrice <= 2999.99) {
      auctionPrice = (350 + 79);
    } else if (carPrice >= 3000 && carPrice <= 3499.99) {
      auctionPrice = (400 + 79);
    } else if (carPrice >= 3500 && carPrice <= 3999.99) {
      auctionPrice = (450 + 79);
    } else if (carPrice >= 4000 && carPrice <= 4499.99) {
      auctionPrice = (475 + 89);
    } else if (carPrice >= 4500 && carPrice <= 4999.99) {
      auctionPrice = (500 + 89);
    } else if (carPrice >= 5000 && carPrice <= 5999.99) {
      auctionPrice = (525 + 89);
    } else if (carPrice >= 6000 && carPrice <= 7499.99) {
      auctionPrice = (550 + 99);
    } else if (carPrice >= 7499 && carPrice <= 7999.99) {
      auctionPrice = (575 + 99);
    } else if (carPrice >= 8000 && carPrice <= 9999.99) {
      auctionPrice = (575 + 119);
    } else if (carPrice >= 10000 && carPrice <= 14999.99) {
      auctionPrice = (600 + 119);
    } else if (carPrice >= 15000 && carPrice <= 19999.99) {
      auctionPrice = (carPrice * 0.04 + 119);
    } else if (carPrice >= 20000 && carPrice <= 24999.99) {
      auctionPrice = (carPrice * 0.04 + 119);
    } else if (carPrice >= 250000 && carPrice <= 29999.99) {
      auctionPrice = (carPrice * 0.04 + 119);
    } else if (carPrice >= 300000 && carPrice <= 34999.99) {
      auctionPrice = (carPrice * 0.04 + 119);
    } else if (carPrice >= 350000 && carPrice <= 1000000000) {
      auctionPrice = (carPrice * 0.04 + 119);
    } else {
      auctionPrice = (carPrice * 0.20);
    }
  } else if (auction === 'iaai') {
    if (carPrice >= 0 && carPrice <= 99.99) {
      auctionPrice = (1 + 59);
    } else if (carPrice >= 100 && carPrice <= 199.99) {
      auctionPrice = (40 + 29 + 59);
    } else if (carPrice >= 200 && carPrice <= 299.99) {
      auctionPrice = (60 + 29 + 59);
    } else if (carPrice >= 300 && carPrice <= 349.99) {
      auctionPrice = (75 + 29 + 59);
    } else if (carPrice >= 350 && carPrice <= 399.99) {
      auctionPrice = (90 + 29 + 59);
    } else if (carPrice >= 400 && carPrice <= 499.99) {
      auctionPrice = (100 + 29 + 59);
    } else if (carPrice >= 500 && carPrice <= 599.99) {
      auctionPrice = (130 + 39 + 59);
    } else if (carPrice >= 600 && carPrice <= 699.99) {
      auctionPrice = (145 + 39 + 59);
    } else if (carPrice >= 700 && carPrice <= 799.99) {
      auctionPrice = (160 + 39 + 59);
    } else if (carPrice >= 800 && carPrice <= 899.99) {
      auctionPrice = (175 + 39 + 59);
    } else if (carPrice >= 900 && carPrice <= 999.99) {
      auctionPrice = (190 + 39 + 59);
    } else if (carPrice >= 1000 && carPrice <= 1099.99) {
      auctionPrice = (205 + 59 + 59);
    } else if (carPrice >= 1100 && carPrice <= 1199.99) {
      auctionPrice = (220 + 59 + 59);
    } else if (carPrice >= 1200 && carPrice <= 1299.99) {
      auctionPrice = (230 + 59 + 59);
    } else if (carPrice >= 1300 && carPrice <= 1399.99) {
      auctionPrice = (240 + 59 + 59);
    } else if (carPrice >= 1400 && carPrice <= 1499.99) {
      auctionPrice = (255 + 59 + 59);
    } else if (carPrice >= 1500 && carPrice <= 1599.99) {
      auctionPrice = (270 + 69 + 59);
    } else if (carPrice >= 1600 && carPrice <= 1699.99) {
      auctionPrice = (290 + 69 + 59);
    } else if (carPrice >= 1700 && carPrice <= 1799.99) {
      auctionPrice = (300 + 69 + 59);
    } else if (carPrice >= 1800 && carPrice <= 1999.99) {
      auctionPrice = (310 + 69 + 59);
    } else if (carPrice >= 2000 && carPrice <= 2199.99) {
      auctionPrice = (325 + 79 + 59);
    } else if (carPrice >= 2200 && carPrice <= 2399.99) {
      auctionPrice = (330 + 79 + 59);
    } else if (carPrice >= 2400 && carPrice <= 2499.99) {
      auctionPrice = (345 + 79 + 59);
    } else if (carPrice >= 2500 && carPrice <= 2999.99) {
      auctionPrice = (360 + 79 + 59);
    } else if (carPrice >= 3000 && carPrice <= 3499.99) {
      auctionPrice = (400 + 79 + 59);
    } else if (carPrice >= 3500 && carPrice <= 3999.99) {
      auctionPrice = (450 + 79 + 59);
    } else if (carPrice >= 4000 && carPrice <= 4499.99) {
      auctionPrice = (475 + 89 + 59);
    } else if (carPrice >= 4500 && carPrice <= 4999.99) {
      auctionPrice = (500 + 89 + 59);
    } else if (carPrice >= 5000 && carPrice <= 5999.99) {
      auctionPrice = (525 + 89 + 59);
    } else if (carPrice >= 6000 && carPrice <= 7499.99) {
      auctionPrice = (550 + 99 + 59);
    } else if (carPrice >= 7500 && carPrice <= 19999.99) {
      auctionPrice = (carPrice * 0.01 + 500 + 119 + 59);
    } else if (carPrice >= 20000) {
      auctionPrice = (carPrice * 0.04 + 119 + 59);
    }
  } else console.log('manheim')
}

$('#year').on('input', e => {
  new Promise(res => {
    carYear = +e.target.value;
    ageCoefficient = new Date().getFullYear() - carYear;
    excisePrice = baseRate * +engineCoefficient * +ageCoefficient;
    customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    res();
  }).then(() => updateDocumentValues());
});
$('#price').on('input', e => {
  new Promise(res => {
    carPrice = +e.target.value;
    dutyPrice = +e.target.value * 0.1;
    excisePrice = baseRate * +engineCoefficient * +ageCoefficient;
    ndsPrice = (+e.target.value + +excisePrice + +dutyPrice) * 0.2;
    insurancePrice = +e.target.value * 0.009;
    customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    res();
  }).then(() => countAuctionPrice())
    .then(() => deliveryPriceCount())
    .then(() => updateDocumentValues())
});
$('#volume').on('input', e => {
  new Promise(res => {
    carVolume = +e.target.value;
    engineCoefficient = +e.target.value;
    excisePrice = baseRate * +engineCoefficient * +ageCoefficient;
    ndsPrice = (+carPrice + +excisePrice + +dutyPrice) * 0.2;
    customsPrice = +excisePrice + +dutyPrice + +ndsPrice;
    res();
  }).then(() => handleFuelChanges())
    .then(() => updateDocumentValues())
});
$('.fuel').on('change', e => {
  new Promise(res => {
    fuel = e.target.value;
    res();
  }).then(() => {
    for (let node of $('.fuel')) {
      if ($(node).not(e.target).parent().hasClass('active')) {
        $(node).parent().removeClass('active');
      }
    }
    $(e.target).parent().addClass('active');
  }).then(() => handleFuelChanges())
    .then(() => updateDocumentValues())
});
$('.auction').on('change', e => {
  new Promise(res => {
    auction = e.target.value;
    for (let node of $('.auction')) {
      if ($(node).not(e.target).parent().hasClass('active')) {
        $(node).parent().removeClass('active');
      }
    }
    $(e.target).parent().addClass('active');
    res();
  }).then(() => countAuctionPrice())
    .then(() => updateDocumentValues());
});
$('.port img').on('click', e => {
  new Promise(res => {
    port = $(e.target).attr('data');
    res();
  }).then(() => {
    for (let node of $('.port img')) {
      if ($(node).not(e.target).hasClass('active')) {
        $(node).removeClass('active');
      }
    }
    $(e.target).addClass('active');
  }).then(() => deliveryPriceCount())
    .then(() => updateDocumentValues())
});
$('.category').on('change', e => {
  new Promise(res => {
    if ($(e.target).attr('id') === 'first') category = 1;
    if ($(e.target).attr('id') === 'second') category = 2;
    for (let node of $('.category')) {
      if ($(node).not(e.target).parent().hasClass('active')) {
        $(node).parent().removeClass('active');
      }
    }
    $(e.target).parent().addClass('active');
    res();
  }).then(() => deliveryPriceCount())
    .then(() => updateDocumentValues())
});
$('.select-local-state').on('change', e => {
  new Promise(res => {
    state = e.target.value;
    res();
  }).then(() => deliveryPriceCount())
    .then(() => updateDocumentValues())
});

function updateDocumentValues() {
  $('.price-display').text(`$${carPrice}`);
  $('.auction-display').text(`$${Math.round(auctionPrice)}`);
  $('.excise-display').text(`$${Math.round(excisePrice)}`);
  $('.duty-display').text(`$${Math.round(dutyPrice)}`);
  $('.nds-display').text(`$${Math.round(ndsPrice)}`);
  $('.customs-sum-display').text(`$${Math.round(customsPrice)}`);
  $('.insurance-display').text(`$${insurancePrice.toFixed(2)}`);
  $('.broker-display').text(`$${200}`);
  $('.delivery-sum-display').text(`$${Math.round(deliveryPrice)}`);
  $('.port-delivery-display').text(`$${Math.round(portDeliveryPrice)}`);
  $('.post-delivery-display').text(`$${Math.round(postDeliveryPrice)}`);
  $('.standard').text(`$${standard}`);
  $('.standardPlus').text(`$${standardPlus}`);
  $('.expert').text(`$${expert}`);
  $('.total-sum-display').text(`$${+carPrice + +customsPrice + +auctionPrice + +insurancePrice.toFixed(2) + deliveryPrice}`);
}
