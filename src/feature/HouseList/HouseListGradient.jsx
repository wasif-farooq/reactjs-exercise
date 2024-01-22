export const HouseListGradient = ({ firstColor, secondColor }) => {
  return (
    <div
      className="gradient"
      style={{
        "--first": firstColor,
        "--second": secondColor,
      }}
    />
  )
}
