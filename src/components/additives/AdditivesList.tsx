import { additives } from "../../assets/additives.js"
import { StyledAdditivesList } from "../styled.js"

export default function AdditivesList() {
    console.log(additives)

    return (
        <StyledAdditivesList>
            {additives.map(additiveClass => {
                return (
                    <section className="additive-class">
                        <div className="class-content">
                            <div className="class-header">
                                <p className="class-range">{additiveClass.range}</p>
                                <p className="class">{additiveClass.class}</p>
                            </div>
                            <div className="class-subranges">
                                {additiveClass.subranges.map(range => {
                                    return (
                                        <div className="subrange">{`${range[1]} - ${range[0]}`}</div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="class-additives">
                            {additiveClass.additives.map(additive => {
                                return (
                                    <div className="additive">
                                        <div className="additive-head">
                                            <div className="additive-number">{additive.number}</div>
                                            <div className="additive-origins">
                                                O 0 o
                                            </div>
                                        </div>
                                        <div className="additive-name">{additive.name}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledAdditivesList>
    )
}
