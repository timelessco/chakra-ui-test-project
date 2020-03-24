import React, { useReducer } from "react";
import { Stack, ThemeProvider, MenuGroup, Flex } from "@chakra-ui/core";
import "./App.css";
import { FiImage } from "react-icons/fi";
import { TiLocationOutline } from "react-icons/ti";
import { IoIosPricetag } from "react-icons/io";
import { GoSettings } from "react-icons/go";
import { FaBuilding } from "react-icons/fa";
import Pagination from "./components/pagination.js";
import DropDown from "./components/header.js";
import Image1 from "./Images/Image1.jpeg";
import Image2 from "./Images/Image2.jpg";
import Image3 from "./Images/Image3.jpeg";
import Image4 from "./Images/Image4.jpg";
import Image5 from "./Images/Image5.jpg";
import Image6 from "./Images/Image6.jpeg";
import Image7 from "./Images/Image7.jpg";
import Image8 from "./Images/Image8.jpg";
import Image9 from "./Images/Image9.jpg";
import Image10 from "./Images/Image10.jpg";
import Image11 from "./Images/Image11.jpeg";
import Image12 from "./Images/Image12.jpg";
import Image13 from "./Images/Image13.jpeg";
import Image14 from "./Images/Image14.jpg";
import Image15 from "./Images/Image15.jpeg";
import Image16 from "./Images/Image16.jpg";
import Image17 from "./Images/Image17.jpg";
import Image18 from "./Images/Image18.jpg";
import Image19 from "./Images/Image19.jpg";
import Image20 from "./Images/Image20.jpg";
import Image21 from "./Images/Image21.jpg";
import Image22 from "./Images/Image22.jpeg";
import Image23 from "./Images/Image23.jpeg";
import Image24 from "./Images/Image24.jpg";
import Image25 from "./Images/Image25.jpg";
import Image26 from "./Images/Image26.jpg";
import Image27 from "./Images/Image27.jpg";

const initialOffset = { count: 0 };
const initialLimit = { count: 9 };
const initialPageNumber = { count: 1 };
var numberClicked = 0;
const ImageJson = [
  { image: Image1, location: "Phoenix" },
  { image: Image2, location: "Sedona Ridge" },
  { image: Image3, location: "Phoenix" },
  { image: Image4, location: "Allegro" },
  { image: Image5, location: "Phoenix" },
  { image: Image6, location: "Phoenix" },
  { image: Image7, location: "Phoenix" },
  { image: Image8, location: "Sedona Ridge" },
  { image: Image9, location: "Allegro" },
  { image: Image10, location: "Allegro" },
  { image: Image11, location: "Phoenix" },
  { image: Image12, location: "Phoenix" },
  { image: Image13, location: "Phoenix" },
  { image: Image14, location: "Allegro" },
  { image: Image15, location: "Phoenix" },
  { image: Image16, location: "Sedona Ridge" },
  { image: Image17, location: "Phoenix" },
  { image: Image18, location: "Phoenix" },
  { image: Image19, location: "Sedona Ridge" },
  { image: Image20, location: "Sedona Ridge" },
  { image: Image21, location: "Sedona Ridge" },
  { image: Image22, location: "Sedona Ridge" },
  { image: Image23, location: "Phoenix" },
  { image: Image24, location: "Phoenix" },
  { image: Image25, location: "Phoenix" },
  { image: Image26, location: "Allegro" },
  { image: Image27, location: "Phoenix" },
  { image: Image1, location: "Phoenix" },
  { image: Image2, location: "Phoenix" },
  { image: Image3, location: "Phoenix" },
  { image: Image4, location: "Sedona Ridge" },
  { image: Image5, location: "Phoenix" },
  { image: Image6, location: "Phoenix" },
  { image: Image7, location: "Phoenix" },
  { image: Image8, location: "Phoenix" },
  { image: Image9, location: "Allegro" },
  { image: Image10, location: "Phoenix" },
  { image: Image11, location: "Phoenix" },
  { image: Image12, location: "Phoenix" },
  { image: Image13, location: "Phoenix" },
  { image: Image14, location: "Allegro" },
  { image: Image15, location: "Sedona Ridge" },
  { image: Image16, location: "Allegro" },
  { image: Image17, location: "Phoenix" },
  { image: Image18, location: "Phoenix" },
  { image: Image19, location: "Phoenix" },
  { image: Image20, location: "Phoenix" },
  { image: Image21, location: "Phoenix" },
  { image: Image22, location: "Phoenix" },
  { image: Image23, location: "Allegro" },
  { image: Image24, location: "Phoenix" },
  { image: Image25, location: "Sedona Ridge" },
  { image: Image26, location: "Sedona Ridge" },
  { image: Image27, location: "Phoenix" }
];
function App() {
  const [offsetValue, setOffsetValue] = useReducer(pagination, initialOffset);
  const [limitValue, setLimitValue] = useReducer(pagination, initialLimit);
  const [pageNumber, setPageNumber] = useReducer(pagination, initialPageNumber);
  function setClickedNumber(number) {
    numberClicked = number;
  }
  function pagination(state, action) {
    switch (action.type) {
      case "increment":
        if (state.count < ImageJson.length) {
          return { count: state.count + 9 };
        } else {
          return { count: state.count };
        }
      case "decrement":
        if (state.count !== 0 || state.count !== 9) {
          return { count: state.count - 9 };
        } else {
          return { count: state.count };
        }
      case "page increment":
        if (state.count < 6) {
          return { count: state.count + 1 };
        } else {
          return { count: state.count };
        }
      case "page decrement":
        if (state.count > 0) {
          return { count: state.count - 1 };
        } else {
          return { count: state.count };
        }
      case "number clicked offset":
        return { count: numberClicked * 9 };
      case "number clicked limit":
        return { count: (numberClicked + 1) * 9 };
      case "number clicked page":
        return { count: numberClicked + 1 };
      default:
        throw new Error();
    }
  }
  var offsetValues = 0;
  var limitValues = 0;
  if (offsetValue.count < initialOffset) {
    offsetValues = initialOffset;
    limitValues = initialLimit;
  } else if (offsetValue.count > ImageJson.length - 9) {
    offsetValues = ImageJson.length - 9;
    limitValues = ImageJson.length;
  } else {
    offsetValues = offsetValue.count;
    limitValues = limitValue.count;
  }
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

        <Pagination
          offsetValue={offsetValues} //offset
          limitValue={limitValues} //limit
          ImageJson={ImageJson} //json of images
          initialPageNumber={pageNumber} //initial page number
          setOffsetValue={setOffsetValue} //reducer function
          setPageNumber={setPageNumber} //reducer function
          setLimitValue={setLimitValue} // reducer function
          totalCount={6} //total page count
          maxStartRangeCount={2} //no. of pgs shown at the start
          maxEndRangeCount={2} //no. of pgs shown at the end
          setClickedNumber={setClickedNumber} //function to set the number clicked
        />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
