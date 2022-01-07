import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen() {
    return(
        <div id="kitchen">
            <Oven/>
            <Sink/>
          <h1 id="kHeading"> Kitchen</h1>  
        </div>
    )
}

export default Kitchen;