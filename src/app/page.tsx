import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Block } from "./type";

const block: Block = {
    timestamp: "2021-10-10 12:00:00",
    data: "Hello, world!",
    hash: "0013901va89bnf91313",
    previousHash: "0xfjdlskafioafjafv",
    nonce: 20413,
};

const blocks: Block[] = [block, block, block, block, block];

export default function Page() {
    return (
        <div className='mx-10 my-10'>
            <h1 className='text-3xl font-bold'>Home Page</h1>
            <div className='rounded-md border my-5'>
                <Table className='mt-5'>
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
                                    colSpan={4}
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
