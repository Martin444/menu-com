<script>
    export let titleButton = '';
    export let onClick = () => {};
</script>

<button class="button-principal get-started" on:click={onClick}>{titleButton}</button>

<style>
    
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
</style>