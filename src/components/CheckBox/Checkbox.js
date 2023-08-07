import { Checkbox } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
function CheckboxGrid(props) {
  return (
    <Checkbox
      icon={<LightbulbOutlinedIcon style={{ color: "red" }} />}
      checkedIcon={<LightbulbIcon style={{ color: "red" }} />}
      {...props}
    ></Checkbox>
  );
}
export default CheckboxGrid;
