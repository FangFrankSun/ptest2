<template>

   <div style="
    text-align: center;
    padding-top: 4em;
    padding-bottom: 5em;
    "
    class="background-color-gallery" >


    <meta name="viewport" content="width=device-width">
  <input type="radio" name="filter" id="all" checked><label class="nav" for="all">ALL</label>
  <input type="radio" name="filter" id="animals"><label class="nav" for="animals">Exterior</label>
  <input type="radio" name="filter" id="nature"><label class="nav" for="nature">Interior</label>
  <input type="radio" name="filter" id="people"><label class="nav" for="people">Furniture</label>
  <input type="radio" name="filter" id="tech"><label class="nav" for="tech">Modern</label>
  <div class="gallery">



 <a href="#" class="card tech">
    <div class="content">
      <span class="title">Native Apps</span>
      <span class="category">Coding / Mobile </span>
    </div>
    <div class="image">
      <img src="~/assets/image/Gallery/60.jpg" alt="" />
    </div>
  </a> 

   <a href="#" class="card animals">
    <div class="content">
      <span class="title">Native Apps</span>
      <span class="category">Coding / Mobile </span>
    </div>
    <div class="image">
      <img src="~/assets/image/Gallery/59.jpg" alt="" />
    </div>
  </a>

  <a href="#" class="card space animals">
    <div class="content">
      <span class="title">Web Design</span>
      <span class="category">Mobile / Design / Rebranding</span>
    </div>
    <div class="image">
      <img src="~/assets/image/Gallery/1.jpg" alt="" />
    </div>
  </a>
   <a href="#" class="card space people">
    <div class="content">
      <span class="title">UX Design</span>
      <span class="category">UX / UI / Research</span>
    </div>
    <div class="image">
      <img src="~/assets/image/Gallery/Picture4.jpg" alt="" />
    </div>
  </a>
  <a href="#" class="card space tech">
    <div class="content">
      <span class="title">Concepts</span>
      <span class="category">Design / Creative</span>
    </div>
    <div class="image">
      <img src="~/assets/image/Gallery/2.jpg" alt="" />
    </div>
  </a>
  <a href="#" class="card space nature">
    <div class="content">
      <span class="title">Creative & Cool</span>
      <span class="category">Design / Food</span>
    </div>
    <div class="image">
      <img src="~/assets/image/Gallery/3.jpg" alt="" />
    </div>
  </a>
  <a href="#" class="card space animals">
    <div class="content">
      <span class="title">AR-VR</span>
      <span class="category">VR / AR / Creative</span>
    </div>
    <div class="image">
      <img src="~/assets/image/Gallery/6.jpg" alt="" />
    </div>
  </a>
  <a href="#" class="card space nature">
    <div class="content">
      <span class="title">Logo</span>
      <span class="category">Design / Logo / Clothing</span>
    </div>
    <div class="image">
      <img src="~/assets/image/Gallery/5.jpg" alt="" />
    </div>
  </a>
  <a href="#" class="card space tech">
    <div class="content">
      <span class="title">Art</span>
      <span class="category">Drawing / Painting / Abstract</span>
    </div>
    <div class="image">
      <img src="~/assets/image/Gallery/7.jpg" alt="" />
    </div>
  </a>
  <a href="#" class="card space people">
    <div class="content">
      <span class="title">Native Apps</span>
      <span class="category">Coding / Mobile </span>
    </div>
    <div class="image">
      <img src="~/assets/image/Gallery/8.jpg" alt="" />
    </div>
    </a>




    
    </div>

   </div>
</template>
<style  scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400");
*{
  box-sizing: border-box;
}
html{
  font: 16px/1.6 'Poppins', system-ui, sans-serif;
}
body{
	padding: 2em 1rem;
	text-align: center !important;
}
[type="radio"]{
  display: none;
}
label{
  padding: 0.25rem 0.75rem !important;
  border-radius: 0.25rem !important;
  cursor: pointer !important;
  transition: 0.25s !important;
}
[type="radio"]:checked + label{
	background: #f0efeb;
}
[type="radio"]:nth-of-type(2):checked ~ .gallery .card:not(.animals),
[type="radio"]:nth-of-type(3):checked ~ .gallery .card:not(.nature),
[type="radio"]:nth-of-type(4):checked ~ .gallery .card:not(.people),
[type="radio"]:nth-of-type(5):checked ~ .gallery .card:not(.tech)
{
  display: none;
}
.gallery{
  display: grid;
	justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: 1fr;
  /* grid-gap: 1rem; */
  padding: 0.5rem;
  margin-top: 1rem;
  padding-top: 2rem;
}
.card{
  margin: 0;
  background: darkslateblue;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 0 10px var(--mediumGray);
  transition: box-shadow 0.35s;
}
.card:hover{
  box-shadow: 0 0 25px var(--darkGreen);
}
.card__image{
  width: 100%;
  object-fit: cover;
}
.card__caption{
	font-weight: bold;
  font-variant: small-caps;
  padding: 0.5rem;
  text-align: center;
  color: gold;
}

/* Donate layer */
.donate{
	position: fixed;
	bottom: 0.25rem;
	right: 0.25rem; 
	border-radius: 0.5rem;
	background-color: whitesmoke;
	padding: 0 1rem;
	font-weight: bold;
	color: dimgray;
}
.donate a{
	text-decoration: none;
	color: orangered;
	border-bottom: 2px solid transparent;
	transition: 0.35s;
}
.donate a:hover{
	border-bottom-color: orangered;
}




.portfolio {
  display: flex;
  flex-wrap: wrap;
  min-width: 320px;
}
.portfolio h2 {
  flex-basis: 100%;
  text-align: center;
  margin: 50px auto 30px;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 2px;
  color: #111;
}
.card {
  /* width was 20% */
  
  overflow: hidden;
  position: relative;
}
.card .content {
  z-index: 2;
  width: 100%;
  position: absolute;
  bottom: -100px;
  transition: all 0.7s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  min-height: 100px;
  background: #111;
}
.card .image {
  z-index: 1;
  height: 100%;
}
.card img {
  height: 100%;
  width: 100%;
  transition: all 0.5s ease;
  transform: scale(1.2);
}
.card:hover .content {
  bottom: 0px;
  color: #fff;
}
.card:hover .image img {
  transform: scale(1);
}
.card .content span:first-child {
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  color: #fff;
  font-size: 16px;
}
.card .content span:last-child {
  font-size: 14px;
  color: var(--darkGreen);
  text-align: center;
  font-weight: 700;
}
@media screen and (max-width: 768px) {
  .card {
  width: 50%;
  }
  .card .content {
    bottom: 0;
  }
}
@media screen and (max-width: 480px) {
  .card {
  width: 100%;
  }
}
.card{
    border-radius: 0px!important;
    
}
.background-color-gallery {
  background: linear-gradient(180deg, #A5A58D 0%, /*#CB997E 20%,
                                      #A09881 40%, #FFE8D6 60%,
                                      #807362 80%,*/ #6B705C 99%);
}

label {
     display: unset !important; 
}

.nav {
  color: var(--textColor);
  background-color: var(--2xLightGray);
  transition: opacity 300ms ease;
  
}

.nav:hover {
  background-color: var(--darkGreen);
  
}
</style>