const canvas = new fabric.Canvas('editor-canvas',{backgroundColor:"#fff"});

// Colors
const colors = ["#FFB6B9","#FDCB82","#A0CED9","#9DE0AD","#F49AC2"];
const colorList = document.getElementById('color-list');
colors.forEach(c=>{
  const div=document.createElement('div');
  div.style.backgroundColor=c;
  div.onclick=()=> addText(c);
  colorList.appendChild(div);
});

// Templates
const templates=['template1.jpg','template2.jpg','template3.jpg','template4.jpg','template5.jpg'];
const templateList=document.getElementById('template-list');
templates.forEach(url=>{
  const img=document.createElement('img');
  img.src=url;
  img.onclick=()=> setBackground(url);
  templateList.appendChild(img);
});
function setBackground(url){
  fabric.Image.fromURL(url,img=>{
    img.scaleToWidth(canvas.width);
    img.scaleToHeight(canvas.height);
    canvas.setBackgroundImage(img,canvas.renderAll.bind(canvas));
  });
}

// Stickers
const stickers=['sticker1.png','sticker2.png','sticker3.png','sticker4.png','sticker5.png','sticker6.png','sticker7.png','sticker8.png','sticker9.png','sticker10.png'];
const stickerList=document.getElementById('sticker-list');
stickers.forEach(url=>{
  const img=document.createElement('img');
  img.src=url;
  img.onclick=()=> addSticker(url);
  stickerList.appendChild(img);
});
function addSticker(url){
  fabric.Image.fromURL(url,img=>{
    img.scaleToWidth(120);
    img.left=150;
    img.top=150;
    canvas.add(img);
    canvas.setActiveObject(img);
  });
}

// Text
function addText(color="#333"){
  const text=new fabric.Textbox("Your Text Here",{left:100,top:100,fontSize:30,fill:color,fontFamily:"PlayfulFont"});
  canvas.add(text);
  canvas.setActiveObject(text);
}

// Export
function exportPNG(){
  const dataURL=canvas.toDataURL({format:'png',quality:1});
  const link=document.createElement('a');
  link.href=dataURL;
  link.download='aesthetic_design.png';
  link.click();
}

// AI Sticker placeholder
function generateAISticker(event){
  const prompt=document.getElementById('ai-prompt').value;
  if(!prompt)return alert("Enter a prompt!");
  alert("AI Sticker generation will appear here after backend integration: "+prompt);
}

// Style Presets
function setStyle(type){
  switch(type){
    case "pastel": canvas.backgroundColor="#fff5f7"; break;
    case "retro": canvas.backgroundColor="#fdf0d5"; break;
    case "vaporwave": canvas.backgroundColor="#dcd0ff"; break;
  }
  canvas.renderAll();
}
