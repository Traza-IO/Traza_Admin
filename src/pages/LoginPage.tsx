import { Flex } from '@chakra-ui/react';
import LoginForm from '../components/modules/LoginForm';
// import LoginButton from '../components/general/LoginButton';

const LoginPage: React.FC = () => {
  return (
    <Flex
      align="center"
      justify="center"
      minH="100vh"
      bgGradient="linear(to-r, blue.50, blue.100)"
    >
      <LoginForm />
      {/* <LoginButton /> */}
    </Flex>
  );
};

export default LoginPage;
