import { AboutScreen } from "@/widgets/about-screen";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.about":
      return <AboutScreen key={index} data={section} />;
    // case "sections.features":
    //     return <StorefrontScreen />
    //   case "sections.testimonials-group":
    //     return <InstallmentScreen />
    //   case "sections.pricing":
    //     return <ShippingScreen />
    //   case "sections.lead-form":
    //     return <Email key={index} data={section} />;
    default:
      return null;
  }
}
