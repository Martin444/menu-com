<script>
    export let titleButton = "Vacio";
    export let onClick = () => {};

    
</script>

<button class="secondary-button get-started" on:click={onClick}>{titleButton}</button>

<style>
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
</style>