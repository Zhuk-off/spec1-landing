import UiContainer from "@/shared/ui/layouts/ui-container";
import UiSection from "@/shared/ui/layouts/ui-section";
import { UiShopCat } from "@/shared/ui/ui-shop-cat";
import { UiTitle } from "@/shared/ui/ui-title";
import shop from "/public/shop1.jpg";

export function StorefrontScreen() {
  return (
    <UiSection id="shop">
      <UiContainer>
        <UiTitle title="Магазин" />
        <div className="sm:py-5 md:py-10 xl:px-32 xl:py-32 2xl:px-44">
          <div className="sm:bg-spec-black-light sm:px-5 xl:px-60 ">
            <UiShopCat
              image={shop}
              title="Болгарки"
              desc=" Мы приглашаем вас узнать больше о нашей компании на этой"
              position="left"
            />
            <UiShopCat
              image={shop}
              title="Болгарки"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem iure molestiae laboriosam placeat cumque quisquam nostrum ducimus nam maxime dolore impedit, tempora quod libero iste suscipit id vero voluptas sed in sunt illo ipsa rerum expedita. Blanditiis iure repellendus deserunt accusantium enim officia quo, tempora aperiam autem voluptatibus molestias, labore unde accusamus voluptatem earum nulla. Dolor consequuntur obcaecati hic? Aspernatur ab impedit placeat, incidunt a qui reiciendis facere obcaecati, quidem itaque odit voluptates rem aperiam sit perspiciatis. Nobis blanditiis sit suscipit exercitationem odio! Praesentium nostrum, consequatur voluptatum repudiandae impedit unde officia autem fugit odio atque harum quaerat minima delectus adipisci!"
              position="right"
            />
            <UiShopCat
              image={shop}
              title="Болгарки"
              desc="Lorem ipsum !"
              position="left"
            />
            <UiShopCat
              image={shop}
              title="Болгарки"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem iure molestiae laboriosam placeat cumque quisquam nostrum ducimus nam maxime dolore impedit, tempora quod libero iste suscipit id vero voluptas sed in sunt illo ipsa rerum expedita. Blanditiis iure repellendus deserunt accusantium enim officia quo, tempora aperiam autem voluptatibus molestias, labore unde accusamus voluptatem earum nulla. Dolor consequuntur obcaecati hic? Aspernatur ab impedit placeat, incidunt a qui reiciendis facere obcaecati, quidem itaque odit voluptates rem aperiam sit perspiciatis. Nobis blanditiis sit suscipit exercitationem odio! Praesentium nostrum, consequatur voluptatum repudiandae impedit unde officia autem fugit odio atque harum quaerat minima delectus adipisci!"
              position="right"
            />
            <UiShopCat
              image={shop}
              title="{Болгарки}"
              desc=" Мы приглашаем вас узнать больше о нашей компании на этой"
              position="left"
            />
          </div>
        </div>
      </UiContainer>
    </UiSection>
  );
}
