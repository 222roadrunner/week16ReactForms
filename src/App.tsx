import Sidebar from "./Sidebar"
import List from "./List"
import Header from "./Header"
import { useState } from "react"

export default function App() {
    const [list, setList] = useState(AlbumInfo)

    const addItem = () => {
        const newAlbum = {
            id: list.length ? list[list.length-1].id + 1 : 0,
            title: "album",
            artist: "artist"
        }

        setList([...list, newAlbum])
    }

    const deleteItem = (deleteID: number) => {
        setList(list.filter((album) => album.id !== deleteID))
    }

    const updateItem = (updateID: number, newTitle: string, newArtist: string) => {
        const updatedTitle = prompt("Input updated name") || newTitle;
        newTitle = updatedTitle
        const updatedArtist = prompt("Input updated artist") || newArtist;
        newArtist = updatedArtist
        setList(list.map (item => (
            item.id !== updateID ? item : {
                ...item, title: newTitle, artist: newArtist})))
    }

    return (
        <div>
            <Header/>
            <Sidebar addItem={addItem}/>
        <div>
            <List 
                list={list} 
                setList={setList} 
                deleteItem={deleteItem}
                updateItem={updateItem}/>
        </div>
    </div> )
}

const AlbumInfo = [
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