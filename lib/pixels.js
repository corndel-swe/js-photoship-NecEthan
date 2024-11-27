export function stripRed(rgb) {
  // TODO: set the red value in the rgb array to 0
  // e.g. [10, 105, 39] => [0, 105, 39]
  rgb[0] = 0
  return rgb
}

export function stripGreen(rgb) {
  // TODO: set the green value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 0, 39]
  rgb[1] = 0
  return rgb
}

export function stripBlue(rgb) {
  // TODO: set the blue value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 105, 0]
  rgb[2] = 0
  return rgb
}

export function invert(rgb) {
  // TODO: set each value in the array to (255 - value)
  // e.g. [50, 100, 210] => [205, 155, 45]
  // rgb.map(value => 250 - value)
  const newArr = rgb.map(value => 250 - value)

  return newArr
}

export function grayScale(rgb) {
  let total = 0;
  for (let i=0; i < rgb.length; i++) {
    total = total + rgb[i]
  }
  total = total / rgb.length
  rgb[0] = total
  rgb[1] = total
  rgb[2] = total
  return rgb
  // TODO: set each value of the rgb array to the average
  // e.g. [4, 5, 12] => [7, 7, 7]
}

export function blackAndWhite(rgb) {
  let total = 0;
  for (let i=0; i < rgb.length; i++) {
    total = total + rgb[i]
  }
  total = total / rgb.length
  if (total < 255/2) {
    const arr = rgb.map(value => value = 0)
    return arr
  } else {
    const arr = rgb.map(value => value = 255)
    return arr
  }
  // return rgb
  // TODO: calculate the average of r, g, b
  // if it's smaller than 255/2, set all values to 0
  // otherwise set all values to 255
}

export function colorChannel(rgb, color) {
  if (color === 'r') {
    rgb[1] = 0
    rgb[2] = 0
  } if (color === 'g') {
    rgb[0] = 0
    rgb[2] = 0
  } if (color === 'b') {
    rgb[0] = 0
    rgb[1] = 0
  }
  return rgb
  // TODO: get the color channel
  // if color is 'r', leave red alone and set green and blue to 0
  // similar for 'g' and 'b'
  // e.g. [107, 43, 198], 'g' => [0, 43, 0]
}

export function sepia(rgb) {

  let r = rgb[0];
  let g = rgb[1];
  let b = rgb[2];

  let tr = 0.393 * r + 0.769 * g + 0.189 * b
  let tg = 0.349 * r + 0.686 * g + 0.168 * b
  let tb = 0.272 * r + 0.534 * g + 0.131 * b

  if (tr > 255) {
    rgb[0] = 255
  } else {
    rgb[0] = tr
  }

  if (tg > 255) {
    rgb[1] = 255
  } else {
    rgb[1] = tg
  }

  if (tb > 255) {
    rgb[2] = 255
  } else {
    rgb[2] = tb
  }

  return rgb
  // TODO: google "sepia tone rgb formula" and implement it
}

export function adjustBrightness(rgb, brightness) {
  let r = Number(rgb[0]) + Number(brightness);
  let g = Number(rgb[1]) + Number(brightness);
  let b = Number(rgb[2]) + Number(brightness);

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  rgb[0] = r;
  rgb[1] = g;
  rgb[2] = b;

  return rgb;
  // TODO: add the value of 'brightness' to every element in rgb
  // but make sure the value stays between 0 and 255!
}

