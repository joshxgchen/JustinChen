import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ImageWindow } from '@/components/ImageWindow/ImageWindow';

export function HomePage() {
  return (
    <>
      <Welcome />


      <ColorSchemeToggle />
      <ImageWindow />

  
    </>
  );
}
