/* eslint-disable max-len */
/* eslint-disable no-loop-func */
const faker = require('faker');
const fs = require('fs');

const file = fs.createWriteStream('./file.csv');

let counter = 0;
const entries = 10000000;

for (counter; counter < entries; counter += 1) {
  if (counter % 100000 === 0) {
    console.log('this many entries created: ', counter);
  }
  const random1 = Math.ceil(Math.random() * 993);
  const randomWithZeros = (number) => {
    const plusZeros = `0000${number}`;
    let result;
    if (plusZeros.length === 4) {
      result = plusZeros;
    } else if (plusZeros.length === 5) {
      result = plusZeros.substring(0);
    } else if (plusZeros.length === 6) {
      result = plusZeros.substring(1);
    } else if (plusZeros.length === 7) {
      result = plusZeros.substring(2);
    } else if (plusZeros.length === 8) {
      result = plusZeros.substring(2);
    }
    return result;
  };
  const imageSelector = randomWithZeros(random1);
  const productName = faker.commerce.productName();
  const prices = (min, max) => ((Math.random() * (max - min) + min));
  const price = Number.parseFloat(prices(10, 250)).toFixed(2);
  const rating = Math.ceil(Math.random() * 5);
  const ratingsAmt = Math.floor(Math.random() * 1000);
  const color = faker.commerce.color();
  const image = `https://sdc-images-display.s3-us-west-2.amazonaws.com/${imageSelector.substring(0, 4) + 1}.jpg`;
  const carousel = `https://sdc-images-display.s3-us-west-2.amazonaws.com/${imageSelector.substring(0, 4) + 1}.jpg, https://sdc-images-display.s3-us-west-2.amazonaws.com/${imageSelector.substring(0, 4) + 2}.jpg, https://sdc-images-display.s3-us-west-2.amazonaws.com/${imageSelector.substring(0, 4) + 3}.jpg, https://sdc-images-display.s3-us-west-2.amazonaws.com/${imageSelector.substring(0, 4) + 4}.jpg, https://sdc-images-display.s3-us-west-2.amazonaws.com/${imageSelector.substring(0, 4) + 5}.jpg, https://sdc-images-display.s3-us-west-2.amazonaws.com/${imageSelector.substring(0, 4) + 6}.jpg, `;
  const picker = () => {
    let count = 0;
    let pants = '';
    const shirt = 'Small Medium Large X-Large';
    const pantSize = ['30', '32', '34', '36', '38', '40'];
    while (count < 4) {
      const inseam = Math.floor(Math.random() * 6);
      const waist = Math.floor(Math.random() * 6);
      const pant = (`${pantSize[waist]}x${pantSize[inseam]} `);
      pants += pant;
      count += 1;
    }
    const pick = Math.floor(Math.random() * 2);
    if (pick === 1) {
      return pants;
    }
    return shirt;
  };
  const picked = picker();
  const description = faker.commerce.productDescription();

  file.write(`${counter}|${productName}|${price}|${rating}|${ratingsAmt}|${color}|${image}|${carousel}|${picked}|${description}| xxxx`);
}

file.end();

// if seeding for arango

//  if (counter === 0) {
//   file.write('id, productName, price, rating, ratingsAmt, color, image, carousel, picked, description \n');
// }
//  file.write(`${counter}|${productName}|${price}|${rating}|${ratingsAmt}|${color}|${image}|${carousel}|${picked}|${description}, \n`);

// mysql

// file.write(`${counter}|${productName}|${price}|${rating}|${ratingsAmt}|${color}|${image}|${carousel}|${picked}|${description}| xxxx`);
