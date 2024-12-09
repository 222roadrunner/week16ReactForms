type SidebarProps = {
    newItem: () => void
}

export default function Sidebar({newItem}: SidebarProps) {
    return (
        <div className="row bg-secondary p-2">
        
            <div className="">
                <button
                    type="button" 
                    className="btn btn-success" 
                    onClick={newItem}>Add</button>
            </div>
        </div>
    )
}