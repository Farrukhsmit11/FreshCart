import { Row, Select } from "antd"
import "./PageHeader.css"
import languages from "./languages"

const PageHeader = () => {
    return (
        <div className="header-wrapper-main">
            <div className="section-container">
                <Row justify="space-between" align="middle">
                    <div className="header-wrapper-left">
                        <h1 className="page-heading">Super Value Deals - Save more with coupons
                        </h1>
                    </div>

                    <div className="header-wrapper-right">
                        <Select
                            bordered={false}
                            options={languages}
                            className="language-select"
                            defaultValue="en"
                        >
                        </Select>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default PageHeader