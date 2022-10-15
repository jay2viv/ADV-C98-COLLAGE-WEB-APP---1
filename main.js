Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#camera' );

 function Take_picture()
 {
     
    setTimeout(function() {
        Webcam.snap( function(data_uri) {
            document.getElementById('result1').innerHTML = 
             '<img id="image1" src="'+data_uri+'"/>';
        } );
    }, 5000);

     
setTimeout(function()  {
    Webcam.snap( function(data_uri) {
        document.getElementById('result2').innerHTML = 
         '<img id="image1" src="'+data_uri+'"/>';
    } );

}, 10000);
    
    setTimeout(function()  {
        Webcam.snap( function(data_uri) {
            document.getElementById('result3').innerHTML = 
             '<img id="image1" src="'+data_uri+'"/>';
        } );

    }, 15000);
}
