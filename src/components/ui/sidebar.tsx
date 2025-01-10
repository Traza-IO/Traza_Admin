import React from 'react';
import { Box, Flex, Icon, Link, Text, VStack } from '@chakra-ui/react';

interface SidebarProps {
  links: { name: string; icon: React.ElementType; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      left="0"
      top="0"
      h="100vh"
      w="240px"
      bg="teal.600"
      color="white"
      p={4}
      display="flex"
      flexDirection="column"
    >
      <Text fontSize="xl" fontWeight="bold" mb={6}>
        Mi Proyecto
      </Text>

      <VStack gap={4} align="start">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            _hover={{ textDecor: 'none', bg: 'teal.700' }}
            w="100%"
            p={2}
            borderRadius="md"
          >
            <Flex align="center" gap={2}>
              <>
                {/* <Icon as={link.icon} boxSize={5} /> */}
                <Text>{link.name}</Text>
              </>
            </Flex>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
