import SidebarInput from "./SidebarInput"
import PlainButton from "./PlainButton"

export default function Sidebar() {
    return (
        <div className="row bg-secondary p-2">
            <div className="col-2">
                <PlainButton theme={"btn btn-success"} children={"Add"} onClick={() => alert("Content Added")}/>
            </div>
            <div className="col-10">
                <SidebarInput/>
            </div>
        </div>
    )
}