import Articles from "../components/Articles";
function News() {
  return (
    <>
      <div className="bg-secondary">
        <div className="container">
          <h1 className="text-center bg-body-secondary">Portal Berita</h1>
          {/* <FSearch /> */}
          {/* <Boxsearch /> */}
        </div>
        <div className="container">
          <div className="row">
            <Articles />
          </div>
        </div>
      </div>
    </>
  );
}
export default News;
