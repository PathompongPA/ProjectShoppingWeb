import ReactLoading from "react-loading";
import "./ComLoading.css";
export default function ComLoading() {
  return (
    <div id="box-loading">
      <p style={{ textAlign: "center", marginBottom: "10px" }}>
        loading
        <ReactLoading type="spin" color="000000"></ReactLoading>
      </p>
    </div>
  );
}
