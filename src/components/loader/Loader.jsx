import { Spin } from "antd"
import "./Loader.css"
import { LoadingOutlined } from "@ant-design/icons"

const Loader = () => {
    return (
        <div className="ant-loading-page">
            <Spin />;
        </div>
    )
}

export default Loader