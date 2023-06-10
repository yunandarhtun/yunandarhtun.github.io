function gifLocs(){
	this.intime = 0;
	this.found = false;
	this.pfound = false;
	this.pimage = null;
	this.house = [];
	this.signs = [];
	this.addHouse = function(pos){
			var home = new pxShack();
			home.gen();
			home.scale = [0.5,0.65,0.5];
			home.rotate = Math.random()*10;
			home.position = [pos[0],-1,pos[1]];
			home.vcolor = [1.2,1.2,1.2,1];
			this.house.push(home);
	}
	this.addSign = function(pos,index){
			var sign = new pxPlane();
			sign.scale = [0.5,0.5,1];
			sign.vcolor = [1,1,1,1];
			sign.position = [pos[0],0.3,pos[1]];
			sign.rotate = Math.random()*5;
			sign.img=document.createElement('img');
			sign.img.setAttribute("src",gifpile[index]);
			sign.img.style.display='none';
			sign.texture = createTheTexture(gl);
			//gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
			//gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
			sign.texture.image = sign.img;
			this.signs.push(sign);
	}
	this.locEnter = function(index){
		this.intime=0; 
		cam.tspeed=0;
		$("#artholder").empty();	
		$("#gallery").css("display","table-cell");
		$("#artholder").append(divpile[index]);
		$("#namebadge").html(namepile[index]);
		$("#namebadge").animate({height:'100px'},200);
		$("#gallery").animate({height:'100%',width:'100%',left:'0%',top:'0%',opacity:1},200);
		$("#info").animate({height:'0px'},200);
		drawsigns=false;
		//if ($(".artslide").length>1) $("#backbb").css({left:"0px", display:"block"});
	}
	this.locLeave = function(){
		//$("#gallery").css("display","none");
		this.intime=0;
		$("#gallery").animate({height:'0%',width:'0%',left:'50%',top:'50%',opacity:1},200,function(){ 
			$("#gallery").css("display","none");
			$("#artholder").empty();
			$("#backbb").css({left:"0px", display:"none"});
			$("#artholder").css({left:"0px"});
			$("#namebadge").animate({height:'0px'},200);
			$("#info").animate({height:'200px'},200);
			drawsigns=true;
			});	
	}
	this.checkloc = function(){
			this.found = false;
    		var cx = cam.position[0];
    		var cy = cam.position[1];
    		var cz = cam.position[2];
    		$cords.html("X: "+Math.floor(cx*100)+"<br />Y: "+ -Math.floor(cz*100));
    		var pp;
    		for(pp=0;pp<gifpile.length;pp++){
        		if ((cx>this.loc[pp][0] && cx<this.loc[pp][1]) && (cz>this.loc[pp][2] && cz<this.loc[pp][3])){
    				this.found = true;
    				return pp;
    				//we have a match
    			}
    		}
    		if (!this.found) return -1; 
    }
    this.loc = new Array();
    this.pos = [[4,-4],[-4,-8],[8,-14],[16,-4],[8,6],[0,8],[-6,4],[-12,-4],[-16,-16],[-6,-18],[-10,12],[0,-16],[9,12],[-13,3.5]];
    var ii = 0;
    for (ii=0;ii<gifpile.length;ii++){
    	var pos = this.pos[ii];
    	this.addHouse(pos);
    	this.addSign(pos,ii);
    	this.loc[ii] = [pos[0]-0.65,pos[0]+0.65,pos[1]-0.65,pos[1]+0.65];
    }
    this.manage = function(){
    	    var gfound = this.checkloc();
    	    if (this.found){
    	    	if (this.pfound && this.pimage==gfound) return;
	    		else {
					this.locEnter(gfound);
					if(gfound == 7){
						//bowie.currentTime= 0;
						bowie.play();
						bowie.style.display="inline";
					}
					if(gfound == 4){
						//poling.currentTime=0;
						poling.play();
						poling.style.display="inline";
					}
					if(gfound == 12){
						//poling.currentTime=0;
						jonomilo.play();
						jonomilo.style.display="inline";
					}
	    			this.pimage = gfound;
	    		}
	    	}
	    	else {
	    		if (this.pfound){
	    			this.locLeave();
	    			if(this.pimage==7){
	    				 bowie.pause();
	    				 bowie.src = bowie.src;
	    				 bowie.style.display="none";
	    			}
	    			else if(this.pimage==4){
	    				 poling.pause();
	    				 poling.src = poling.src;
	    				 poling.style.display="none";
	    			}
	    			else if(this.pimage==12){
	    				 jonomilo.pause();
	    				 jonomilo.src = poling.src;
	    				 jonomilo.style.display="none";
	    			}
	    		}
	    	}	
	    	this.pfound = this.found;
	}
}

function GIFLoader(){
	this.img = [];
	var gdiv = document.getElementById('gallerypanel');
	for(var i = 0;i<gifpile.length;i++){
		this.img[i]=document.createElement('img');
		this.img[i].setAttribute("src",gifpile[i]);
		this.img[i].style.display='none';
		gdiv.appendChild(this.img[i]);
	}
}	



let Show =`
<div>
    
    <main>
        <div class="slide-container">
            <div id="right-slide" class="arrow">
                <i class="fas fa-chevron-right"></i>
            </div>

            <section class="container" id="slider">
                <div class="thumbnail">
                    <img src="./img/a.png" alt="">
                    <div class="product-details">

                    </div>
                </div>
                <div class="thumbnail">
                    <img src="./img/b.png" alt="">
                    <div class="product-details">

                    </div>
                </div>
                <div class="thumbnail">
                    <img src="./img/c.png" alt="">
                    <div class="product-details">

                    </div>
                </div>
                <div class="thumbnail">
                    <img src="./img/d.png" alt="">
                    <div class="product-details">

                    </div>
                </div>
                <div class="thumbnail">
                    <img src="./img/e.png" alt="">
                    <div class="product-details">

                    </div>
                </div>
                <div class="thumbnail">
                    <img src="./img/f.png" alt="">
                    <div class="product-details">

                    </div>
                </div>
                <div class="thumbnail">
                    <img src="./img/g.png" alt="">
                    <div class="product-details">
                    </div>
                </div>
                <div class="thumbnail">
                    <img src="./img/h.png" alt="">
                    <div class="product-details">

                    </div>
                </div>
                <div class="thumbnail">
                    <img src="./img/i.png" alt="">
                    <div class="product-details">
                    </div>
                </div>
                <div class="thumbnail">
                    <img src="./img/j.png" alt="">
                    <div class="product-details">
                    </div>
                </div>


                <div class="thumbnail">
                    <img src="./img/k.png" alt="">
                    <div class="product-details">
                    </div>
                </div>
            </section>


            <div id="left-slide" class="arrow">
                <i class="fas fa-chevron-left"></i>
            </div>
        </div>
    </main>

    <script src="./js/all.min.js"></script>
    <script src="./js/script.js"></script>
</div>
`


var namepile = ["Harumi","Harumi","Harumi","Harumi","Harumi","Harumi","Harumi","Harumi","Harumi","Harumi","Harumi","Harumi","Harumi","Harumi"];

var gifpile = ['images/aaa.jpg','signs/ee.gif','images/aaa.jpg','images/aaa.jpg','images/aaa.jpg','images/aaa.jpg','images/aaa.jpg','images/aaa.jpg','images/aaa.jpg','images/aaa.jpg','images/aaa.jpg','images/aaa.jpg','signs/oo.gif','images/aaa.jpg'];

var divpile = [Show,
Show,
Show,
Show,
Show,
Show,
Show,
Show,
Show,
Show,
Show,
Show,
Show,
];

