import { HomePage } from "@/common/types/pages/home.types";


const HomePageView = ({ homepage}: { homepage: HomePage}) => {
    return(
        <>
            <pre>
                {JSON.stringify(homepage, undefined, 2)}
            </pre>
        </>
    )
}

export default HomePageView;