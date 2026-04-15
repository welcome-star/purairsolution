import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  pathnames: {
    "/": "/",
    "/a-propos": { fr: "/a-propos", en: "/about" },
    "/contact": "/contact",
    "/faq": "/faq",
    "/carriere": { fr: "/carriere", en: "/careers" },
    "/avis-clients": { fr: "/avis-clients", en: "/reviews" },
    "/zones-desservies": { fr: "/zones-desservies", en: "/service-areas" },
    "/commercial": "/commercial",
    "/commercial/condos-coproprietes": { fr: "/commercial/condos-coproprietes", en: "/commercial/condos" },
    "/commercial/nettoyage-hotte-restaurant": { fr: "/commercial/nettoyage-hotte-restaurant", en: "/commercial/restaurant-hood-cleaning" },
    "/commercial/post-construction": "/commercial/post-construction",
    "/services/nettoyage-systeme-central": { fr: "/services/nettoyage-systeme-central", en: "/services/furnace-duct-cleaning" },
    "/services/nettoyage-conduits-secheuse": { fr: "/services/nettoyage-conduits-secheuse", en: "/services/dryer-vent-cleaning" },
    "/services/nettoyage-echangeur-air": { fr: "/services/nettoyage-echangeur-air", en: "/services/air-exchanger-cleaning" },
    "/services/nettoyage-climatiseur-mural": { fr: "/services/nettoyage-climatiseur-mural", en: "/services/mini-split-cleaning" },
    "/services/nettoyage-ventilateur-salle-bain": { fr: "/services/nettoyage-ventilateur-salle-bain", en: "/services/bathroom-fan-cleaning" },
    "/services/nettoyage-hotte-cuisine": { fr: "/services/nettoyage-hotte-cuisine", en: "/services/kitchen-hood-cleaning" },
    "/services/inspection-camera": { fr: "/services/inspection-camera", en: "/services/camera-inspection" },
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
    "/villes/[slug]": { fr: "/villes/[slug]", en: "/areas/[slug]" },
  },
});
