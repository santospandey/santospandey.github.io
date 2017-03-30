function Page(){
	var imageContainer;
	var image;
	var firstPageContainer;
	var that = this;	
	this.setHeight=function(){
		imageContainer=document.getElementsByClassName('slider')[0];
		image=imageContainer.children;		
		imageContainer.style.height=window.innerHeight+'px';

		image[0].children[0].style.width=100+'%';
		image[0].children[0].style.height=window.innerHeight+'px';
		image[0].children[1].style.width=100+'%';
		image[0].children[1].style.height=window.innerHeight+'px';
		image[0].children[2].style.width=100+'%';
		image[0].children[2].style.height=window.innerHeight+'px';
		image[0].children[3].style.width=100+'%';
		image[0].children[3].style.height=window.innerHeight+'px';
		image[0].children[4].style.width=100+'%';
		image[0].children[4].style.height=window.innerHeight+'px';
		image[0].children[5].style.width=100+'%';
		image[0].children[5].style.height=window.innerHeight+'px';
		image[0].children[6].style.width=100+'%';
		image[0].children[6].style.height=window.innerHeight+'px';
	}
}

var page = new Page();
page.setHeight();