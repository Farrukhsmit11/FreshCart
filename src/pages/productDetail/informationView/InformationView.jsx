import { Col, Descriptions } from "antd"
import "./InformationView.css"

const InformationView = ({ product }) => {
    return (
        <>
            <div className="information-view-header">
                <h3>Details</h3>
            </div>

            <Descriptions
                column={1}
                bordered
                size="middle"
            >
                <Descriptions.Item
                    label="Brand"
                >
                    {product?.brand}

                </Descriptions.Item>

                <Descriptions.Item
                    label="Weight"
                >
                    {product?.weight}

                </Descriptions.Item>

                <Descriptions.Item
                    label="warrantyInformation"
                >
                    {product?.warrantyInformation}

                </Descriptions.Item>

                <Descriptions.Item
                    label="returnPolicy"
                >
                    {product?.returnPolicy}

                </Descriptions.Item>

            </Descriptions>
        </>

    )
}

export default InformationView