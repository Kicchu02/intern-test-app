import Canvas from "./Canvas";
import SlidesView from "./SlidesView";
import ToolsSpace from "./ToolsSpace";
import "./workspace.css";

const WorkSpace = () => {
  return (
    <div className="Work-space">
      {/* <h1>Work Space</h1> */}
      <ToolsSpace />
      <div className="body-workspace">
        <SlidesView className="side-slides-view" />
        <Canvas className="canvas" />
      </div>
    </div>
  );
};

export default WorkSpace;
