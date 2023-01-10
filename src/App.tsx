import AdditivesList from "./components/AdditivesList"
import AdditivesCategories from "./components/AdditivesCategories"

function App() {

    return (
        <div className="App">
            <h1>Food additives</h1>
            <AdditivesCategories />
            <AdditivesList />
        </div>
    )
}

export default App
