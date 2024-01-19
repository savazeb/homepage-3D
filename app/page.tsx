import Spline3D from "@/components/Spline3D";

const Page = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ position: "fixed", width: "100%", display: "flex", justifyContent: "", alignItems: "center", left: "20px", top: "20px" }}>
        <img src="Sava Zeb.svg" width={70} />
      </div>
      <div className='title-container'>
        <div className='horizontal-scrolling-items'>
          <h1 className="horizontal-scrolling-items__item">
            Dev. Dev. Dev. Dev. Dev. Dev.
          </h1>
        </div>
      </div >
      <div className="message-container">
        <p style={{ margin: "auto", fontSize: "1rem", color: "white" }}>
          This Site Under Construction!
        </p>
      </div >
      <Spline3D style={{ width: "100vw", height: "100vh" }} scene="https://prod.spline.design/T8QK5ndfTRFaHj66/scene.splinecode" />
    </div>
  );
};

export default Page;
