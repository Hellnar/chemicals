import styled from "styled-components"


export const StyledAdditivesCategories = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5rem;

    .additive-category {
        border: 1px solid #cbd5e1;
        border-radius: 7px;
        padding: 0.5rem;

        .additive-nums {
            font-weight: 700;
        }

        .additive-cat-name {
            font-size: 12px;
        }
    }
`

export const StyledAdditivesList = styled.div`
    width: 70%;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
    padding: 1rem;
`

export const StyledAdditive = styled.div`
    border: 1px solid #cbd5e1;
    border-radius: 7px;
    padding: 0.5rem;
    width: 100%;
    max-width: 100%;
    height: 7rem;
    overflow: hidden;

    &:hover {
        cursor: pointer;
        border: 1px solid #16a34a;
    }

    .additive-number {
        font-weight: 700;
    }

    .additive-name {
        font-size: 12px;
    }
`