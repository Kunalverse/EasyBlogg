import BlogListComponent from "@/components/blog/list";


async function fetchAllBlogs(){
    const response = await fetch(`${process.env.WEB_URL}/api/blog/get-all-blogs`, {
        method: 'GET',
        cache: "no-store"
    })

    const result = await response.json()

    if(result?.success) return result.data
}

export default async function BlogList(){

    const getAllBlogs = await fetchAllBlogs()

    return <div>
        <BlogListComponent getAllBlogs={getAllBlogs}/>
    </div>
}