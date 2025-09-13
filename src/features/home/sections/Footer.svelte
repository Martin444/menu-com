<section class="info-extra-container">
    <div class="info-extra ">
        <a href="/about-service" class="info-link">Sobre el Servicio</a>                
    </div>
    <div class="info-extra">
        <a href="/tyc" class="info-link">Términos y Condiciones</a>                
    </div>
    <div class="info-extra">
    <a href="/dev-contact" class="info-link">Contacta al desarrollador</a>                
    </div>
</section>   


<style>
    /*extra info section*/
    .info-extra-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: #000;
        font-family: "sansation";
        min-height: 50px;
    }

    .info-extra {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }

    .info-extra a{
        color: var(--text-white);
        text-decoration: none;
    }
    .info-link:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) 
    {
        .info-extra-container, .info-extra {
            display: block;
            padding-top: 20px;
            padding-left: 6.3vw;
        }
        
        .info-extra {
             height: 2rem; 
        }

    }
</style>