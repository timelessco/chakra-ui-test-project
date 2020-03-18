import React from "react";
import {
  Menu,
  MenuButton,
  MenuGroup,
  Stack,
  Icon,
  Text,
  Box,
  Tag,
  Flex
} from "@chakra-ui/core";

function EachMenuItem(props) {
  return (
        
            <Menu>
              <Flex alignItems="center">
                {props.leftIcon?(<Box as={props.leftIcon} pb={1} />):(<> </>)}
                <MenuButton border="none" pr={8} fontSize={14}>
                  {props.menuItemName}
                 { props.TagNumber>0?(<Tag
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
                 </Tag>):(<> </>)}
                  <Icon name="chevron-down" />
                </MenuButton>
              </Flex>
            </Menu>
       
  );
}

export default EachMenuItem;
