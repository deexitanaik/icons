
import React from "react";
import CategoryCard from "../components/CategoryCard";
import weddingIcon from "../assets/wedding.png";

export default {
  title: "Components/CategoryCard",
  component: CategoryCard,
};

const Template = (args) => <CategoryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: weddingIcon,
  label: "Wedding Planning",
};

export const Selected = Template.bind({});
Selected.args = {
  icon: weddingIcon,
  label: "Wedding Planning",
  selected: true,
};
