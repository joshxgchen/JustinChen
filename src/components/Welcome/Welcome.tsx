import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        {' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'black' }}>
          Justin Chen
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl" fw={700}>My name's Justin Chen.</Text>
      <Text c="dimmed" ta="center" size="lg" maw={6000} mx="auto" mt="xl">
        I'm a founder, leader, proud husband, and work everyday to grow. <br></br>I have been inspired by amazing mentors in my life to live a life of purpose and serve others.<br></br> I wish to elevate others and be a "kingmaker" not a "king". 
  
      </Text>
      <Text c="dimmed" ta="center" size="lg" maw={6000} mx="auto" mt="xl">
       
To get started and connect, please add me on: {' '}
  
      </Text>
      
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl" fw={700}>
       
        <Anchor href="https://www.linkedin.com/in/xycjustin/" size="lg" fw={700}>
          Linkedin 
        </Anchor>
  
      </Text>
    </>
  );
}
