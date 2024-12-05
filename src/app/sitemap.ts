import { TravelPackages } from "@/data/packages";
import { otherRoutes, routes } from "@/data/routes";
import { SiteInformation } from "@/data/site-information";
import { ITravelPackage } from "@/interfaces/package.interface";

export default function sitemap() {
  const mainRoutes = [...routes, ...otherRoutes].map((route) => ({
    url:
      route.href === "/"
        ? SiteInformation.url
        : `${SiteInformation.url}${route.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const packageRoutes = TravelPackages.map((pkg: ITravelPackage) => ({
    url: `${SiteInformation.url}/our-packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...mainRoutes, ...packageRoutes];
}
