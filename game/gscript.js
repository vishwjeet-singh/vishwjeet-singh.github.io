var chance=1,a=[],c=[],cou=0,pw=false;
a=[0,0,0,0,0,0,0,0,0];
c=[0,0,0,0,0,0,0,0,0];
function change(k) {
	if(c[k]===0)
	{
		var str="b"+k;
			if(chance==1)
			{
			document.getElementById(str).innerHTML="X";
			chance=2;
			cou++;
			c[k]++;
			a[k]=1;
			}
			else {
			document.getElementById(str).innerHTML="O";
			chance=1;
			cou++;
			c[k]++;
			a[k]=2;
			}
	}
}
function check() {
	if(cou>=5)
	{
		if(a[0]===a[1]&&a[0]===a[2]&&a[0]!=0)
		{
			pw=true;
		}
		else if(a[0]===a[3]&&a[0]===a[6]&&a[0]!=0)
		{
			pw=true;
		}
		else if(a[0]===a[4]&&a[0]===a[8]&&a[0]!=0)
		{
			pw=true;
		}
		else if(a[1]===a[4]&&a[1]===a[7]&&a[7]!=0)
		{
			pw=true;
		}
		else if(a[2]===a[4]&&a[2]===a[6]&&a[6]!=0)
		{
			pw=true;
		}
		else if(a[2]===a[5]&&a[2]===a[8]&&a[8]!=0)
		{
			pw=true;
		}
		else if(a[5]===a[4]&&a[5]===a[3]&&a[3]!=0)
		{
			pw=true;
		}
		else if(a[8]===a[7]&&a[8]===a[6]&&a[6]!=0)
		{
			pw=true;
		}
	}
	if(cou==9&&(!pw))
	{
		alert("gameover");
		document.getElementById('txt').innerHTML="";
		var txt="No one wins click on New game to play again";
		var i=0;
		function typing() {
		if(i < txt.length)
		{
			document.getElementById('txt').innerHTML+=txt.charAt(i);
			i++;
			setInterval(typing,100);
		}
	}
	typing();	
	}
	if(pw)
	{
		alert("gameover");
		// document.getElementById('btn').style.bottom="-"+"200"+"px";
		if(chance==2)
		{
		document.getElementById('txt').innerHTML="";
		var txt="Player "+"1"+ " wins"+" click on new game to play again ";
		var i=0;
		function typing() {
			if(i < txt.length)
			{
			document.getElementById('txt').innerHTML+=txt.charAt(i);
			i++;
			setInterval(typing,100);
			}
		}
		typing();
		}
		else
		{
		document.getElementById('txt').innerHTML="";
		var txt="Player "+"2"+ " wins"+" click on new game to play again ";
		var i=0;
		function typing() {
			if(i < txt.length)
			{
			document.getElementById('txt').innerHTML+=txt.charAt(i);
			i++;
			setInterval(typing,100);
			}
		}
		typing();
		}
		
	}
}

function newgame() {
	// body...
	var k=document.getElementsByClassName('b');
	for (var i = 0; i < k.length; i++) {
		k[i].innerHTML="";
	}
	chance=1,a=[],c=[],cou=0,pw=false;
	a=[0,0,0,0,0,0,0,0,0];
	c=[0,0,0,0,0,0,0,0,0];
	document.getElementById('txt').innerHTML="Player "+chance+" Turn";
}
function turn() {
	// body...
	document.getElementById('txt').innerHTML="Player "+chance+" Turn";
}
var tool=document.getElementById('tooltip');
window.onmousemove=function(e){
	var x=e.clientX,
		y=e.clientY,
		X = event.screenX;
  		Y = event.screenY;
		tool.style.left=(x+30)+"px";
		tool.style.top=(y+30)+"px";
		tool.style.transform="translate("+(-X+420)+","+(-Y+200)+")";
}