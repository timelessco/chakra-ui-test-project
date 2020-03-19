import React from "react";
import { Stack, ThemeProvider, MenuGroup, Flex } from "@chakra-ui/core";
import "./App.css";
import { FiImage } from "react-icons/fi";
import { TiLocationOutline } from "react-icons/ti";
import { IoIosPricetag } from "react-icons/io";
import { GoSettings } from "react-icons/go";
import { FaBuilding } from "react-icons/fa";

import DropDown from "./components/header.js";
function App() {
  return (
    <ThemeProvider>
      <Stack
        mt={10}
        maxW={1200}
        mx="auto"
        direction="row"
        justifyContent="space-between"
      >
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
             <DropDown
              leftIcon={GoSettings}
              menuItemName="MoreFilters"
            />
            
          </Flex>
        </MenuGroup>
        <DropDown  menuItemName="sort by Recommended" />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
