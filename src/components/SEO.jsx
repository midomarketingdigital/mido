import { useEffect } from 'react';

export default function SEO({
  title = "MIDO - Marketing Digital | Gestão de Redes Sociais e Tráfego Pago",
  description = "Transformamos cliques em clientes! Agência especializada em marketing digital, gestão de redes sociais, tráfego pago e estratégias que geram resultados reais para sua empresa.",
  keywords = "marketing digital, gestão de redes sociais, tráfego pago, agência de marketing, marketing digital São Paulo, inbound marketing, CRM, automação de marketing, leads qualificados, Google Ads, Facebook Ads, Instagram Ads, consultoria de marketing",
  author = "MIDO Marketing Digital",
  ogImage = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698249a1591d8948f95db203/29a7804c0_logo-mido.png",
  ogUrl = "https://midomkt.com",
}) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (property, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Open Graph meta tags (Facebook, LinkedIn)
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', ogUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'MIDO Marketing Digital', true);
    updateMetaTag('og:locale', 'pt_BR', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:creator', '@midomktdigital');
    updateMetaTag('twitter:site', '@midomktdigital');

    // WhatsApp optimization
    updateMetaTag('og:image:alt', 'MIDO - Agência de Marketing Digital', true);
    
    // Additional SEO
    updateMetaTag('theme-color', '#a855f7'); // Purple color
    updateMetaTag('msapplication-TileColor', '#a855f7');
  }, [title, description, keywords, author, ogImage, ogUrl]);

  return null;
}