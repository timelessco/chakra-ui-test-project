import React from "react";
import { Image, Heading, Stack, Text, Box } from "@chakra-ui/core";
import map from "lodash/map";
import { TiLocationOutline } from "react-icons/ti";
import Image1 from "../Images/Image1.jpeg";
import Image2 from "../Images/Image2.jpg";
import Image3 from "../Images/Image3.jpeg";
import Image4 from "../Images/Image4.jpg";
import Image5 from "../Images/Image5.jpg";
import Image6 from "../Images/Image6.jpeg";
import Image7 from "../Images/Image7.jpg";
import Image8 from "../Images/Image8.jpg";
import Image9 from "../Images/Image9.jpg";
import Image10 from "../Images/Image10.jpg";
import Image11 from "../Images/Image11.jpeg";
import Image12 from "../Images/Image12.jpg";
import Image13 from "../Images/Image13.jpeg";
import Image14 from "../Images/Image14.jpg";
import Image15 from "../Images/Image15.jpeg";
import Image16 from "../Images/Image16.jpg";
import Image17 from "../Images/Image17.jpg";
import Image18 from "../Images/Image18.jpg";
import Image19 from "../Images/Image19.jpg";
import Image20 from "../Images/Image20.jpg";
import Image21 from "../Images/Image21.jpg";
import Image22 from "../Images/Image22.jpeg";
import Image23 from "../Images/Image23.jpeg";
import Image24 from "../Images/Image24.jpg";
import Image25 from "../Images/Image25.jpg";
import Image26 from "../Images/Image26.jpg";
import Image27 from "../Images/Image27.jpg";
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
function Pagination(props) {
  return map(
    ImageJson.slice(props.offsetValue, props.limitValue),
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
  );
}

export default Pagination;
