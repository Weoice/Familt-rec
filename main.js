Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90,
    })
    
    camera = document.getElementById("Camera");
    
    Webcam.attach("#Camera");

    function capture() {

        Webcam.snap(function(data_uri){
        
        document.getElementById("result").innerHTML = '<img id="captured_Image" src="'+data_uri+'"/>';
        });
        }
        
        console.log("ml5version", ml5.version);
        
        classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Qp1lFzOJV/model.json", modelloaded);
        
        function modelloaded() {
        console.log("Model Loaded!");
        }
        