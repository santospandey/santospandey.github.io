var imgHeight = window.innerHeight;
var active = 1;
var slider = document.getElementsByClassName("sliderLong")[0];
var sliderLong = slider.children;
var singleSlide = slider.children[0]; 

myanimation = new Animator(singleSlide);
var bullet = document.getElementsByClassName('bullet')[0];


//change the bullet icon color
function changebullet()
{
  for(var i=1 ; i<=sliderLong.length; i++)
  {
    document.getElementById(i).className= '';
  }
  document.getElementById(active).className = 'active';
}

// page click and color
for(var i = 1; i<=sliderLong.length; i++)
{
  var li = document.createElement('li');
  li.id = i;
  li.addEventListener('click', function()
  {
    active = this.id;
    ml = (imgHeight * (active-1)*-1);
    myanimation.animate("margin-top", ml, 1000);
    changebullet();
  });

  bullet.appendChild(li);
}


function slide()
{
	if(myanimation.animation == false)
  {
		active = active == sliderLong.length ? active = 1: ++active;
		var ml = (imgHeight * (active-1)*-1);
		myanimation.animate("margin-top", ml, 1000);
	}
  changebullet();
}

changebullet();
var intervalId = setInterval(slide, 3000);   


  
