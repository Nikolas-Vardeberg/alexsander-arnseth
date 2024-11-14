import type { Blocks as BlockType } from '@/common/types/blocks/blocks.types';
import { clsx } from '@/common/utils/clsx';
import Quote from './Quote';
import Promotion from './Promotion';

export const RenderBlock = ({ block, k: key }: { block: BlockType; k: number }) => {
    switch (block._type) {
        case 'quote':
            return <Quote key={key} {...block} />;

        case 'promotion':
            return(
                <div className='mx-auto w-full max-w-[1280px] px-4 sm:px-5'>
                    <Promotion key={key} {...block} />
                </div>
            );

        case "transportBlocks": 
            return(
                <pre>{JSON.stringify(block, undefined, 2)}</pre>
            )
        
        default: {
            //biome-ignore lint/suspicious/noExplicitAny: <explanation>
            const data = block as any;
            console.warn(`Unknown block type "${data._type}"`);

            return(
                <div key={key}>
                    <p>Unknown block type "${data._type ?? "None"}"</p>
                    {process.env.NODE_ENV === "development" && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
                </div>
            )
        }
    }
}

const Blocks = ({ blocks }: { blocks: BlockType[] }) => {
    return(
        <div className={clsx("flex flex-col")}>
            {blocks?.map((block, i) => (
                <RenderBlock key={`${block._key}-${i}`} block={block} k={i} />
            ))}
        </div>
    )
}



export default Blocks