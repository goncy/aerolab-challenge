import * as React from "react";
import {Box, Stack, Grid, Text} from "@chakra-ui/react";

import {Product} from "../types";

import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

enum Filter {
  MostRecent = "Most recent",
  LowestPrice = "Lowest price",
  HighestPrice = "Highest price",
}

const FILTERS: Filter[] = [Filter.MostRecent, Filter.LowestPrice, Filter.HighestPrice];

const ProductsList: React.FC<Props> = ({products}) => {
  const [selectedFilter, setSelectedFilter] = React.useState<Filter>(Filter.MostRecent);
  const filteredProducts = React.useMemo(() => {
    switch (selectedFilter) {
      case Filter.HighestPrice: {
        return [...products].sort((a, b) => b.cost - a.cost);
      }

      case Filter.LowestPrice: {
        return [...products].sort((a, b) => a.cost - b.cost);
      }

      case Filter.MostRecent:
      default: {
        return products;
      }
    }
  }, [selectedFilter, products]);

  return (
    <Stack alignItems="center" spacing={6}>
      <Stack direction="row" spacing={4}>
        {FILTERS.map((filter) => (
          <Box
            key={filter}
            backgroundColor={filter === selectedFilter ? "primary.400" : "gray.100"}
            borderRadius={9999}
            color={filter === selectedFilter ? "white" : "gray.600"}
            cursor="pointer"
            fontWeight="500"
            paddingX={6}
            paddingY={2}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </Box>
        ))}
      </Stack>
      {Boolean(filteredProducts.length) ? (
        <Grid gap={6} templateColumns="repeat(auto-fill, minmax(256px, 1fr))" width="100%">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Grid>
      ) : (
        <Text backgroundColor="primary.100" borderRadius="md" color="primary.700" padding={4}>
          No hay productos
        </Text>
      )}
    </Stack>
  );
};

export default ProductsList;
