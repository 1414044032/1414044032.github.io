import{B as R,o as W,c as M,H as E,Q as k,j as m,aj as I,k as S,ah as F,z as T,_ as V,b as j,r as $,D as q,d as H,g as y,e as C,f as x,n as G,p as A,a1 as Z,s as J,t as Q,v as K}from"./index.8b4e0df5.js";import{u as _}from"./user.517568cb.js";const B={};B.getData=t=>new Promise((e,i)=>{let s={};tt(t).then(o=>{s.arrayBuffer=o,s.orientation=ot(o),e(s)}).catch(o=>{i(o)})});function tt(t){let e=null;return new Promise((i,s)=>{if(t.src)if(/^data\:/i.test(t.src))e=it(t.src),i(e);else if(/^blob\:/i.test(t.src)){var o=new FileReader;o.onload=function(h){e=h.target.result,i(e)},et(t.src,function(h){o.readAsArrayBuffer(h)})}else{var r=new XMLHttpRequest;r.onload=function(){if(this.status==200||this.status===0)e=r.response,i(e);else throw"Could not load image";r=null},r.open("GET",t.src,!0),r.responseType="arraybuffer",r.send(null)}else s("img error")})}function et(t,e){var i=new XMLHttpRequest;i.open("GET",t,!0),i.responseType="blob",i.onload=function(s){(this.status==200||this.status===0)&&e(this.response)},i.send()}function it(t){t=t.replace(/^data\:([^\;]+)\;base64,/gmi,"");for(var e=atob(t),i=e.length,s=new ArrayBuffer(i),o=new Uint8Array(s),r=0;r<i;r++)o[r]=e.charCodeAt(r);return s}function st(t,e,i){var s="",o;for(o=e,i+=e;o<i;o++)s+=String.fromCharCode(t.getUint8(o));return s}function ot(t){var e=new DataView(t),i=e.byteLength,s,o,r,h,a,l,c,n,p,f;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(p=2;p<i;){if(e.getUint8(p)===255&&e.getUint8(p+1)===225){c=p;break}p++}if(c&&(o=c+4,r=c+10,st(e,o,4)==="Exif"&&(l=e.getUint16(r),a=l===18761,(a||l===19789)&&e.getUint16(r+2,a)===42&&(h=e.getUint32(r+4,a),h>=8&&(n=r+h)))),n){for(i=e.getUint16(n,a),f=0;f<i;f++)if(p=n+f*12+2,e.getUint16(p,a)===274){p+=8,s=e.getUint16(p,a);break}}return s}var rt=(t,e)=>{const i=t.__vccOpts||t;for(const[s,o]of e)i[s]=o;return i};const ht=R({data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1,rotate:0,isIos:!1,orientation:0,imgs:"",coe:.2,scaling:!1,scalingSet:"",coeStatus:"",isCanShow:!0}},props:{img:{type:[String,Blob,null,File],default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:[Number,String],default:0},autoCropHeight:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:()=>[1,1]},fixedBox:{type:Boolean,default:!1},full:{type:Boolean,default:!1},canMove:{type:Boolean,default:!0},canMoveBox:{type:Boolean,default:!0},original:{type:Boolean,default:!1},centerBox:{type:Boolean,default:!1},high:{type:Boolean,default:!0},infoTrue:{type:Boolean,default:!1},maxImgSize:{type:[Number,String],default:2e3},enlarge:{type:[Number,String],default:1},preW:{type:[Number,String],default:0},mode:{type:String,default:"contain"},limitMinSize:{type:[Number,Array,String],default:()=>10}},computed:{cropInfo(){let t={};if(t.top=this.cropOffsertY>21?"-21px":"0px",t.width=this.cropW>0?this.cropW:0,t.height=this.cropH>0?this.cropH:0,this.infoTrue){let e=1;this.high&&!this.full&&(e=window.devicePixelRatio),this.enlarge!==1&!this.full&&(e=Math.abs(Number(this.enlarge))),t.width=t.width*e,t.height=t.height*e,this.full&&(t.width=t.width/this.scale,t.height=t.height/this.scale)}return t.width=t.width.toFixed(0),t.height=t.height.toFixed(0),t},isIE(){return!!window.ActiveXObject||"ActiveXObject"in window},passive(){return this.isIE?null:{passive:!1}}},watch:{img(){this.checkedImg()},imgs(t){t!==""&&this.reload()},cropW(){this.showPreview()},cropH(){this.showPreview()},cropOffsertX(){this.showPreview()},cropOffsertY(){this.showPreview()},scale(t,e){this.showPreview()},x(){this.showPreview()},y(){this.showPreview()},autoCrop(t){t&&this.goAutoCrop()},autoCropWidth(){this.autoCrop&&this.goAutoCrop()},autoCropHeight(){this.autoCrop&&this.goAutoCrop()},mode(){this.checkedImg()},rotate(){this.showPreview(),this.autoCrop?this.goAutoCrop(this.cropW,this.cropH):(this.cropW>0||this.cropH>0)&&this.goAutoCrop(this.cropW,this.cropH)}},methods:{getVersion(t){var e=navigator.userAgent.split(" "),i="";let s=0;const o=new RegExp(t,"i");for(var r=0;r<e.length;r++)o.test(e[r])&&(i=e[r]);return i?s=i.split("/")[1].split("."):s=["0","0","0"],s},checkOrientationImage(t,e,i,s){if(this.getVersion("chrome")[0]>=81)e=-1;else if(this.getVersion("safari")[0]>=605){const h=this.getVersion("version");h[0]>13&&h[1]>1&&(e=-1)}else{const h=navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);if(h){let a=h[1];a=a.split("_"),(a[0]>13||a[0]>=13&&a[1]>=4)&&(e=-1)}}let o=document.createElement("canvas"),r=o.getContext("2d");switch(r.save(),e){case 2:o.width=i,o.height=s,r.translate(i,0),r.scale(-1,1);break;case 3:o.width=i,o.height=s,r.translate(i/2,s/2),r.rotate(180*Math.PI/180),r.translate(-i/2,-s/2);break;case 4:o.width=i,o.height=s,r.translate(0,s),r.scale(1,-1);break;case 5:o.height=i,o.width=s,r.rotate(.5*Math.PI),r.scale(1,-1);break;case 6:o.width=s,o.height=i,r.translate(s/2,i/2),r.rotate(90*Math.PI/180),r.translate(-i/2,-s/2);break;case 7:o.height=i,o.width=s,r.rotate(.5*Math.PI),r.translate(i,-s),r.scale(-1,1);break;case 8:o.height=i,o.width=s,r.translate(s/2,i/2),r.rotate(-90*Math.PI/180),r.translate(-i/2,-s/2);break;default:o.width=i,o.height=s}r.drawImage(t,0,0,i,s),r.restore(),o.toBlob(h=>{let a=URL.createObjectURL(h);URL.revokeObjectURL(this.imgs),this.imgs=a},"image/"+this.outputType,1)},checkedImg(){if(this.img===null||this.img===""){this.imgs="",this.clearCrop();return}this.loading=!0,this.scale=1,this.rotate=0,this.clearCrop();let t=new Image;if(t.onload=()=>{if(this.img==="")return this.$emit("img-load","error"),!1;let i=t.width,s=t.height;B.getData(t).then(o=>{this.orientation=o.orientation||1;let r=Number(this.maxImgSize);if(!this.orientation&&i<r&s<r){this.imgs=this.img;return}i>r&&(s=s/i*r,i=r),s>r&&(i=i/s*r,s=r),this.checkOrientationImage(t,this.orientation,i,s)})},t.onerror=()=>{this.$emit("img-load","error")},this.img.substr(0,4)!=="data"&&(t.crossOrigin=""),this.isIE){var e=new XMLHttpRequest;e.onload=function(){var i=URL.createObjectURL(this.response);t.src=i},e.open("GET",this.img,!0),e.responseType="blob",e.send()}else t.src=this.img},startMove(t){if(t.preventDefault(),this.move&&!this.crop){if(!this.canMove)return!1;this.moveX=("clientX"in t?t.clientX:t.touches[0].clientX)-this.x,this.moveY=("clientY"in t?t.clientY:t.touches[0].clientY)-this.y,t.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),t.touches.length==2&&(this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg)),this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})}else this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=t.offsetX?t.offsetX:t.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=t.offsetY?t.offsetY:t.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0},touchScale(t){t.preventDefault();let e=this.scale;var i={x:this.touches[0].clientX,y:this.touches[0].clientY},s={x:t.touches[0].clientX,y:t.touches[0].clientY},o={x:this.touches[1].clientX,y:this.touches[1].clientY},r={x:t.touches[1].clientX,y:t.touches[1].clientY},h=Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)),a=Math.sqrt(Math.pow(s.x-r.x,2)+Math.pow(s.y-r.y,2)),l=a-h,c=1;c=c/this.trueWidth>c/this.trueHeight?c/this.trueHeight:c/this.trueWidth,c=c>.1?.1:c;var n=c*l;if(!this.touchNow){if(this.touchNow=!0,l>0?e+=Math.abs(n):l<0&&e>Math.abs(n)&&(e-=Math.abs(n)),this.touches=t.touches,setTimeout(()=>{this.touchNow=!1},8),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e}},cancelTouchScale(t){window.removeEventListener("touchmove",this.touchScale)},moveImg(t){if(t.preventDefault(),t.touches&&t.touches.length===2)return this.touches=t.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancelTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;let e="clientX"in t?t.clientX:t.touches[0].clientX,i="clientY"in t?t.clientY:t.touches[0].clientY,s,o;s=e-this.moveX,o=i-this.moveY,this.$nextTick(()=>{if(this.centerBox){let r=this.getImgAxis(s,o,this.scale),h=this.getCropAxis(),a=this.trueHeight*this.scale,l=this.trueWidth*this.scale,c,n,p,f;switch(this.rotate){case 1:case-1:case 3:case-3:c=this.cropOffsertX-this.trueWidth*(1-this.scale)/2+(a-l)/2,n=this.cropOffsertY-this.trueHeight*(1-this.scale)/2+(l-a)/2,p=c-a+this.cropW,f=n-l+this.cropH;break;default:c=this.cropOffsertX-this.trueWidth*(1-this.scale)/2,n=this.cropOffsertY-this.trueHeight*(1-this.scale)/2,p=c-l+this.cropW,f=n-a+this.cropH;break}r.x1>=h.x1&&(s=c),r.y1>=h.y1&&(o=n),r.x2<=h.x2&&(s=p),r.y2<=h.y2&&(o=f)}this.x=s,this.y=o,this.$emit("imgMoving",{moving:!0,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!0,axis:this.getImgAxis()})})},leaveImg(t){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg),this.$emit("imgMoving",{moving:!1,axis:this.getImgAxis()}),this.$emit("img-moving",{moving:!1,axis:this.getImgAxis()})},scaleImg(){this.canScale&&window.addEventListener(this.support,this.changeSize,this.passive)},cancelScale(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize(t){t.preventDefault();let e=this.scale;var i=t.deltaY||t.wheelDelta,s=navigator.userAgent.indexOf("Firefox");i=s>0?i*30:i,this.isIE&&(i=-i);var o=this.coe;o=o/this.trueWidth>o/this.trueHeight?o/this.trueHeight:o/this.trueWidth;var r=o*i;r<0?e+=Math.abs(r):e>Math.abs(r)&&(e-=Math.abs(r));let h=r<0?"add":"reduce";if(h!==this.coeStatus&&(this.coeStatus=h,this.coe=.2),this.scaling||(this.scalingSet=setTimeout(()=>{this.scaling=!1,this.coe=this.coe+=.01},50)),this.scaling=!0,!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},changeScale(t){let e=this.scale;t=t||1;var i=20;if(i=i/this.trueWidth>i/this.trueHeight?i/this.trueHeight:i/this.trueWidth,t=t*i,t>0?e+=Math.abs(t):e>Math.abs(t)&&(e-=Math.abs(t)),!this.checkoutImgAxis(this.x,this.y,e))return!1;this.scale=e},createCrop(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;this.$nextTick(()=>{var s=e-this.cropX,o=i-this.cropY;if(s>0?(this.cropW=s+this.cropChangeX>this.w?this.w-this.cropChangeX:s,this.cropOffsertX=this.cropChangeX):(this.cropW=this.w-this.cropChangeX+Math.abs(s)>this.w?this.cropChangeX:Math.abs(s),this.cropOffsertX=this.cropChangeX+s>0?this.cropChangeX+s:0),!this.fixed)o>0?(this.cropH=o+this.cropChangeY>this.h?this.h-this.cropChangeY:o,this.cropOffsertY=this.cropChangeY):(this.cropH=this.h-this.cropChangeY+Math.abs(o)>this.h?this.cropChangeY:Math.abs(o),this.cropOffsertY=this.cropChangeY+o>0?this.cropChangeY+o:0);else{var r=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];r+this.cropOffsertY>this.h?(this.cropH=this.h-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0],s>0?this.cropOffsertX=this.cropChangeX:this.cropOffsertX=this.cropChangeX-this.cropW):this.cropH=r,this.cropOffsertY=this.cropOffsertY}})},changeCropSize(t,e,i,s,o){t.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=e,this.canChangeY=i,this.changeCropTypeX=s,this.changeCropTypeY=o,this.cropX="clientX"in t?t.clientX:t.touches[0].clientX,this.cropY="clientY"in t?t.clientY:t.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0),this.$emit("change-crop-size",{width:this.cropW,height:this.cropH})},changeCropNow(t){t.preventDefault();var e="clientX"in t?t.clientX:t.touches?t.touches[0].clientX:0,i="clientY"in t?t.clientY:t.touches?t.touches[0].clientY:0;let s=this.w,o=this.h,r=0,h=0;if(this.centerBox){let a=this.getImgAxis(),l=a.x2,c=a.y2;r=a.x1>0?a.x1:0,h=a.y1>0?a.y1:0,s>l&&(s=l),o>c&&(o=c)}this.$nextTick(()=>{var a=e-this.cropX,l=i-this.cropY;if(this.canChangeX&&(this.changeCropTypeX===1?this.cropOldW-a>0?(this.cropW=s-this.cropChangeX-a<=s-r?this.cropOldW-a:this.cropOldW+this.cropChangeX-r,this.cropOffsertX=s-this.cropChangeX-a<=s-r?this.cropChangeX+a:r):(this.cropW=Math.abs(a)+this.cropChangeX<=s?Math.abs(a)-this.cropOldW:s-this.cropOldW-this.cropChangeX,this.cropOffsertX=this.cropChangeX+this.cropOldW):this.changeCropTypeX===2&&(this.cropOldW+a>0?(this.cropW=this.cropOldW+a+this.cropOffsertX<=s?this.cropOldW+a:s-this.cropOffsertX,this.cropOffsertX=this.cropChangeX):(this.cropW=s-this.cropChangeX+Math.abs(a+this.cropOldW)<=s-r?Math.abs(a+this.cropOldW):this.cropChangeX-r,this.cropOffsertX=s-this.cropChangeX+Math.abs(a+this.cropOldW)<=s-r?this.cropChangeX-Math.abs(a+this.cropOldW):r))),this.canChangeY&&(this.changeCropTypeY===1?this.cropOldH-l>0?(this.cropH=o-this.cropChangeY-l<=o-h?this.cropOldH-l:this.cropOldH+this.cropChangeY-h,this.cropOffsertY=o-this.cropChangeY-l<=o-h?this.cropChangeY+l:h):(this.cropH=Math.abs(l)+this.cropChangeY<=o?Math.abs(l)-this.cropOldH:o-this.cropOldH-this.cropChangeY,this.cropOffsertY=this.cropChangeY+this.cropOldH):this.changeCropTypeY===2&&(this.cropOldH+l>0?(this.cropH=this.cropOldH+l+this.cropOffsertY<=o?this.cropOldH+l:o-this.cropOffsertY,this.cropOffsertY=this.cropChangeY):(this.cropH=o-this.cropChangeY+Math.abs(l+this.cropOldH)<=o-h?Math.abs(l+this.cropOldH):this.cropChangeY-h,this.cropOffsertY=o-this.cropChangeY+Math.abs(l+this.cropOldH)<=o-h?this.cropChangeY-Math.abs(l+this.cropOldH):h))),this.canChangeX&&this.fixed){var c=this.cropW/this.fixedNumber[0]*this.fixedNumber[1];c+this.cropOffsertY>o?(this.cropH=o-this.cropOffsertY,this.cropW=this.cropH/this.fixedNumber[1]*this.fixedNumber[0]):this.cropH=c}if(this.canChangeY&&this.fixed){var n=this.cropH/this.fixedNumber[1]*this.fixedNumber[0];n+this.cropOffsertX>s?(this.cropW=s-this.cropOffsertX,this.cropH=this.cropW/this.fixedNumber[0]*this.fixedNumber[1]):this.cropW=n}})},checkCropLimitSize(){let{cropW:t,cropH:e,limitMinSize:i}=this,s=new Array;return Array.isArray[i]?s=i:s=[i,i],t=parseFloat(s[0]),e=parseFloat(s[1]),[t,e]},changeCropEnd(t){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},endCrop(){this.cropW===0&&this.cropH===0&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop(){this.crop=!0},stopCrop(){this.crop=!1},clearCrop(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove(t){if(t.preventDefault(),!this.canMoveBox)return this.crop=!1,this.startMove(t),!1;if(t.touches&&t.touches.length===2)return this.crop=!1,this.startMove(t),this.leaveCrop(),!1;window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop);let e="clientX"in t?t.clientX:t.touches[0].clientX,i="clientY"in t?t.clientY:t.touches[0].clientY,s,o;s=e-this.cropOffsertX,o=i-this.cropOffsertY,this.cropX=s,this.cropY=o,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})},moveCrop(t,e){let i=0,s=0;t&&(t.preventDefault(),i="clientX"in t?t.clientX:t.touches[0].clientX,s="clientY"in t?t.clientY:t.touches[0].clientY),this.$nextTick(()=>{let o,r,h=i-this.cropX,a=s-this.cropY;if(e&&(h=this.cropOffsertX,a=this.cropOffsertY),h<=0?o=0:h+this.cropW>this.w?o=this.w-this.cropW:o=h,a<=0?r=0:a+this.cropH>this.h?r=this.h-this.cropH:r=a,this.centerBox){let l=this.getImgAxis();o<=l.x1&&(o=l.x1),o+this.cropW>l.x2&&(o=l.x2-this.cropW),r<=l.y1&&(r=l.y1),r+this.cropH>l.y2&&(r=l.y2-this.cropH)}this.cropOffsertX=o,this.cropOffsertY=r,this.$emit("cropMoving",{moving:!0,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!0,axis:this.getCropAxis()})})},getImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s={x1:0,x2:0,y1:0,y2:0},o=this.trueWidth*i,r=this.trueHeight*i;switch(this.rotate){case 0:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i;break;case 1:case-1:case 3:case-3:s.x1=t+this.trueWidth*(1-i)/2+(o-r)/2,s.x2=s.x1+this.trueHeight*i,s.y1=e+this.trueHeight*(1-i)/2+(r-o)/2,s.y2=s.y1+this.trueWidth*i;break;default:s.x1=t+this.trueWidth*(1-i)/2,s.x2=s.x1+this.trueWidth*i,s.y1=e+this.trueHeight*(1-i)/2,s.y2=s.y1+this.trueHeight*i;break}return s},getCropAxis(){let t={x1:0,x2:0,y1:0,y2:0};return t.x1=this.cropOffsertX,t.x2=t.x1+this.cropW,t.y1=this.cropOffsertY,t.y2=t.y1+this.cropH,t},leaveCrop(t){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.$emit("cropMoving",{moving:!1,axis:this.getCropAxis()}),this.$emit("crop-moving",{moving:!1,axis:this.getCropAxis()})},getCropChecked(t){let e=document.createElement("canvas"),i=new Image,s=this.rotate,o=this.trueWidth,r=this.trueHeight,h=this.cropOffsertX,a=this.cropOffsertY;i.onload=()=>{if(this.cropW!==0){let n=e.getContext("2d"),p=1;this.high&!this.full&&(p=window.devicePixelRatio),this.enlarge!==1&!this.full&&(p=Math.abs(Number(this.enlarge)));let f=this.cropW*p,X=this.cropH*p,d=o*this.scale*p,g=r*this.scale*p,v=(this.x-h+this.trueWidth*(1-this.scale)/2)*p,u=(this.y-a+this.trueHeight*(1-this.scale)/2)*p;switch(c(f,X),n.save(),s){case 0:this.full?(c(f/this.scale,X/this.scale),n.drawImage(i,v/this.scale,u/this.scale,d/this.scale,g/this.scale)):n.drawImage(i,v,u,d,g);break;case 1:case-3:this.full?(c(f/this.scale,X/this.scale),v=v/this.scale+(d/this.scale-g/this.scale)/2,u=u/this.scale+(g/this.scale-d/this.scale)/2,n.rotate(s*90*Math.PI/180),n.drawImage(i,u,-v-g/this.scale,d/this.scale,g/this.scale)):(v=v+(d-g)/2,u=u+(g-d)/2,n.rotate(s*90*Math.PI/180),n.drawImage(i,u,-v-g,d,g));break;case 2:case-2:this.full?(c(f/this.scale,X/this.scale),n.rotate(s*90*Math.PI/180),v=v/this.scale,u=u/this.scale,n.drawImage(i,-v-d/this.scale,-u-g/this.scale,d/this.scale,g/this.scale)):(n.rotate(s*90*Math.PI/180),n.drawImage(i,-v-d,-u-g,d,g));break;case 3:case-1:this.full?(c(f/this.scale,X/this.scale),v=v/this.scale+(d/this.scale-g/this.scale)/2,u=u/this.scale+(g/this.scale-d/this.scale)/2,n.rotate(s*90*Math.PI/180),n.drawImage(i,-u-d/this.scale,v,d/this.scale,g/this.scale)):(v=v+(d-g)/2,u=u+(g-d)/2,n.rotate(s*90*Math.PI/180),n.drawImage(i,-u-d,v,d,g));break;default:this.full?(c(f/this.scale,X/this.scale),n.drawImage(i,v/this.scale,u/this.scale,d/this.scale,g/this.scale)):n.drawImage(i,v,u,d,g)}n.restore()}else{let n=o*this.scale,p=r*this.scale,f=e.getContext("2d");switch(f.save(),s){case 0:c(n,p),f.drawImage(i,0,0,n,p);break;case 1:case-3:c(p,n),f.rotate(s*90*Math.PI/180),f.drawImage(i,0,-p,n,p);break;case 2:case-2:c(n,p),f.rotate(s*90*Math.PI/180),f.drawImage(i,-n,-p,n,p);break;case 3:case-1:c(p,n),f.rotate(s*90*Math.PI/180),f.drawImage(i,-n,0,n,p);break;default:c(n,p),f.drawImage(i,0,0,n,p)}f.restore()}t(e)};var l=this.img.substr(0,4);l!=="data"&&(i.crossOrigin="Anonymous"),i.src=this.imgs;function c(n,p){e.width=Math.round(n),e.height=Math.round(p)}},getCropData(t){this.getCropChecked(e=>{t(e.toDataURL("image/"+this.outputType,this.outputSize))})},getCropBlob(t){this.getCropChecked(e=>{e.toBlob(i=>t(i),"image/"+this.outputType,this.outputSize)})},showPreview(){if(this.isCanShow)this.isCanShow=!1,setTimeout(()=>{this.isCanShow=!0},16);else return!1;let t=this.cropW,e=this.cropH,i=this.scale;var s={};s.div={width:`${t}px`,height:`${e}px`};let o=(this.x-this.cropOffsertX)/i,r=(this.y-this.cropOffsertY)/i,h=0;s.w=t,s.h=e,s.url=this.imgs,s.img={width:`${this.trueWidth}px`,height:`${this.trueHeight}px`,transform:`scale(${i})translate3d(${o}px, ${r}px, ${h}px)rotateZ(${this.rotate*90}deg)`},s.html=`
      <div class="show-preview" style="width: ${s.w}px; height: ${s.h}px,; overflow: hidden">
        <div style="width: ${t}px; height: ${e}px">
          <img src=${s.url} style="width: ${this.trueWidth}px; height: ${this.trueHeight}px; transform:
          scale(${i})translate3d(${o}px, ${r}px, ${h}px)rotateZ(${this.rotate*90}deg)">
        </div>
      </div>`,this.$emit("realTime",s),this.$emit("real-time",s)},reload(){let t=new Image;t.onload=()=>{this.w=parseFloat(window.getComputedStyle(this.$refs.cropper).width),this.h=parseFloat(window.getComputedStyle(this.$refs.cropper).height),this.trueWidth=t.width,this.trueHeight=t.height,this.original?this.scale=1:this.scale=this.checkedMode(),this.$nextTick(()=>{this.x=-(this.trueWidth-this.trueWidth*this.scale)/2+(this.w-this.trueWidth*this.scale)/2,this.y=-(this.trueHeight-this.trueHeight*this.scale)/2+(this.h-this.trueHeight*this.scale)/2,this.loading=!1,this.autoCrop&&this.goAutoCrop(),this.$emit("img-load","success"),this.$emit("imgLoad","success"),setTimeout(()=>{this.showPreview()},20)})},t.onerror=()=>{this.$emit("imgLoad","error"),this.$emit("img-load","error")},t.src=this.imgs},checkedMode(){let t=1,e=this.trueWidth,i=this.trueHeight;const s=this.mode.split(" ");switch(s[0]){case"contain":this.trueWidth>this.w&&(t=this.w/this.trueWidth),this.trueHeight*t>this.h&&(t=this.h/this.trueHeight);break;case"cover":e=this.w,t=e/this.trueWidth,i=i*t,i<this.h&&(i=this.h,t=i/this.trueHeight);break;default:try{let o=s[0];if(o.search("px")!==-1){o=o.replace("px",""),e=parseFloat(o);const r=e/this.trueWidth;let h=1,a=s[1];a.search("px")!==-1&&(a=a.replace("px",""),i=parseFloat(a),h=i/this.trueHeight),t=Math.min(r,h)}if(o.search("%")!==-1&&(o=o.replace("%",""),e=parseFloat(o)/100*this.w,t=e/this.trueWidth),s.length===2&&o==="auto"){let r=s[1];r.search("px")!==-1&&(r=r.replace("px",""),i=parseFloat(r),t=i/this.trueHeight),r.search("%")!==-1&&(r=r.replace("%",""),i=parseFloat(r)/100*this.h,t=i/this.trueHeight)}}catch{t=1}}return t},goAutoCrop(t,e){if(this.imgs===""||this.imgs===null)return;this.clearCrop(),this.cropping=!0;let i=this.w,s=this.h;if(this.centerBox){const h=Math.abs(this.rotate)%2>0;let a=(h?this.trueHeight:this.trueWidth)*this.scale,l=(h?this.trueWidth:this.trueHeight)*this.scale;i=a<i?a:i,s=l<s?l:s}var o=t||parseFloat(this.autoCropWidth),r=e||parseFloat(this.autoCropHeight);(o===0||r===0)&&(o=i*.8,r=s*.8),o=o>i?i:o,r=r>s?s:r,this.fixed&&(r=o/this.fixedNumber[0]*this.fixedNumber[1]),r>this.h&&(r=this.h,o=r/this.fixedNumber[1]*this.fixedNumber[0]),this.changeCrop(o,r)},changeCrop(t,e){if(this.centerBox){let i=this.getImgAxis();t>i.x2-i.x1&&(t=i.x2-i.x1,e=t/this.fixedNumber[0]*this.fixedNumber[1]),e>i.y2-i.y1&&(e=i.y2-i.y1,t=e/this.fixedNumber[1]*this.fixedNumber[0])}this.cropW=t,this.cropH=e,this.checkCropLimitSize(),this.$nextTick(()=>{this.cropOffsertX=(this.w-this.cropW)/2,this.cropOffsertY=(this.h-this.cropH)/2,this.centerBox&&this.moveCrop(null,!0)})},refresh(){this.img,this.imgs="",this.scale=1,this.crop=!1,this.rotate=0,this.w=0,this.h=0,this.trueWidth=0,this.trueHeight=0,this.clearCrop(),this.$nextTick(()=>{this.checkedImg()})},rotateLeft(){this.rotate=this.rotate<=-3?0:this.rotate-1},rotateRight(){this.rotate=this.rotate>=3?0:this.rotate+1},rotateClear(){this.rotate=0},checkoutImgAxis(t,e,i){t=t||this.x,e=e||this.y,i=i||this.scale;let s=!0;if(this.centerBox){let o=this.getImgAxis(t,e,i),r=this.getCropAxis();o.x1>=r.x1&&(s=!1),o.x2<=r.x2&&(s=!1),o.y1>=r.y1&&(s=!1),o.y2<=r.y2&&(s=!1)}return s}},mounted(){this.support="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll";let t=this;var e=navigator.userAgent;this.isIOS=!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(i,s,o){for(var r=atob(this.toDataURL(s,o).split(",")[1]),h=r.length,a=new Uint8Array(h),l=0;l<h;l++)a[l]=r.charCodeAt(l);i(new Blob([a],{type:t.type||"image/png"}))}}),this.showPreview(),this.checkedImg()},destroyed(){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop),this.cancelScale()}}),at={key:0,class:"cropper-box"},nt=["src"],lt={class:"cropper-view-box"},ct=["src"],pt={key:1};function ut(t,e,i,s,o,r){return W(),M("div",{class:"vue-cropper",ref:"cropper",onMouseover:e[28]||(e[28]=(...h)=>t.scaleImg&&t.scaleImg(...h)),onMouseout:e[29]||(e[29]=(...h)=>t.cancelScale&&t.cancelScale(...h))},[t.imgs?(W(),M("div",at,[E(m("div",{class:"cropper-box-canvas",style:I({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+t.x/t.scale+"px,"+t.y/t.scale+"px,0)rotateZ("+t.rotate*90+"deg)"})},[m("img",{src:t.imgs,alt:"cropper-img",ref:"cropperImg"},null,8,nt)],4),[[k,!t.loading]])])):S("",!0),m("div",{class:F(["cropper-drag-box",{"cropper-move":t.move&&!t.crop,"cropper-crop":t.crop,"cropper-modal":t.cropping}]),onMousedown:e[0]||(e[0]=(...h)=>t.startMove&&t.startMove(...h)),onTouchstart:e[1]||(e[1]=(...h)=>t.startMove&&t.startMove(...h))},null,34),E(m("div",{class:"cropper-crop-box",style:I({width:t.cropW+"px",height:t.cropH+"px",transform:"translate3d("+t.cropOffsertX+"px,"+t.cropOffsertY+"px,0)"})},[m("span",lt,[m("img",{style:I({width:t.trueWidth+"px",height:t.trueHeight+"px",transform:"scale("+t.scale+","+t.scale+") translate3d("+(t.x-t.cropOffsertX)/t.scale+"px,"+(t.y-t.cropOffsertY)/t.scale+"px,0)rotateZ("+t.rotate*90+"deg)"}),src:t.imgs,alt:"cropper-img"},null,12,ct)]),m("span",{class:"cropper-face cropper-move",onMousedown:e[2]||(e[2]=(...h)=>t.cropMove&&t.cropMove(...h)),onTouchstart:e[3]||(e[3]=(...h)=>t.cropMove&&t.cropMove(...h))},null,32),t.info?(W(),M("span",{key:0,class:"crop-info",style:I({top:t.cropInfo.top})},T(t.cropInfo.width)+" \xD7 "+T(t.cropInfo.height),5)):S("",!0),t.fixedBox?S("",!0):(W(),M("span",pt,[m("span",{class:"crop-line line-w",onMousedown:e[4]||(e[4]=h=>t.changeCropSize(h,!1,!0,0,1)),onTouchstart:e[5]||(e[5]=h=>t.changeCropSize(h,!1,!0,0,1))},null,32),m("span",{class:"crop-line line-a",onMousedown:e[6]||(e[6]=h=>t.changeCropSize(h,!0,!1,1,0)),onTouchstart:e[7]||(e[7]=h=>t.changeCropSize(h,!0,!1,1,0))},null,32),m("span",{class:"crop-line line-s",onMousedown:e[8]||(e[8]=h=>t.changeCropSize(h,!1,!0,0,2)),onTouchstart:e[9]||(e[9]=h=>t.changeCropSize(h,!1,!0,0,2))},null,32),m("span",{class:"crop-line line-d",onMousedown:e[10]||(e[10]=h=>t.changeCropSize(h,!0,!1,2,0)),onTouchstart:e[11]||(e[11]=h=>t.changeCropSize(h,!0,!1,2,0))},null,32),m("span",{class:"crop-point point1",onMousedown:e[12]||(e[12]=h=>t.changeCropSize(h,!0,!0,1,1)),onTouchstart:e[13]||(e[13]=h=>t.changeCropSize(h,!0,!0,1,1))},null,32),m("span",{class:"crop-point point2",onMousedown:e[14]||(e[14]=h=>t.changeCropSize(h,!1,!0,0,1)),onTouchstart:e[15]||(e[15]=h=>t.changeCropSize(h,!1,!0,0,1))},null,32),m("span",{class:"crop-point point3",onMousedown:e[16]||(e[16]=h=>t.changeCropSize(h,!0,!0,2,1)),onTouchstart:e[17]||(e[17]=h=>t.changeCropSize(h,!0,!0,2,1))},null,32),m("span",{class:"crop-point point4",onMousedown:e[18]||(e[18]=h=>t.changeCropSize(h,!0,!1,1,0)),onTouchstart:e[19]||(e[19]=h=>t.changeCropSize(h,!0,!1,1,0))},null,32),m("span",{class:"crop-point point5",onMousedown:e[20]||(e[20]=h=>t.changeCropSize(h,!0,!1,2,0)),onTouchstart:e[21]||(e[21]=h=>t.changeCropSize(h,!0,!1,2,0))},null,32),m("span",{class:"crop-point point6",onMousedown:e[22]||(e[22]=h=>t.changeCropSize(h,!0,!0,1,2)),onTouchstart:e[23]||(e[23]=h=>t.changeCropSize(h,!0,!0,1,2))},null,32),m("span",{class:"crop-point point7",onMousedown:e[24]||(e[24]=h=>t.changeCropSize(h,!1,!0,0,2)),onTouchstart:e[25]||(e[25]=h=>t.changeCropSize(h,!1,!0,0,2))},null,32),m("span",{class:"crop-point point8",onMousedown:e[26]||(e[26]=h=>t.changeCropSize(h,!0,!0,2,2)),onTouchstart:e[27]||(e[27]=h=>t.changeCropSize(h,!0,!0,2,2))},null,32)]))],4),[[k,t.cropping]])],544)}var N=rt(ht,[["render",ut],["__scopeId","data-v-be5e5ddc"]]);typeof window<"u"&&window.Vue&&window.Vue.createApp({}).component("VueCropper",N);const ft=t=>(J("data-v-5396c73b"),t=t(),Q(),t),dt=["src"],gt={class:"avatar-upload-preview"},mt=["src"],vt=ft(()=>m("br",null,null,-1)),wt={__name:"userAvatar",setup(t){const e=j(),{proxy:i}=K(),s=$(!1),o=$(!1),r=$("\u4FEE\u6539\u5934\u50CF"),h=q({img:e.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0,outputType:"png",previews:{}});function a(){s.value=!0}function l(){o.value=!0}function c(){}function n(){i.$refs.cropper.rotateLeft()}function p(){i.$refs.cropper.rotateRight()}function f(u){u=u||1,i.$refs.cropper.changeScale(u)}function X(u){if(u.type.indexOf("image/")==-1)i.$modal.msgError("\u6587\u4EF6\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u4E0A\u4F20\u56FE\u7247\u7C7B\u578B,\u5982\uFF1AJPG\uFF0CPNG\u540E\u7F00\u7684\u6587\u4EF6\u3002");else{const w=new FileReader;w.readAsDataURL(u),w.onload=()=>{h.img=w.result}}}function d(){i.$refs.cropper.getCropBlob(u=>{let w=new FormData;w.append("avatarfile",u),_(w).then(b=>{s.value=!1,h.img="http://office.tflxsoft.com:10086"+b.imgUrl,e.avatar=h.img,i.$modal.msgSuccess("\u4FEE\u6539\u6210\u529F"),o.value=!1})})}function g(u){h.previews=u}function v(){h.img=e.avatar,h.visible=!1}return(u,w)=>{const b=H("el-col"),L=H("el-row"),z=H("Upload"),P=H("el-icon"),O=H("el-button"),U=H("el-upload"),D=H("el-dialog");return W(),M("div",{class:"user-info-head",onClick:w[6]||(w[6]=Y=>a())},[m("img",{src:y(h).img,title:"\u70B9\u51FB\u4E0A\u4F20\u5934\u50CF",class:"img-circle img-lg"},null,8,dt),C(D,{title:y(r),modelValue:y(s),"onUpdate:modelValue":w[5]||(w[5]=Y=>Z(s)?s.value=Y:null),width:"800px","append-to-body":"",onOpened:l,onClose:v},{default:x(()=>[C(L,null,{default:x(()=>[C(b,{xs:24,md:12,style:{height:"350px"}},{default:x(()=>[y(o)?(W(),G(y(N),{key:0,ref:"cropper",img:y(h).img,info:!0,autoCrop:y(h).autoCrop,autoCropWidth:y(h).autoCropWidth,autoCropHeight:y(h).autoCropHeight,fixedBox:y(h).fixedBox,outputType:y(h).outputType,onRealTime:g},null,8,["img","autoCrop","autoCropWidth","autoCropHeight","fixedBox","outputType"])):S("",!0)]),_:1}),C(b,{xs:24,md:12,style:{height:"350px"}},{default:x(()=>[m("div",gt,[m("img",{src:y(h).previews.url,style:I(y(h).previews.img)},null,12,mt)])]),_:1})]),_:1}),vt,C(L,null,{default:x(()=>[C(b,{lg:2,md:2},{default:x(()=>[C(U,{action:"#","http-request":c,"show-file-list":!1,"before-upload":X},{default:x(()=>[C(O,null,{default:x(()=>[A(" \u9009\u62E9 "),C(P,{class:"el-icon--right"},{default:x(()=>[C(z)]),_:1})]),_:1})]),_:1})]),_:1}),C(b,{lg:{span:1,offset:2},md:2},{default:x(()=>[C(O,{icon:"Plus",onClick:w[0]||(w[0]=Y=>f(1))})]),_:1}),C(b,{lg:{span:1,offset:1},md:2},{default:x(()=>[C(O,{icon:"Minus",onClick:w[1]||(w[1]=Y=>f(-1))})]),_:1}),C(b,{lg:{span:1,offset:1},md:2},{default:x(()=>[C(O,{icon:"RefreshLeft",onClick:w[2]||(w[2]=Y=>n())})]),_:1}),C(b,{lg:{span:1,offset:1},md:2},{default:x(()=>[C(O,{icon:"RefreshRight",onClick:w[3]||(w[3]=Y=>p())})]),_:1}),C(b,{lg:{span:2,offset:6},md:2},{default:x(()=>[C(O,{type:"primary",onClick:w[4]||(w[4]=Y=>d())},{default:x(()=>[A("\u63D0 \u4EA4")]),_:1})]),_:1})]),_:1})]),_:1},8,["title","modelValue"])])}}},yt=V(wt,[["__scopeId","data-v-5396c73b"]]);export{yt as default};
