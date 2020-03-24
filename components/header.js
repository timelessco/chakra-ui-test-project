import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  Icon,
  Box,
  Tag,
  Flex,
  MenuList,
  Button,
  Input,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/core";
import map from "lodash/map";
import indexOf from "lodash/indexOf";
import remove from "lodash/remove";
function DropDown(props) {
  const dropDownArray = ["Apartment", "Corporate", "Floorplan", "Photo"];
  const [selectedArray, setSelectedArray] = useState([]);
  const checkboxClicked = selectedItem => {
    if (indexOf(selectedArray, selectedItem) === -1) {
      setSelectedArray([...selectedArray, selectedItem]);
    } else {
      setSelectedArray(
        remove(selectedArray, item => {
          return selectedItem !== item;
        })
      );
    }
  };
  return (
    <Menu>
      <Flex alignItems="center">
        {props.leftIcon ? <Box as={props.leftIcon} pb={1} /> : <> </>}
        <MenuButton border="none" pr={8} fontSize={14} outline="none">
          {props.menuItemName}
          {props.TagNumber > 0 ? (
            <Tag
              fontSize={9}
              color="gray.500"
              size="sm"
              pr={0}
              pb={0}
              pt={0}
              ml={1}
              rounded="full"
              variant="subtle"
              variantColor="gray"
            >
              {props.TagNumber}
            </Tag>
          ) : (
            <> </>
          )}
          <Icon name="chevron-down" />
        </MenuButton>
      </Flex>
      <MenuList>
        <InputGroup size="sm" mx={2}>
          <InputLeftElement
            children={<Icon name="search" color="gray.400" pl={6} />}
          />
          <Input
            maxH="20"
            type="text"
            placeholder="Search Types..."
            border="none"
            focusBorderColor="white"
            bg="gray.100"
            fontSize={14}
            pl={12}
            borderRadius={3}
          />
        </InputGroup>
        {map(dropDownArray, (item, index) => {
          return (
            <Flex
              key={index}
              justifyContent="left"
              onClick={() => {
                checkboxClicked(item);
              }}
              borderRadius={3}
              py={2}
              pl={5}
              mx={2}
              my={1}
              bg={
                indexOf(selectedArray, item) === -1 ? "white.200" : "gray.100"
              }
            >
              <Button
                variant="outline"
                size="3px"
                variantColor=""
                maxW="3px"
                alignSelf="stretch"
                bg={
                  indexOf(selectedArray, item) === -1 ? "white.100" : "blue.300"
                }
              >
                <Icon
                  opacity={indexOf(selectedArray, item) === -1 ? 0 : 100}
                  name="check"
                  size="9px"
                  color="white"
                ></Icon>
              </Button>
              <Box ml={5} fontSize={14} cursor="pointer">
                {item}
              </Box>
            </Flex>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default DropDown;
