<script>
    import Home from '../features/home/Home.svelte';
    import Seo from '$lib/components/Seo.svelte';

    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://menucom.netlify.app';

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Menucom",
                "url": siteUrl,
                "logo": `${siteUrl}/img/logos/logomenucom_1.png`
            },
            {
                "@type": "WebSite",
                "url": siteUrl,
                "name": "Menucom"
            },
            {
                "@type": "WebPage",
                "url": siteUrl,
                "name": "Menucom — Tu tienda online en minutos"
            }
        ]
    };
</script>

<Seo
    title="Menucom — Tu tienda online en minutos"
    description="Crea tu propio negocio online con Menucom. Gestioná stock, catálogos y pedidos fácilmente."
    image="/img/assets/screens.png"
    type="website"
    {jsonLd}
/>

<Home />