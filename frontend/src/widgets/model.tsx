import { Company } from "@/entities/company";
import { Team } from "@/entities/team";
import { About } from "@/shared/lib/types";

export function sectionAboutRenderer(section: About, index: number) {
  switch (section.idname) {
    case "team":
      return <Team key={index} data={section} />;
    case "company":
      return <Company key={index} data={section} />;
    default:
      return null;
  }
}
