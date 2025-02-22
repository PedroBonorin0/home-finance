'use client'
import { Box } from "grommet";
import PageStructure from "../components/PageStructure";
import CategoryItem from "./CategoryItem";
import { useState } from "react";

export type Category = {
  id: string;
  type: string;
  name: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      type: 'income',
      name: 'Salário',
    },
    {
      id: '2',
      type: 'outcome',
      name: 'Alimentação',
    },
    {
      id: '3',
      type: 'outcome',
      name: 'Lazer',
    },
  ]);

  const handleDelete = (catId: string): void => {
    const newCategoryList = categories.filter((cat) => cat.id !== catId);

    setCategories(newCategoryList);
  }

  return (
    <PageStructure title="Categorias">
      <Box>
        {categories.map((cat) => <CategoryItem key={cat.id} category={cat} handleDelete={handleDelete} /> )}
      </Box>
    </PageStructure>
  )
}