class CardQrCode{

   
    
    
    /*usar apenas pra ver se classe foi importada*/
    constructor(){
        console.log("CardQrCode  iniciada");  
        this.init();
        /*return document.getElementById("app").classList.add("template_001");*/
       
    }
    
    
    //inicio
    init(){
        
       return document.getElementById('app').innerHTML+=`

       <section class = 'cardQrCode'>
         <div class="box">
            <img src="./modules/cardQrCode/img/image-qr-code.png"/>

            <div class="boxText">
                <h1>Improve your front-end skills by building projects</h1>
                <h2>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h2>

            </div>
            

         </div>



       </section>


       
       
       
       
       
       
       `
    }





    

}  //fim da classe


export default CardQrCode;