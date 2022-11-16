// const getImagenPromesa =()=>new promese{ resolve =>("http://ajsjajajajjsj.com");
//getImagenPromesa().then(console.log);

const getImagen = async()=>
{

const apiKey ="ak2BTEkR2dISwPXbjz2NJHqzDMmxg7Dp";
const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
const {data} = await resp.json();
const {url}= data.images.original;
const img = document.createElement("img")
 img.src = url;
document.body.append(img)

}
getImagen();


 

