import SearchBox from "./SearchBox";
import Suggestions from "./Suggestions";
import Trends from "./Trends";

function RightSide(){
    return <>
        <div className="rightContainer">
           <SearchBox></SearchBox> 
           <Trends></Trends>
           <Suggestions></Suggestions>
        </div>
    </>
}

export default RightSide;