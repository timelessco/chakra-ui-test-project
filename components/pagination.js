import React from "react";
import {
  Image,
  Heading,
  Stack,
  Text,
  Box,
  Flex,
  IconButton,
  Button
} from "@chakra-ui/core";
import map from "lodash/map";
import { TiLocationOutline } from "react-icons/ti";

function Pagination(props) {
  var i;
  const pageNumbers = [];
  for (i = 1; i < props.totalCount + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <Flex
        direction="row"
        flexWrap="wrap"
        pt={5}
        justifyContent="space-between"
      >
        {map(
          props.ImageJson.slice(props.offsetValue, props.limitValue),
          (item, index) => {
            return (
              <Stack direction="column" justifyContent="center" key={index}>
                <Image
                  width={302}
                  height={185}
                  src={item.image}
                  alt=""
                  pb={0}
                  rounded={6}
                />
                <Heading
                  pt={2}
                  my={0}
                  pb={1}
                  lineHeight={0.3}
                  as="h6"
                  size="xs"
                  color="gray.700"
                >
                  Alanza Place
                </Heading>
                <Text p={0} color="gray.500" fontSize={12} m={0} pb={5}>
                  <Box
                    as={TiLocationOutline}
                    size="15px"
                    pr={1}
                    color="gray.400"
                    verticalAlign="bottom"
                  />
                  {item.location}
                </Text>
              </Stack>
            );
          }
        )}
      </Flex>
      <Text fontSize={15} color="gray.700">
        Page {props.initialPageNumber.count} of 6
      </Text>

      <Flex justifyContent="center" pb={3}>
        <IconButton
          aria-label="previous"
          icon="chevron-left"
          size="sm"
          onClick={() => {
            props.setOffsetValue({ type: "decrement" });
            props.setLimitValue({ type: "decrement" });
            props.setPageNumber({ type: "page decrement" });
          }}
          mr={2}
          bg="gray.300"
          visibility={props.initialPageNumber.count <= 1 ? "hidden" : "visible"}
          _focus={{ outline: "none", bg: "none" }}
          _hover={{ bg: "none" }}
        ></IconButton>
        {map(pageNumbers, (item, index) => {
          return (
            <Button
              onClick={() => {
                props.setClickedNumber(index);
                props.setLimitValue({ type: "number clicked limit" });
                props.setOffsetValue({ type: "number clicked offset" });
                props.setPageNumber({ type: "number clicked page" });
              }}
              size="sm"
              mr={2}
              borderWidth={0.5}
              bg={
                props.initialPageNumber.count === index + 1
                  ? "blue.300"
                  : "white.100"
              }
              _focus={{ outline: "none" }}
              _hover={{ bg: "none" }}
            >
              {item}
            </Button>
          );
        })}
        <IconButton
          aria-label="next"
          icon="chevron-right"
          size="sm"
          mr={2}
          onClick={() => {
            props.setLimitValue({ type: "increment" });
            props.setOffsetValue({ type: "increment" });
            props.setPageNumber({ type: "page increment" });
          }}
          bg="gray.300"
          visibility={props.initialPageNumber.count >= 6 ? "hidden" : "visible"}
          _focus={{ outline: "none" }}
          _hover={{ bg: "none" }}
        ></IconButton>
      </Flex>
    </>
  );
}

export default Pagination;
