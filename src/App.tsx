import Sidebar from "./Sidebar"
import List from "./List"
import Header from "./Header"

export default function App() {
    return <div>
        <Header/>
        <Sidebar/>
        <div>
            <List/>
        </div>
    </div>
}