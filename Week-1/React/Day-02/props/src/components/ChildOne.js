
import ChildTwo from "./ChildTwo";
function ChildOne(){
    let name="harshal";
return (
    <>
    <div>
        Child One
    </div>
    <ChildTwo name={name}/>
    </>
)
}

export  default ChildOne;