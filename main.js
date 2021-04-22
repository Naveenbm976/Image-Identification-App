Webcam.set({
    height : 300,
    width : 350,
    image_format :'png',
    png_quality : 90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2SxxSiANV/model.json',modelLoded);

function modelLoded(){
    console.log("model is loded");
}

function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("Object_name").innerHTML=results[0].label;
        document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}