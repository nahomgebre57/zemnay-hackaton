export default function BlogPage() {
  return (
    <div>
     
      <main style={{ margin: "20px 0" , paddingTop: "40px"}}>
        <iframe
          src="http://localhost:3000" // your blog local URL
          style={{ width: "100%", height: "100vh", border: "none" }}
        ></iframe>
      </main>

      
    </div>
  );
}
