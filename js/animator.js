function Animator(element) {
	this.el = element;	
	this.animation = false;
	this.finalValue = 0;
	this.property;
	this.intervalId;
	var that = this;
	
	this.animate = function(cssProperty, value, duration)
	{
		var style = window.getComputedStyle(element);
		initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);

		var step = (value - initial) / (duration / 50);
		var counter = 0;

		var slideMe = function()
		{
			counter++;
			var current = step * counter;
			element.style[cssProperty] = initial + current +'px';
			that.intervalId = requestAnimationFrame(slideMe);
			if (counter >= duration / 50) 
			{
				cancelAnimationFrame(that.intervalId);
			}
		}
		
		window.requestAnimationFrame(slideMe);	
	}

    this.finish = function(cssProperty)
    {
    	cancelAnimationFrame(that.intervalId);
    }   
}