import AdditivesFilter from "../components/additives/AdditivesFilter"
import AdditivesList from "../components/additives/AdditivesList"
import { StyledAdditives } from "./styled.js"

export default function Additives() {
    return (
        <StyledAdditives>
            <AdditivesFilter />
            <AdditivesList />
        </StyledAdditives>
    )
}
