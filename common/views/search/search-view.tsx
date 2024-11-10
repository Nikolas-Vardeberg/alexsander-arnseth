"use client"

import { SearchIcon } from "lucide-react";
import { useState } from "react";

export default function SearchView() {
    const [searchedQuery, setSearchedQuery] = useState('');

    const [query, setQuery] = useState(searchedQuery);

    const handleSearch = () => {

    }

    return(
        <>
            <div className="flex flex-col">
                <div className="mx-auto w-full container grid grid-cols-12 px-4 sm:px-5 py-10 pt-20">
                    <div className="col-span-12 md:col-span-10 md:col-start-2">
                        <h2 className='text-black text-xl underline mb-20'>Hva leter du etter?</h2>
                        <div className='flex w-full items-center h-12 border border-primary-dark bg-white overflow-hidden group'>
                            <SearchIcon  className="mx-2 text-lg text-black size-4"/>
                            <input
                                className='border-none w-full outline-none h-auto'
                                placeholder="Søk..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleSearch();
                                }}
                            />

                            <button
                                type='button'
                                onClick={handleSearch}
                                className='flex h-full bg-primary p-4 justify-center items-center text-primary-dark hover:bg-secondary-pink'
                            >
                                Søk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}