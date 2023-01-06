import { StyledAdditive } from "./styled.js"

export default function Additive({data}) {
    return (
        <StyledAdditive className="additive">
            <p className="additive-number">{data[0]}</p>
            <p className="additive-name">{data[1]}</p>
            {/* <p>{data[2]}</p> */}
        </StyledAdditive>
    )
}
