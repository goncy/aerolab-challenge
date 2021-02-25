import React from "react";
import {Box, Stack, Text, Image, Center, Divider, Button} from "@chakra-ui/react";

import {Product} from "../types";
import coin from "~/assets/icons/coin.svg";
import {usePoints, useRedeem} from "~/user/hooks";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({product}) => {
  const [points] = usePoints();
  const redeem = useRedeem();
  const canBuy = product.cost <= points;

  return (
    <Box backgroundColor="white" borderRadius="sm" boxShadow="md" padding={6} position="relative">
      <Stack spacing={3}>
        <Stack direction="row" spacing={1}>
          <Image src={coin} width={6} />
          <Text fontSize="sm" fontWeight="500">
            {product.cost}
          </Text>
        </Stack>
        <Center>
          <Image objectFit="contain" src={product.img.url} width={64} />
        </Center>
        <Divider />
        <Stack alignItems="flex-start" spacing={0}>
          <Text color="gray.500" fontSize="sm">
            {product.category}
          </Text>
          <Text fontWeight="500">{product.name}</Text>
        </Stack>
        <Button
          colorScheme="primary"
          fontSize="sm"
          isDisabled={!canBuy}
          onClick={() => redeem(product)}
        >
          {canBuy ? `Redeem for ${product.cost}` : `Missing ${product.cost - points} points`}
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductCard;
