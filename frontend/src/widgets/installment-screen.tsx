import UiContainer from "@/shared/ui/layouts/ui-container";
import UiSection from "@/shared/ui/layouts/ui-section";
import { UiCard } from "@/shared/ui/ui-card";
import { UiTitle } from "@/shared/ui/ui-title";
import shop from "/public/shop1.jpg";
import card1 from "/public/cards/card1.png";

export function InstallmentScreen() {
  return (
    <UiSection className="bg-spec-black-light" id="installment">
      <UiContainer>
        <UiTitle title="Рассрочка" />
        <div className="text-spec-text-white flex flex-col gap-5 md:flex-row md:gap-8 lg:gap-14">
          <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            reprehenderit eveniet alias quasi! Exercitationem, blanditiis?
            Temporibus a perspiciatis quasi at non voluptas assumenda atque
            distinctio eum, omnis repellat inventore voluptate voluptatum
            ducimus beatae, obcaecati consequuntur esse minima necessitatibus
            cum accusantium libero ipsum numquam? Ut, vero enim minus eaque{" "}
          </div>
          <div className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
            eligendi pariatur saepe laboriosam provident consectetur, suscipit
            cum voluptatem nesciunt consequatur quia et maiores laborum placeat?
            Alias laborum officiis rerum, temporibus facilis dolore saepe magni
            excepturi, nam quae nisi distinctio aspernatur odit iste dolores
            tempore rem at quos voluptate! Quia, perspiciatis.
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-12 sm:mt-20 lg:px-6">
          <UiCard
            title={"Халва - 2 мес "}
            image={shop}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, distinctio sint, reprehenderit similique reiciendis atque dicta aliquid dolore harum necessitatibus tenetur repellendus mollitia? Nam veritatis explicabo pariatur atque veniam ad illo repudiandae provident deleniti ex, laudantium quis architecto doloremque inventore velit incidunt, accusantium non ipsam nemo delectus magnam. Animi!"
            }
          />

          <UiCard
            title={"Халва - 2 мес "}
            image={card1}
            desc={
              "Мы приглашаем вас узнать больше о нашей компании на этой странице. Здесь вы можете прочитать о нашей истории, узнать о наших ценностях, и о том, как мы стремимся обеспечить нашим клиентам предложений."
            }
          />
          <UiCard
            title={"Халва - 2 мес "}
            image={card1}
            desc={
              "Мы приглашаем вас узнать больше о нашей компании на этой странице. Здесь вы можете прочитать о нашей истории, узнать о наших ценностях, и о том, как мы стремимся обеспечить нашим клиентам предложений."
            }
          />
        </div>
      </UiContainer>
    </UiSection>
  );
}
