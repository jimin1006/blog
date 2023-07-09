import Link from "next/link"
import { connectDB } from "@/util/database"
import { MongoClient } from 'mongodb'

export default async function Home() {
  //DB에서 데이터 꺼내오기
  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()

  return (
    <div className="list-bg">
      {
        result.map( (a,i)=> {
          return (
            <div className="list-item" key={i}>
              <Link href={'/detail/' + result[i]._id}><h4>{a.title}</h4></Link>
              <p>1월 1일</p>
            </div>
          )
        })
      }
    </div>
  )
}
