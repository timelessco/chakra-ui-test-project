import React, { useState } from "react";
import {
  Stack,
  ThemeProvider,
  MenuGroup,
  Flex,
  Button,
  Text
} from "@chakra-ui/core";
import "./App.css";
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
  const nextButtonClick = () => {
    if (limitValue < 54) {
      setOffsetValue(offsetValue => offsetValue + 9);
      setLimitValue(limitValue => limitValue + 9);
      setPageNumber(pageNumber + 1);
    } else {
      setOffsetValue(54 - 9);
      setLimitValue(54);
      setPageNumber(6);
    }
  };
  const prevButtonClick = () => {
    if (offsetValue > 0) {
      setOffsetValue(offsetValue => offsetValue - 9);
      setLimitValue(limitValue => limitValue - 9);
      setPageNumber(pageNumber - 1);
    } else {
      setOffsetValue(0);
      setLimitValue(9);
      setPageNumber(1);
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
          <Button
            onClick={prevButtonClick}
            size="sm"
            mr={2}
            _focus={{ outline: "none", boxShadow: "1px 1px 1px 1px" }}
          >
            prev
          </Button>
          <Button
            onClick={nextButtonClick}
            size="sm"
            _focus={{ outline: "none", boxShadow: "1px 1px 1px 1px" }}
          >
            next
          </Button>
        </Flex>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
