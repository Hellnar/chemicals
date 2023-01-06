import Additive from "./Additive"
import { StyledAdditivesList } from "./styled.js"
import { additives } from "../assets/additives.js"

console.log(additives)

export default function AdditivesList() {
    return (
        <StyledAdditivesList className="additives-list">
            {additives.map(additive => {
                return <Additive data={additive} />
            })}
        </StyledAdditivesList>
    )
}
