import { Box } from "@chakra-ui/react";
import React from "react";

const RenderIndicator = (
  onClickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
  isSelected: boolean,
  index: number,
  label: string
) => {
  const defStyle = {
    marginLeft: 20,
    cursor: "pointer",
    backgroundColor: "#8D7B68",
    display: "inline-block",
    height: 15,
    width: 15,
    borderRadius: "100px",
  };
  const style = isSelected
    ? { ...defStyle, height: 25, width: 25 }
    : { ...defStyle };
  return (
    <div
      style={style}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      key={index}
      role="button"
      tabIndex={0}
      aria-label={`${label} ${index + 1}`}
    ></div>
  );
  return (
    <Box
      marginLeft={"20"}
      cursor={"pointer"}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      bgColor={"brand.900"}
      display={"inline"}
      //verticalAlign={"top"}
      key={index}
      role="button"
      tabIndex={0}
      aria-label={`${label} ${index + 1}`}
      boxSize={isSelected ? 5 : 3}
      borderRadius={"full"}
    />
  );
};

export default RenderIndicator;
