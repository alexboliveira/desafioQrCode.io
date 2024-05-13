class CardQrCode{ 
    /*usar apenas pra ver se classe foi importada*/
    constructor(){
        console.log("CardQrCode  iniciada");  
        this.init();
    }
    
    //inicio
    init(){
        
      // return document.getElementById('app').innerHTML+=`
       return document.querySelector("body > main").innerHTML+=`

       <article class = 'cardQrCode'>
         <div class="box">
            <img src="./modules/cardQrCode/img/image-qr-code.png" alt="imagem contendo um QRCODE" title="imagem contendo um QRCODE"/>
            <div class="boxText">
                <h1>Improve your front-end skills by building projects</h1>
                <h2>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h2>
            </div>
         </div>
       </article>

       `
    }



}  //fim da classe


export default CardQrCode;