import styled from "styled-components"


export const StyledAdditivesList = styled.div`
    width: 100%;

    section {
        display: flex;
        align-items: flex-start;
        margin: 3rem 0;

        .class-content {
            width: 20%;
            padding: 1rem;

            .class-header {
                text-align: right;
                border-bottom: 2px solid #334155;

                .class-range {
                    font-weight: 700;
                    font-size: 1.5rem;
                }

                .class {
                    font-size: 1.4rem;
                }
            }

            .class-subranges {
                text-align: right;
                padding: 0.5rem 0;

                .subrange {
                    margin-bottom: 0.3rem;
                }
            }
        }

        .class-additives {
            width: 80%;
            padding: 1rem;
            border-left: 1px solid #cbd5e1;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            gap: 1rem;

            .additive {
                border-radius: 7px;
                border: 1px solid #cbd5e1;
                padding: 0.5rem;
                border-top: 7px solid #16a34a;

                .additive-head {
                    display: flex;
                    justify-content: space-between;

                    .additive-number {
                        font-weight: 700;
                        font-size: 1.2rem;
                    }
                }
            }

            .additive:hover {
                box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                cursor: pointer;
            }
        }
    }
`