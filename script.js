const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image =[];
const data=[];
var string;
var tmp;
for(let i=0;i<2698;i++){
	document.getElementById("test").innerHTML=`images...`;
image.push(new Image());
string=`${i+1}-.png`
image[i].src = string;
}
document.getElementById("test").innerHTML=`stuff...`;
tmp=image[image.length-1];
image[image.length-1].addEventListener("load", () => {
	document.getElementById("test").innerHTML="processing...";
	for(i=0;i<2698;i++) {
	const frame=[]
	tmp=image[i];
	ctx.drawImage(tmp, 0, 0,tmp.width/2, tmp.height/2);
	const id = ctx.getImageData(0, 0, tmp.width/2, tmp.height/2);
const imageData=id.data;
	let prepix;
	let pix;
	let prev=1;
	for(a=0;a<imageData.length;a+=4) {
		pix=imageData[a];
		a>3?prepix=imageData[a-4]:prepix=pix
		prepix<100?prepix=0:prepix=255;
		pix<100?pix=0:pix=255;
		 if(prepix!=pix) {
			frame.push(prepix);
			frame.push(prev)
			prev=1;
		} else if(a>3) {prev++}
		if(a==imageData.length-4){
				frame.push(pix);
			if(prepix==pix){frame.push(prev)}
			else{
				frame.push(1);
			}
		}
	}
	//console.log(frame);
	data.push(frame+"m");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	document.getElementById("test").innerHTML=data;
		console.log(data.length);
	}
	});
console.log(image.length);
