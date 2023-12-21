import { AboutScreen } from "@/widgets/about-screen";
import { InstallmentScreen } from "@/widgets/installment-screen";
import { StorefrontScreen } from "@/widgets/storefront-screen";

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.about":
      return <AboutScreen key={index} data={section} />;
    case "sections.shop":
        return <StorefrontScreen  key={index} data={section} />
    case "sections.installment":
        return <InstallmentScreen  key={index} data={section} />
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
