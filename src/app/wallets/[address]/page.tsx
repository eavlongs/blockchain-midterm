import { Transaction } from "@/app/type";
import TransactionTable from "@/components/custom/TransactionTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const transaction: Transaction = {
    timestamp: "2021-10-10 12:00:00",
    fromAddress: "0x1234567890abcdef",
    toAddress: "0xabcdef1234567890",
    amount: 100.25,
    signature: "f13i1bnuihd134",
};

const transactions: Transaction[] = [
    transaction,
    transaction,
    transaction,
    transaction,
    transaction,
];

export default function Page({ params }: { params: { address: string } }) {
    return (
        <div className='mx-10 my-10'>
            <h1 className='text-3xl font-bold'>Wallet {params.address}</h1>
            <h2 className='text-xl font-bold mt-4'>Balance: $132.43</h2>
            <Link href={`/create-transaction/${params.address}`}>
                <Button className='mt-5'>Send</Button>
            </Link>
            <TransactionTable transactions={transactions} />
        </div>
    );
}
