import Link from "next/link"

export default function Cart() {
    return(
        <div>
            <h1>게시글 페이지</h1>
            <Link href="/cart/payment">결제</Link>
        </div>
    )
}