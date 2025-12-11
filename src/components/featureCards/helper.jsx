import { GoClock, GoGift } from "react-icons/go";
import { IoCubeOutline } from "react-icons/io5";
import { LiaUndoAltSolid } from "react-icons/lia";

const helper = [
    {
        icon: <GoClock className="card-icon" />,
        title: "10 minute grocery now",
        description: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you."
    },

    {
        icon: <GoGift className="card-icon" />,
        title: "Best Prices & Offers",
        description: "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers."
    },

    {
        icon: <IoCubeOutline className="card-icon" />,
        title: "Wide Assortment",
        description: "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories."
    },

    {
        icon: <LiaUndoAltSolid className="card-icon" />,
        title: "Easy Returns",
        description: "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy ."
    }
]

export default helper