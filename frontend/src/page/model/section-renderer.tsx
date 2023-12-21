import { AboutScreen } from "@/widgets/about-screen";
import { ContactsScreen } from "@/widgets/contacts-screen";
import { InstallmentScreen } from "@/widgets/installment-screen";
import { ShippingScreen } from "@/widgets/shipping-screen";
import { StorefrontScreen } from "@/widgets/storefront-screen";

export default function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.about":
      return <AboutScreen key={index} data={section} />;
    case "sections.shop":
      return <StorefrontScreen key={index} data={section} />;
    case "sections.installment":
      return <InstallmentScreen key={index} data={section} />;
    case "sections.shipping":
      return <ShippingScreen key={index} data={section} />;
    case "sections.contacts":
      return <ContactsScreen key={index} data={section} />;
    default:
      return null;
  }
}
