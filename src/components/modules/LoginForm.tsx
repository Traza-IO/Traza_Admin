import {
  Box,
  Button,
  VStack,
  Heading,
  Input,
  Container
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Field } from "../ui/field";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <Container fluid>
      <Box maxW="lg" margin="auto">
        <Heading as="h1" size="lg" textAlign="center" mb={6}>
          Login
        </Heading>
        <VStack>
          <Field label="Email">
            <Input placeholder="me@example.com" />
          </Field>
          <Field label="Password">
            <Input type="password" placeholder="*******" />
          </Field>
          <Button colorScheme="blue" width="full" mt={4} onClick={handleSubmit}>
            Login
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default LoginForm;
