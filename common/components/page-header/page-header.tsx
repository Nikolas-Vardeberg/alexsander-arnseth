"use client"

const PageHeader = ({title, excerpt}: { title: string; excerpt: string; }) => {
    return(
        <div>
            <p>{title}</p>
            <p>{excerpt}</p>
        </div>
    )
}

export default PageHeader;