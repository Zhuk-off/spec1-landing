import { UiLogo } from "@/shared/ui/ui-logo";
import logoImg from "/public/logo.svg";
import { UiPhone } from "@/shared/ui/ui-phone";
import { UiMail } from "@/shared/ui/ui-mail";

export async function HomePage() {
  return (
    <main
      className="min-h-full bg-scroll"
      style={{ backgroundImage: "url('background.webp')" }}
    >
      <UiLogo logoUrl={logoImg} />
      <div className="flex flex-col">
        <UiPhone phone={"+375 (29) 516-44-44"} phoneLink="+375295116444" />
        <UiMail mail="zhukoff@gmail.com" />
      </div>
    </main>
  );
}
