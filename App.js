import React, { useState } from "react";
import {
  Stack,
  ThemeProvider,
  MenuGroup,
  Flex,
  Button,
  Text,
  IconButton
} from "@chakra-ui/core";
import "./App.css";
import map from "lodash/map";
import { FiImage } from "react-icons/fi";
import { TiLocationOutline } from "react-icons/ti";
import { IoIosPricetag } from "react-icons/io";
import { GoSettings } from "react-icons/go";
import { FaBuilding } from "react-icons/fa";
import Pagination from "./components/pagination.js";
import DropDown from "./components/header.js";
function App() {
  const [offsetValue, setOffsetValue] = useState(0);
  const [limitValue, setLimitValue] = useState(9);
  const [pageNumber, setPageNumber] = useState(1);
  const paginationButtonClick = numberClicked => {
    setOffsetValue(numberClicked * 9);
    setLimitValue((numberClicked + 1) * 9);
    setPageNumber(numberClicked + 1);
  };
  const previousButtonClick = () => {
    if (offsetValue !== 0) {
      setOffsetValue(offsetValue - 9);
      setLimitValue(limitValue - 9);
      setPageNumber(pageNumber - 1);
    }
  };
  const nextButtonClick = () => {
    if (pageNumber < 6) {
      setOffsetValue(offsetValue + 9);
      setLimitValue(limitValue + 9);
      setPageNumber(pageNumber + 1);
    }
  };
  return (
    <ThemeProvider>
      <Stack maxW={1300} mt={10} mx="auto">
        <Stack direction="row" justifyContent="space-between">
          <MenuGroup>
            <Flex>
              <DropDown
                leftIcon={FiImage}
                menuItemName="Type"
                TagNumber={374}
              />
              <DropDown
                leftIcon={TiLocationOutline}
                menuItemName="Location"
                TagNumber={20}
              />
              <DropDown
                leftIcon={FaBuilding}
                menuItemName="Apartment"
                TagNumber={374}
              />
              <DropDown
                leftIcon={IoIosPricetag}
                menuItemName="Tag"
                TagNumber={178}
              />
              <DropDown leftIcon={GoSettings} menuItemName="MoreFilters" />
            </Flex>
          </MenuGroup>
          <DropDown menuItemName="sort by Recommended" />
        </Stack>
        <Flex
          direction="row"
          flexWrap="wrap"
          pt={5}
          justifyContent="space-between"
        >
          <Pagination offsetValue={offsetValue} limitValue={limitValue} />
        </Flex>
        <Text fontSize={15} color="gray.700">
          Page {pageNumber} of 6
        </Text>
        <Flex justifyContent="center" pb={3}>
          <IconButton
            aria-label="previous"
            icon="chevron-left"
            size="sm"
            onClick={previousButtonClick}
            mr={2}
            borderWidth={0.5}
            _focus={{ outline: "none" }}
            _hover={{ bg: "none" }}
          ></IconButton>
          {map([1, 2, 3, 4, 5, 6], (item, index) => {
            return (
              <Button
                onClick={() => paginationButtonClick(index)}
                size="sm"
                mr={2}
                borderWidth={0.5}
                bg={pageNumber === index + 1 ? "blue.300" : "white.100"}
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
            onClick={nextButtonClick}
            borderWidth={0.5}
            _focus={{ outline: "none" }}
            _hover={{ bg: "none" }}
          ></IconButton>
        </Flex>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
