import SidebarInput from "./SidebarInput"
import PlainButton from "./PlainButton"

type SidebarProps = {
    addItem: () => void
}

export default function Sidebar({addItem}: SidebarProps) {
    return (
        <div className="row bg-secondary p-2">
            <div className="col-2">
                <PlainButton 
                    theme={"btn btn-success"} 
                    children={"Add"} 
                    onClick={addItem}
                />
            </div>
            <div className="col-10">
                <SidebarInput/>
            </div>
        </div>
    )
}