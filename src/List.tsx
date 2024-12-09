type Album = {
    id: number
    title: string
    artist: string
};

type ListProps = {
    list: Album[]
    setList: React.Dispatch<React.SetStateAction<Album[]>>
    deleteItem: (id: number) => void
    updateItem: (id: number, title: string, artist: string) => void
};

type AlbumNameProps = {
    name: Album
    deleteItem: () => void
    updateItem: () => void
};

export default function List({list, deleteItem, updateItem}: ListProps) {
    return (
        <ol>
            {list.map((name) => (
                <AlbumName
                    key={name.id}
                    name={name}
                    deleteItem={() => deleteItem(name.id)}
                    updateItem={() => updateItem(name.id, name.title, name.artist)}
                />))}
        </ol>        
    )
}

function AlbumName({name, deleteItem, updateItem}: AlbumNameProps) {
    return (
        <li>
            <div>
                {name.title} - {name.artist}
            </div>
            <div>
                <button 
                    type="button" 
                    className="btn btn-primary btn-sm me-2"
                    onClick={updateItem}>Update</button>
                <button 
                    type="button" 
                    className="btn btn-danger btn-sm me-2" 
                    onClick={deleteItem}>Delete</button>
            </div>
        </li>
    )
}