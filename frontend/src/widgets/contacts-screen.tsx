import UiContainer from "@/shared/ui/layouts/ui-container";
import UiSection from "@/shared/ui/layouts/ui-section";
import { UiTitle } from "@/shared/ui/ui-title";

export function ContactsScreen() {
  return (
    <UiSection className="bg-spec-black-light relative" id="contact">
      <UiContainer>
        <div className="flex flex-col gap-5 md:flex-row md:gap-6 lg:gap-12">
          <div className="flex-1">
            <UiTitle title="Контакты" className="" />
            <div className="text-spec-text-white">
              Мы приглашаем вас узнать больше о нашей компании на этой странице.
              Здесь вы можете прочитать о нашей истории, узнать о наших
              ценностях, и о том, как мы стремимся обеспечить нашим клиентам
              предложений.Мы приглашаем вас узнать больше о нашей компании на
              этой странице. Здесь вы можете прочитать о нашей истории, узнать о
              наших ценностях, и о том, как мы стремимся обеспечить нашим
              клиентам предложений.Мы приглашаем вас узнать больше о нашей
              компании на этой странице. Здесь вы можете прочитать о нашей
              истории, узнать о наших ценностях, и о том, как мы стремимся
              обеспечить нашим клиентам предложений.Мы приглашаем вас узнать
              больше о нашей компании на этой странице. Здесь вы можете
              прочитать о нашей истории, узнать о наших ценностях, и о том, как
              мы стремимся обеспечить нашим клиентам предложений.
            </div>
          </div>
          <div className="flex-1 border-2 border-spec-gold-light drop-shadow-2xl  sm:border-4">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad8090b9cadff833f2b0375b6429af50028aee1c120167fee2c8e13eba3a4e119&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </UiContainer>
    </UiSection>
  );
}
