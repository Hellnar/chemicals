import { StyledAdditivesCategories } from "./styled.js"

export default function AdditivesCategories() {

    const categories = [
        {num: "E100-E199", name: "Colors"},
        {num: "E200-E299", name: "Preservatives"},
        {num: "E300-E399", name: "Antioxidants and acidity regulators"},
        {num: "E400-E499", name: "Thickeners, stabilisers and emulsifiers"},
        {num: "E500-E599", name: "pH regulators and anti-caking agents"},
        {num: "E600-E699", name: "Flavour enhancers"},
        {num: "E700-E799", name: "Antibiotics"},
        {num: "E900-E999", name: "Glazing agents, gases and sweeteners"},
        {num: "E1000-E1599", name: "Additional additives"}
    ]

    return (
        <StyledAdditivesCategories className="additives-categories">
            {categories.map((category, index) => {
                return (
                    <div key={index} className="additive-category">
                        <p className="additive-nums">{category.num}</p>
                        <p className="additive-cat-name">{category.name}</p>
                    </div>
                )
            })}
        </StyledAdditivesCategories>
    )
}
