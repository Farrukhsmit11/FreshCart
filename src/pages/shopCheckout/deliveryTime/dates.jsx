import DeliverySlots from "./deliverySlots.jsx/DeliverySlots";

export const dates = [
    {
        key: "1",
        label: (
            <div>
                <div>Today</div>
                <div>
                    <p className="delivery-date">Mar 15</p>
                </div>
            </div>
        ),

        children: <DeliverySlots />
    },
    {
        key: "2",
        label: (
            <div>
                <div>Mon</div>
                <div>
                    <p className="delivery-date">Mar 16</p>
                </div>
            </div>
        ),
        children: <DeliverySlots />

    },
    {
        key: "3",
        label: (
            <div className="nav-pills-header">
                <div>Tue</div>
                <div>
                    <p className="delivery-date">Mar 17</p>
                </div>
            </div>
        ),

        children: <DeliverySlots />
    },
    {
        key: "4",
        label: (
            <div>
                <div>Wed</div>
                <div>
                    <p className="delivery-date">Mar 18</p>
                </div>
            </div>
        ),

        children: <DeliverySlots />

    },
    {
        key: "5",
        label: (
            <div>
                <div>Thu</div>
                <div>
                    <p className="delivery-date">Mar 19</p>
                </div>
            </div>
        ),

        children: <DeliverySlots />

    },
    {
        key: "6",
        label: (
            <div>
                <div>Fri</div>
                <div>
                    <p className="delivery-date">Mar 20</p>
                </div>
            </div>
        ),
        children: <DeliverySlots />

    },
    {
        key: "7",
        label: (
            <div>
                <div>Sat</div>
                <div>
                    <p className="delivery-date">March 21</p>
                </div>
            </div>
        ),
        children: <DeliverySlots />

    },

    {
        key: "8",
        label: (
            <div>
                <div>Sun</div>
                <div>
                    <p className="delivery-date">March 22</p>
                </div>
            </div>
        ),
        children: <DeliverySlots />

    }
];

export default dates