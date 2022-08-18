<template>
    <div class="background-color-gallery">
        <!-- Checkboxes are not in parent div for prettier code because it relies on the ~ selector. -->
       
        <!-- Checkboxes are not in parent div for prettier code because it relies on the ~ selector. -->
<input class="button" type="checkbox" name="last-5" data-label="Last 5" />
<input class="button" type="checkbox" name="3-9" data-label="Except 3–9" />
<input class="button" type="checkbox" name="even" data-label="Even"/>
<input class="button" type="checkbox" name="multiple-5" data-label="x5s" />
<input class="button" type="checkbox" name="potato" data-label="Potato" />
<!-- So I'll just group it like this. -->

<!-- Gallery and items -->
<div class="items">
  <div class="item"><img src="https://placeimg.com/201/201/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/202/202/any" alt="" /></div>
  <div class="item" data-filter="potato"><img src="https://placeimg.com/203/203/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/204/204/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/205/205/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/206/206/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/207/207/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/208/208/any" alt="" /></div>
  <div class="item" data-filter="potato"><img src="https://placeimg.com/209/209/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/210/210/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/211/211/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/212/212/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/213/213/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/214/214/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/215/215/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/216/216/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/217/217/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/218/218/any" alt="" /></div>
  <div class="item" data-filter="potato"><img src="https://placeimg.com/219/219/any" alt="" /></div>
  <div class="item"><img src="https://placeimg.com/220/220/any" alt="" /></div>
</div>
    </div>
</template>
<style lang="scss" scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  text-align: center;
  font-family: "Noto Sans", sans-serif;
}

// "Button" checkbox
$button-width: 150px;
.button {  
  display: inline-block;
  position: relative;
  min-width: 100px;
  min-height: 30px;
  margin: 8px;
  
  &:before,
  &:after {
    position: absolute;
    // These values are to hide the "unhidden" checkbox behind so it won't peek out on click
    top: -3px;
    right: -3px;
    left: -3px;
    bottom: -3px;
    border-radius: 5px;
  }
  
  // :before is the bevel of the button
  &:before {
    content: '';
    transform: translateY(3px);
    background: darken(#f40924, 10%);
  }
  
  // :after is the rest of the button
  &:after {
    content: attr(data-label);
    padding: 7px; // Total guesswork to keep text vertically centered
    background: #f40924;
    color: white;
    text-align: center;
    transition: all .2s cubic-bezier(.4,0,.2,1);
  }
  
  &:hover:after {
    transform: translateY(-2px);
  }
  
  &:checked {
    &:before {
      background: darken(#ccc, 10%);
    }
    
    &:after {
      background: #ccc;
      transform: translateY(3px);
    }
  }
}

// Gallery container
.items {
  max-width: 600px;
  margin: 0 auto;
  
  // Clearfix!
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

// The items in the gallery
.item {
  float: left;
  position: relative;
  width: 100px;
  height: 100px;
  margin: 10px;
  background: #ccc;
  transition: all .3s cubic-bezier(.4,0,.2,1);
  
  // To show filters applied
  &:after {
    content: attr(data-filter);
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(black, .3);
    color: white;
    text-shadow: 0 0 1px #000;
    font-size: .75em;
    text-transform: capitalize;
  }
  
  &:hover {
    transform: scale(1.2);
  }
  
  // The image inside
  img {
    max-width: 100%;
    height: auto;
  }
}

// --- Alright, the showpiece! ---

// A mixin to handle the hiding of filtered items
@mixin hide-item {
  margin: 0;
  width: 0;
  height: 0;
  opacity: 0;
  
  &:after {
    opacity: 0;
  }
}

// A mixin for cheating later on. Show items by duplicating the properties of the current item
@mixin show-item {
  margin: 10px;
  width: 100px;
  height: 100px;
  opacity: 1;
  
  &:after {
    opacity: 1;
  }
}

// And here are the declarations!
.button {
  // When any filter is applied, hide everything first
  &:checked ~ .items .item {
    @include hide-item;
  }
  
  // Then show them by the filter
  // Last 5 items. Select by using nth-last-child and specifying the number of last elements to exclude from filter, and add 1. (5+1)
  &[name="last-5"]:checked ~ .items .item:nth-last-child(-n+5),
  // 3 to 9 filtered. Let's cheat a bit by using two declarations. One is for items behind 3 and one for items after 9 (10 and up)
  &[name="3-9"]:checked ~ .items .item:nth-child(-n+3),
  &[name="3-9"]:checked ~ .items .item:nth-child(n+10),
  // Even. 2n. Easy peasy.
  &[name="even"]:checked ~ .items .item:nth-child(2n),
  // Multiples of five. The same with even. 5n.
  &[name="multiple-5"]:checked ~ .items .item:nth-child(5n),
  // The potato filter. Select by using the data-filter attribute assigned.
  &[name="potato"]:checked ~ .items .item[data-filter="potato"]
  {
    @include show-item;
  }
}
</style>

