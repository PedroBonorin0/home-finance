'use client'
import { Box, Button, Text } from "grommet";
import { Category } from "./page";
import categoryIncome from '@/public/icons/category-income.svg';
import categoryOutcome from '@/public/icons/category-outcome.svg';
import editIcon from '@/public/icons/edit.svg';
import deleteIcon from '@/public/icons/delete.svg';
import Image from "next/image";

export default function CategoryItem({ category, handleDelete }: { category: Category, handleDelete: (catId: string) => void }) {
  const handleEdit = () => {
    console.log('edit', category.name);
  }

  return (
    <Box
      margin={{ bottom: '0.5rem' }}
      pad={'0.5rem 1rem'}
      border
      width={{ min: '450px' }}
      height={{ min: '40px' }}
      round={'small'}
      direction='row'
      align='center'
      justify="between"
    >
      <Box direction="row" gap='1rem'>
        <Image 
          src={category.type === 'income' ? categoryIncome : categoryOutcome}
          alt='category type'
          width={24}
        /> 
        <Text>{category.name}</Text>
      </Box>
      <Box direction="row" gap={'0.5rem'}>
        <Button onClick={() => handleEdit()}>
          <Image 
            src={editIcon}
            alt='category edit'
            width={24}
          />
        </Button>
        <Button onClick={() => handleDelete(category.id)}>
          <Image 
            src={deleteIcon}
            alt='category delete'
            width={24}
          /> 
        </Button>
      </Box>
    </Box>
  )
}