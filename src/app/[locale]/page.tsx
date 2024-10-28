import Hero from "@/components/Home/Hero";
import { CategoriesList } from "@/components/product/CategoriesList";
import ProductList from "@/components/product/ProductList";
import ProductsTemplate from "@/components/product/ProductsTemplate";
import { globMargin } from "@/styles/global";

const HomePage = () => {
  return (
    <div className="w-full h-fit">
      <div className={`w-full`}>
        <Hero />
      </div>
      <div className={`w-full ${globMargin}`}>
        <ProductsTemplate
          title="Featured Products"
          content={<ProductList type="home" />}
        />
      </div>
      <div className={`w-full ${globMargin}`}>
        <ProductsTemplate
          title="Categories"
          content={<CategoriesList />}
          category
        />
      </div>
      <div className={`w-full ${globMargin}`}>
        <ProductsTemplate
          title="New Products"
          content={<ProductList type="home" />}
        />
      </div>
    </div>
  );
};

export default HomePage;
