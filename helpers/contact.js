export function getContactInfo() {
    const config = useRuntimeConfig();

    return {
        phone: config.public.phoneNumber || "(32) 99963-5827",
        whatsappNumber: config.public.whatsappNumber || "5532999635827",
        whatsappMessage:
            config.public.whatsappMessage ||
            "Olá! Tenho interesse em conhecer o Eco Parque Sapucaia e me tornar membro. Gostaria de agendar uma visita e saber sobre os valores da mensalidade e taxa de adesão. Quando posso conhecer as instalações?",
        emailContact: config.public.emailContact || "Ecoparksapucaia@gmail.com",
        emailGeneral: config.public.emailGeneral || "Ecoparksapucaia@gmail.com",
    };
}

export function getBusinessHours() {
    const config = useRuntimeConfig();

    return {
        full:
            config.public.openingHours || "Sábados e domingos: 10:00 às 18:00",
        days: config.public.openingDays || "Sábados e domingos",
        openTime: config.public.openingTime || "10:00",
        closeTime: config.public.closingTime || "18:00",
    };
}

export function getAddressInfo() {
    const config = useRuntimeConfig();

    return {
        name: config.public.addressName || "Sítio Sapucaia",
        zone: config.public.addressZone || "Zona Rural",
        state: config.public.addressState || "Minas Gerais",
        full:
            config.public.addressFull ||
            "Sítio Sapucaia, Zona Rural - Minas Gerais",
    };
}

export function getSocialLinks() {
    const config = useRuntimeConfig();

    return {
        instagram:
            config.public.instagramUrl ||
            "https://www.instagram.com/ecoparksapucaia?utm_source=qr&igsh=MWc0MG81OWprZnM1Mw==",
        facebook:
            config.public.facebookUrl ||
            "https://www.facebook.com/sitio.sapucaia.1?locale=pt_BR",
    };
}

export function getCompanyInfo() {
    const config = useRuntimeConfig();

    return {
        name: config.public.companyName || "Eco Parque Sapucaia",
        description:
            config.public.companyDescription ||
            "Clube recreativo onde membros e famílias vivem momentos únicos em meio à natureza.",
    };
}

export function getGoogleMapsEmbed() {
    const config = useRuntimeConfig();

    return (
        config.public.googleMapsEmbed ||
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.9364097647157!2d-42.3488471!3d-21.6865207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbd3957cf3a14b9%3A0x18bc4e05b86a222d!2sS%C3%ADtio%20Sapucaia!5e0!3m2!1spt-BR!2sbr!4v1735754321456"
    );
}

export function generateWhatsAppUrl() {
    const contact = getContactInfo();
    return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        contact.whatsappMessage
    )}`;
}
