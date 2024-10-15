import { useState } from "react";
import {useLoaderData, useParams} from "react-router-dom";

export default function ProductPage() {
    const params = useParams();
    const data = useLoaderData();
    return (
        <>
            Hello, you reached the page for {params.type}!
        </>
    )
}