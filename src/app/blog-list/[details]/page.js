import BlogDetailsComponent from "@/components/blog/details";

async function fetchBlogDetails(blogId){
    const res = await fetch(`${process.env.WEB_URL}/api/blog/blog-details?id=${blogId}`,{
        method: 'GET',
        cache: 'no-store'
    })

    const data = await res.json()

    if(data?.success) return data.data

}

export default async function BlogDetails({params}){
    const {details} = params

    const blogDetails = await fetchBlogDetails(details)

    return <div>
        <BlogDetailsComponent blogDetails={blogDetails}/>
    </div>
}