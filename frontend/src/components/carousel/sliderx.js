import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper} from "@mui/material";

function Sliderx() {
  var items = [
    {
      name: "Oppenheimer",
      imgurl: "https://www.oppenheimermovie.com/meta/meta-v3-en_US.jpg",
    },
    {
      name: "Jawaan",
      imgurl:
        "https://i.pinimg.com/564x/cd/85/06/cd8506dca035ffce5bd9fe259e45d2c4.jpg",
    },
    {
      name: "Mission Impossible",
      imgurl:
        "https://i.pinimg.com/564x/75/12/4d/75124d9beb051446288c17eff77a6342.jpg",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper width="400px" height="50vh" sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={props.item.imgurl}
        alt={props.item.name}
        width="1500px"
        height="425px"
      />
    </Paper>
  );
}

export default Sliderx;
