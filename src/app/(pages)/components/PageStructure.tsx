import { Box, Text } from "grommet";

export default function PageStructure({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string,
}) {
  return (
    <Box>
      <Text size='3rem' weight={'bold'} margin={{ bottom: '1.5rem' }}>{title}</Text>
      <Box>
        {children}
      </Box>
    </Box>
  )
}