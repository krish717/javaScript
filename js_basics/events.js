<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LEARNING EVENTS</title>
    <style>
        .bg-black{
            background-color: black;
            color : white;
        }
    </style>
</head>
<body class="bg-black">
    <h2>Amazing image</h2>
    <div >
        <ul id="images">
            <li><img width="200px" id="photoshop" src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="photoshop"></li>
            <li><img width="200px" id="japan" src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><img width="200px" id="river" src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" ></li>
            <li><img width="200px" id="prayer" src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""></li>
            <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
        </ul>
   </div>
</body>
<script>
    // document.getElementById('owl').onclick = () => {
    //     alert("Hello World")
    // } 

    //false then its bubbling
    //true then its capturing
   // document.getElementById('images').addEventListener('click',(e)=>{
        //console.log("clicked InSide the ul")
    //},false)
    //document.getElementById('owl').addEventListener('click',(e)=>{
        //alert("Hello World");
        // e.preventDefault();
        // console.log(e.target);
        //console.log("owl ul")
       // e.stopPropagation();
        
    //},false)

    //document.getElementById('google').addEventListener('click',(e)=>{
        //alert("Hello World");
        // e.preventDefault();
        // console.log(e.target);
        // console.log("google cliked")
        // e.preventDefault();
       // e.stopPropagation();
        
    //},false)


    document.querySelector('#images').addEventListener('click',(e)=>{
            //  console.log(e.target)
            if(e.target.tagName==='IMG'){
                console.log(e.target.id);
                  e.target.parentNode.remove();
            }
           
    })
  

    
</script>
</html>