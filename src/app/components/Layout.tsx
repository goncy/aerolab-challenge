import React from "react";
import {Box, Center, Container, Flex, Stack, Image, Text} from "@chakra-ui/react";

import coin from "~/assets/icons/coin.svg";
import logo from "~/assets/logo.svg";
import {usePoints, useUser} from "~/user/hooks";

const Layout: React.FC = ({children}) => {
  const [points, addPoints] = usePoints();
  const user = useUser();

  return (
    <Flex backgroundColor="gray.100" direction="column" flex={1}>
      <Box backgroundColor="white" boxShadow="md">
        <Container maxWidth="6xl">
          <Stack
            alignItems="center"
            as="nav"
            direction="row"
            justifyContent="space-between"
            paddingY={3}
          >
            <Image height={8} src={logo} width={8} />
            <Stack alignItems="center" color="gray.500" direction="row" spacing={3}>
              <Text>{user.name}</Text>
              <Stack
                alignItems="center"
                backgroundColor="gray.100"
                borderRadius={9999}
                cursor="pointer"
                direction="row"
                paddingX={3}
                paddingY={2}
                onClick={() => addPoints(1000)}
              >
                <Text fontWeight="500">{points}</Text>
                <Image height={6} src={coin} width={6} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Center paddingY={6}>
        <Container maxWidth="6xl">{children}</Container>
      </Center>
    </Flex>
  );
};

export default Layout;
