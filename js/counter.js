function Counter(el, finalValue)
{
	var element = document.getElementsByClassName(el)[0];
	var fV = finalValue;
	var i = 0;
	var gap = 9999;
	this.intervalId;
    var that = this;

	this.counter = function()
    {
        i += gap;
		element.innerHTML = that.numDisplay(i);
		if((fV - i) < gap)
        {
			gap = 999;
		}

		if(i >= finalValue)
        {
			clearInterval(intervalId);
			element.innerHTML = that.numDisplay(finalValue);
		}
	}

	this.numDisplay = function (number)
    {
        var formatt = '';
        var num = number;

        while (num !== 0) 
        {
            var num1 = num % 1000;
            num = parseInt(num/1000,10);
            if (num1 < 100)
            {
                if (num !== 0)
                {
                    if (num1 < 10)
                    {
                        num1 = '0' + num1;
                    }
                    num1 = '0' + num1;
                }
            }

            if (formatt !== '')
            {
                formatt = num1 + '.' + formatt;
            } 
            else 
            {
                formatt = num1;
            }
        }
            return formatt;
    }

    this.start = function()
    {
        intervalId = setInterval(this.counter, 50);
    }	
}

var c1 = new Counter('counter1', 3278989);
var c2 = new Counter('counter2', 234989);
var c3 = new Counter('counter3', 354798);
var c4 = new Counter('counter4', 1234989);
c1.start();
c2.start();
c3.start();
c4.start();

