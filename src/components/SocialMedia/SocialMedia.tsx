import { Image } from '@mantine/core';
import JustinChen from '/Users/joshchen/Documents/SFU/JustinChen/src/images/justinchen.png';

export function ImageWindow() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50%' }}>
      <Image radius="md" w="auto" h="auto" src={JustinChen} alt="My image" />
    </div>
  );
}
