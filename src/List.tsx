import PlainButton from "./PlainButton"

const AlbumInfo =[
    {
        id: 1,
        title: "Paid Salvation",
        artist: "A. Swayze & the Ghosts"
    },
    {
        id: 2,
        title: "Life of Leisure",
        artist: "Washed Out"
    },
    {
        id: 3,
        title: "Neotraditional",
        artist: "MX vs. The Railroad Industry"
    },
    {
        id: 4,
        title: "Drifter",
        artist: "Young Prisms"
    },
    {
        id: 5,
        title: "Home Movies",
        artist: "Vivienne Eastwood"
    },
]

export default function List() {
    return (
        <ol>
            {AlbumInfo.map(name => <AlbumName name={name}/>)}
        </ol>        
    )
}

function AlbumName({name}: {name: {id: number, title: string, artist: string}}) {
    return (
        <li>
            <div>
                {name.title} - {name.artist}
            </div>
            <PlainButton theme={"btn btn-primary btn-sm me-2"} children={"Update"} onClick={() => alert("Content Modified")}/>
            <PlainButton theme={"btn btn-danger btn-sm me-2"} children={"Delete"} onClick={() => alert("Content Deleted")}/>
        </li>
    )
}