// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the surface area and volume of a cylinder.
 */
function calculate () {
  // input
  let radius = parseFloat(document.getElementById('r-cylinder').value);
  let height = parseFloat(document.getElementById('h-cylinder').value);

  // process
  let surfaceArea = 2  * Math.PI * radius * height + 2 * Math.PI * radius ** 2;
  let volume = Math.PI * radius ** 2 * height;

  // output
  document.getElementById('surfaceArea').innerHTML = 'Surface Area is: ' + surfaceArea + ' cm<sup>2</sup>'
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' cm<sup>3</sup>'
}
