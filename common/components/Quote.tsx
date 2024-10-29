import { IQuote } from "../types/blocks/quote.types"



const Quote = ({ _type, editor, quote }: IQuote) => {
    return(
        <div className="">
            <p>{quote}</p>
        </div>
    )
}

export default Quote