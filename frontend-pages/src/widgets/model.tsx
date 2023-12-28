import { Company } from "@/entities/company";
import { Team } from "@/entities/team";
import { InfoblockElement } from "@/shared/lib/types";

export function sectionAboutRenderer(section: InfoblockElement, index: number) {
  switch (section.idname) {
    case "team":
      return <Team key={index} data={section} />;
    case "company":
      return <Company key={index} data={section} />;
    default:
      return <Company key={index} data={section} />;
  }
}
