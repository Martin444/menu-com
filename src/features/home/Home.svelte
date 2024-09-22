<script>
import ImageBanner from "../../../static/img/assets/renderStore.jpeg";
import ScreensImage from "../../../static/img/assets/screens.png";
    import Footer from "./components/Footer.svelte";

    function gotoLogin() {  
        window.location.href = 'https://menucom-dashboard.netlify.app/#/login';
    }

    function gotoRegister() {  
        window.location.href = 'https://menucom-dashboard.netlify.app/#/registrate';
    }

</script>

<section>
    <div class="main-container">
        <header>
            <div class="logo-container">
                <img id="logo-img" src="img/logos/logomenucom_1.png" alt="">
                <span>Menu com</span>
            </div>
            <div class="nav-item-container item-hidden">
                <button class="drop-down-button">Company<span id="triangle-icon">▾</span></button>                
            </div>
            <div class="login-container">
                <button id="login-button" on:click={gotoLogin}>Login</button>
            </div>
            <div class="get-started-container centered item-hidden">
                <button class="secondary-button get-started">Get started</button>
            </div>
        </header>
        <section class="presentation-section">
            <div class="presentation-container">
                <div class="title-container">
                    <span id="title">Get your own online store</span>
                </div>                
                <div class="description-container">
                    <p>
                        Create your own business, easily, using our web platform. 
                        Manage your stock inventory, share each catalogue to customers, and more. 
                    </p>
                </div>
                <div class="get-started-container">
                    <button class="button-principal get-started" on:click={gotoRegister}>Get started</button>
                </div>
            </div>
            <div class="image-container item-hidden">
                <img src="{ScreensImage}" alt="">
            </div>                    
        </section>
        <div class="img-store-container">
            <img src="{ImageBanner}" alt="">
        </div>        
    </div>    
    <Footer/>
</section>

<style>
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    --generalPaddingLeft: 2rem; 
    --principal-color: #3D72FD;
    --secondary-color: #CEDCFE;
    --text-white: #f1f1f1;
    --buttom-fill-alt: rgba(206,220,254, 0.42) 
}


/*Update font*/
@font-face {
    font-family: 'Sansation';
    src: url(/fonts/Sansation_Regular.ttf);    
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Sansation-bold';
    src: url(/fonts/Sansation_Bold.ttf);    
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: 'Sansation-light';
    src: url(/fonts/Sansation_Light.ttf);    
    font-weight: light;
    font-style: normal;
}
.main-container{
    font-family: 'Sansation';
    display: grid;
    grid-template-columns: repeat(12,1fr);    
    height: 100vh;
}   
/*Nav bar*/
header {    
    grid-column:1/9;
    grid-row: 1;
    max-height: 100px ;
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-gap: 0px;    
    padding-top: 1rem;
    padding-bottom: 1rem;                   
}
.logo-container {
    grid-column: 2/4; 
    display: flex;
    align-items: center;   
    height: auto;
    width: auto;    
}
.logo-container span{
    font-family: "Sansation-bold";
    font-size: 19px;
}
#logo-img {
    height: 40px;
}
.nav-item-container {
    grid-column: 5/6;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
/*class for to center items*/
.centered {
    display: flex;    
    justify-content: center;
    align-items: center;
}
/*Company button style*/
.drop-down-button{
    font-family: "Sansation-bold";
    font-size: 15px;    
    background: none;
    border: none;
    width: 80px;
    display: none;
}
#triangle-icon {
    font-size: 15px;
}
/*Login button*/
.login-container{
    display: flex;
    align-items: center;  
    justify-content: flex-end;  
}
#login-button{
    font-family: "Sansation-bold";
    font-size: 15px;
    color: var(--principal-color);
    background: none;
    border: none;
}
.get-started-container{
    grid-column:7/ span 8;    
    width: 100%;
}
/*Secondary button style*/
.secondary-button {
    background-color: var(--secondary-color);        
    color: var(--principal-color);
    font-family: "Sansation-bold";
    border-radius: 8px;    
    font-size: 16px;
    height: 41px ;
    width: 152px;
    border: none;
    /*height: 48px;
    line-height: 48px;    */
    text-align: center;        
    text-decoration: none;
}
/*Principal button*/
.button-principal {
    font-family: "Sansation-bold";
    font-size: 20px;
    color: var(--text-white);
    height: 48px;
    width: 195px;
    border-radius: 8px;
    border: none;
    background-color: var(--principal-color);    
}
button {
    cursor: pointer;
}
/*main-image*/
.img-store-container {
    grid-column: 9/13;   
    grid-row: 1/8;        
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background-color: black;
    height: 100vh;
}
.img-store-container img {    
    height: 100vh;
}
/*text*/
.presentation-section {
    grid-column: 1/9;            
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-gap: 10px;
    height: 100%;    
}
.presentation-container {
    grid-column: 2/5;   
    display: flex;
    flex-direction: column;
    justify-content: center;    
    height: calc(100vh - 72px);        
}
.description-container {
    grid-column: 2/5;
    text-align: justify; 
    line-height: 2.25em;
    margin-bottom: 42px; 

}
.description-container p{
    font-family: "Sansation-light";
    font-weight: light;
    font-size: 20px;
    color: black;
}
.title-container{
    margin-bottom: 42px;
    
}
#title {
    font-family: "Sansation-bold";
    font-weight: bold;
    font-size: 68px;    
    color: black;
} 

/*Secundary image*/
.image-container {    
    grid-column: 5/9;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
.image-container img {
    width: 100%;
}



@media screen and (max-width: 768px) {
    .main-container{
        grid-template-columns: repeat(8,1fr);    
    }
    .logo-container {
        grid-row: 2;
        grid-column: 1/6;
    }    
    .login-container {
        grid-row: 2;
        grid-column: 7;
    }
    #login-button{
        text-decoration: none;
        color: var(--principal-color);
        background-color: var(--buttom-fill-alt);
        padding: 1rem;
        border-radius: 8px;
    }    
    .get-started-container{
        grid-column: 7/8;
        margin-bottom: 48px;
    }
    .presentation-section {
        grid-column: 1/8;
    }
    .presentation-container {
        grid-column: 2/9;        
        color: var(--text-white);
    }
    header {
        grid-column: 2/12;
    }
    .img-store-container {
        position: absolute;
        background-color: black;
        height: 100vh;
        width: 100%;
        text-align: center;        
        z-index: -1;
        -webkit-mask-image: linear-gradient(rgb(29, 155, 35), transparent);
        mask-image: linear-gradient(rgb(29, 155, 35), transparent);    
    }

    .item-hidden {
        display: none;
    } 

}
@media screen and (max-height: 768px){    
    .main-container{
        height: 800px;
        padding-bottom: 50px;
    }

    .presentation-container {    
        height: 768px;
    }
    .img-store-container img{
        height: 100%;
    }

    .img-store-container {
        height: 800px;
    }    
}
</style>