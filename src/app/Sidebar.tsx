import { Box } from 'grommet';
import Image from 'next/image';
import logo from '@/public/logo.png';
import Link from 'next/link';

const linkStyle = {
  color: '#333333',
  textDecoration: 'none',
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

export default function Sidebar() {
  return (
    <Box height={'100vh'} width={'12%'} align='start' justify='start' border={'right'} >
      <Image src={logo} alt='Logo' width={120} height={120} style={{ margin: '2rem auto' }}/>
      <Box align='start' justify='start' pad={'1rem'} gap={'1rem'}>
        <Link href={'/incomes'} style={linkStyle}>Entradas</Link>
        <Link href={'/categories'} style={linkStyle}>Categorias</Link>
      </Box>
    </Box>
  )
}