import { Tabs } from "antd";
import "./DeliveryTime.css"
import dates from "./dates"

const DeliveryTime = () => {

    return (
        <div className="nav-pills">
            <Tabs items={dates} className="dates-tabs" tabBarGutter={12}></Tabs>
        </div>
    )
}

export default DeliveryTime