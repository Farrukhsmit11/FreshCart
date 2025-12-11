import { Spin } from "antd"
import "./Loader.css"
import { LoadingOutlined } from "@ant-design/icons"

const Loader = () => {
    return (
        <div className="ant-loading-page">
            <Spin indicator={<LoadingOutlined className="loading-icon" spin />} tip= "loading please wait" size="large" />
        </div>
    )
}

export default Loader