import { useEffect, useState } from "react";

import Person from "../person";

import './index.css'

const Pagination = ({ list, numsPerPages }) => {

    const [pages, setPages] = useState([]);
    const [index, setIndex] = useState(0);
    const numsPages = Math.ceil(list.length / numsPerPages);

    useEffect(() => {
        setPages(new Array(numsPages).fill('')
            .map((_, i) => list.slice(i * numsPerPages, (i + 1) * numsPerPages)));
    },[list])

    const goToPage = (newIndex) => {
        setIndex(newIndex)
    }

    return (
        <section className="pagination">
            {pages.length > 0 &&
                pages[index].map((person) => (
                    <Person data={person} />)
                )}

            <div className="page-control">
                <button onClick={() => goToPage(0)}>&#60;&#60;</button>
                <button onClick={() => goToPage(index > 0 ? index - 1 : index)}>&#60;</button>
                <div>Page {index + 1} of {numsPages}</div>
                <button onClick={() => goToPage(index < numsPages - 1 ? index + 1 : index)}>&#62;</button>
                <button onClick={() => goToPage(numsPages - 1 )}>&#62;&#62;</button>
            </div>
        </section>

    )
}

export default Pagination;