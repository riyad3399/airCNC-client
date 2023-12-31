import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
  return (
    <Container>
      <div className="flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox labal={item.label} icon={item.icon} key={item.label} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
