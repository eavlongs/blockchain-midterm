"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useEffect, useState } from "react";
import CreateGenesisBlock from "./CreateGenesisBlock";
import Verification from "./Verification";
import { Block } from "./type";

async function getBlocks(): Promise<Block[]> {
    const response = await fetch("/api/blocks");
    const data = await response.json();
    return data.blocks;
}

export default function Page() {
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [hasFetched, setHasFetched] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const fetchedBlocks = await getBlocks();
            setBlocks(fetchedBlocks);
            setHasFetched(true);
        }
        fetchData();
    }, []);

    return (
        <div className='mx-10 my-10'>
            <h1 className='text-3xl font-bold'>Home Page</h1>
            <div className='mt-4 flex space-x-4'>
                <Verification />
                <CreateGenesisBlock
                    isVisible={hasFetched && blocks.length === 0}
                    onCreate={(block) => setBlocks([{ ...block }])}
                />
            </div>
            <div className='rounded-md border my-5'>
                <Table className='mt-5 caption-top'>
                    <TableCaption className='font-semibold text-black text-lg'>
                        Blocks
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Timestamp</TableHead>
                            <TableHead className='max-w-[300px] break-words'>
                                Hash
                            </TableHead>
                            <TableHead>Nonce</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {blocks.length !== 0 ? (
                            blocks.map((block, i) => {
                                return (
                                    // change key to block.hash
                                    <TableRow key={i}>
                                        <TableCell>
                                            <Link href={`/block/${block.hash}`}>
                                                {block.timestamp}
                                            </Link>
                                        </TableCell>
                                        <TableCell className='max-w-[450px] truncate'>
                                            <Link href={`/block/${block.hash}`}>
                                                {block.hash}
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Link href={`/block/${block.hash}`}>
                                                {block.nonce}
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={3}
                                    className='h-24 text-center'
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
