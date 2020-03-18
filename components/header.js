import React, {Component} from 'react';
import {
    Menu,
    MenuButton,
    MenuGroup,
    Stack,
    Icon,
    ThemeProvider,
    Box,
    Tag,
    Flex
  } from "@chakra-ui/core";

import { FiImage } from "react-icons/fi";
import { TiLocationOutline } from "react-icons/ti";
import { IoIosPricetag } from "react-icons/io";
import { GoSettings } from "react-icons/go";
import { FaBuilding } from "react-icons/fa";
class Header extends Component(){
    render(){
    return (
        <ThemeProvider>
        <Stack direction="row" justifyContent="space-between">
          <MenuGroup>
            <Flex>
              <Menu>
                <Flex alignItems="center">
                  <Box as={FiImage} pb={1}/>
                  <MenuButton border="none" pr={5} fontSize={14}>
                    Type
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
                      374
                    </Tag>
                    <Icon name="chevron-down" />
                  </MenuButton>
                </Flex>
              </Menu>
              <Menu>
                <Flex alignItems="center">
                  <Box as={TiLocationOutline} pb={1}/>
                  <MenuButton border="none" pr={5} fontSize={14}>
                    Location
                    <Tag
                      fontSize={9}
                      color="gray.500"
                      size="sm"
                      pr={0}
                      pl={3}
                      pb={0}
                      pt={0}
                      ml={1}
                      rounded="full"
                      variant="subtle"
                      variantColor="gray"
                    >
                      20
                    </Tag>
                    <Icon name="chevron-down" />
                  </MenuButton>
                </Flex>
              </Menu>
              <Menu>
                <Flex alignItems="center">
                  <Box as={FaBuilding} pr={1} pb={1}/>
                  <MenuButton border="none" pr={5} pl={0} fontSize={14}>
                    Apartment
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
                      374
                    </Tag>
                    <Icon name="chevron-down" />
                  </MenuButton>
                </Flex>
              </Menu>
              <Menu>
                <Flex alignItems="center">
                  <Box as={IoIosPricetag}  pb={1}   />
              <MenuButton border="none" pr={5} pl={1} fontSize={14}>
                    Tag
                    <Tag
                      fontSize={9}
                      color="gray.500"
                      size="sm"
                      pr={0}
                      pl={3}
                      pb={0}
                      pt={0}
                      ml={1}
                      rounded="full"
                      variant="subtle"
                      variantColor="gray"
                    >
                      178
                    </Tag>
                    <Icon name="chevron-down" />
                  </MenuButton>
                </Flex>
              </Menu>
              <Menu>
                <Flex alignItems="center">
                  <Box as={GoSettings} pr={1} pb={1}/>
                  <MenuButton border="none" fontSize={14}>
                    MoreFilters
                    <Icon pl={2} name="chevron-down" />
                  </MenuButton>
                </Flex>
              </Menu>
            </Flex>
          </MenuGroup>
          <Menu>
            <MenuButton border="none" direction="row" fontSize={14}>
              sort by Recomended
              <Icon name="chevron-down" />
            </MenuButton>
          </Menu>
        </Stack>
      </ThemeProvider>
    );}
  }
  export default Header;
