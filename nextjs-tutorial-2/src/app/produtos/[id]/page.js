"use client"

import { useParams } from "next/navigation";

function Produto() {

    const params = useParams();

    return (
        <>
            <h1>Produto {params.id}</h1>
        </>
    )
}

export default Produto;