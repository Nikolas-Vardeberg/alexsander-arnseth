import { IQuote } from "../types/blocks/quote.types"



const Quote = ({ _type, editor, quote }: IQuote) => {
    return(
        <div>
            <p>{quote}</p>
        </div>
    )
}

export default Quote