import { SanityBlockContent } from "../types/root.types";
import { PortableText as NativePortableText } from "@portabletext/react";

export default function PortableText({ value }: { value: SanityBlockContent }) {
    return(
        <NativePortableText 
            value={value}
            components={{
                marks: {
                    code: ({ children }: { children: React.ReactNode }) => {
                        return <code className="code-tag">{children}</code>
                    }
                }
            }}
        />
    )
}