"use client"

export default function BlogDetailsComponent({blogDetails}){

    console.log("================================")
    console.log("blogDetails :" + blogDetails?.title)

    return <div>
        <p>{blogDetails?.title}</p>
        <p>{blogDetails?.description}</p>
    </div>
}