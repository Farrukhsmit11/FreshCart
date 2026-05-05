export const homeMenu = [
    { key: "1", label: <span><a onClick={() => navigate("/")} className="bottom-nav-links" href="#">Home default</a></span> },
    { key: "2", label: <span><a className="bottom-nav-links" href="#">Home Modern </a></span> },
    { key: "3", label: <span><a className="bottom-nav-links" href="#">Home Creative</a></span> },
    { key: "4", label: <span><a className="bottom-nav-links" href="#">Home Local Store</a></span> },
    { key: "5", label: <span><a className="bottom-nav-links" href="#">Home Minimalist</a></span> },
]

export const shopMenu = [
    { key: "1", label: <span><a className="bottom-nav-links" href="#">Shop Grid Filter</a></span> },

    { key: "2", label: <span><a className="bottom-nav-links" href="#">Shop Grid 3 column</a></span> },

    { key: "3", label: <span><a className="bottom-nav-links" href="#">Shop List -Filter</a></span> },

    { key: "4", label: <span><a className="bottom-nav-links" href="#">Shop Filter</a></span> },

    { key: "6", label: <span><a className="bottom-nav-links" href="#">Shop Wide</a></span> },

    { key: "7", label: <span><a className="bottom-nav-links" href="#">Shop Single </a></span> },

    { key: "8", label: <span><a className="bottom-nav-links" href="#">Shop Single V2 </a></span> },

    { key: "9", label: <span><a onClick={() => navigate("/shopWishlist")} className="bottom-nav-links" href="#">Shop Wishlist </a></span> },

    { key: "10", label: <span><a className="bottom-nav-links" href="#">Shop Cart </a></span> },

    { key: "11", label: <span><a onClick={() => navigate("/shopCheckout")} className="bottom-nav-links" href="#">Shop Checkout </a></span> },
]

export const pages = [
    { key: "2", label: <span className="bottom-nav-links">Blog</span> },

    { key: "3", label: <span className="bottom-nav-links">Blog Single</span> },

    { key: "4", label: <span className="bottom-nav-links">Blog</span> },

    { key: "5", label: <span className="bottom-nav-links">404 Error</span> },

    { key: "6", label: <span className="bottom-nav-links">Contact</span> }
];

export const accountInfo = [
    {
        key: "2",
        label: <a className="bottom-nav-links" onClick={() => navigate("/signIn")}>Sign In</a>
    },

    {
        key: "3",
        label: <a className="bottom-nav-links" onClick={() => navigate("/signUp")}>Sign Up</a>
    },

    {
        key: "4",
        label: <a className="bottom-nav-links" target="_blank" onClick={() => navigate("/forgotPassword")}>Forgot Password</a>
    },
]

export const content = () => {
    return <div className="popover-content">
        <a className="popover-link" href="#">Dairy Bread & Eggs</a>
        <a className="popover-link" href="#">Snack & Munchies</a>
        <a className="popover-link" href="#">Bakery & Pastry</a>
        <a className="popover-link" href="#">Fruit & Vegetables</a>
        <a className="popover-link" href="#">Cold drink & Juices</a>
        <a className="popover-link" href="#">Breakfast & Instant food</a>
        <a className="popover-link" href="#">Chicken , Meat and fish</a>
    </div>
}


export const storesData = [
    {
        key: "1",
        label: <span><a className="bottom-nav-links" href="#">Store List</a></span>
    },

    {
        key: "1",
        label: <span><a className="bottom-nav-links" href="#">Store Grid</a></span>
    },

    {
        key: "1",
        label: <span><a className="bottom-nav-links" href="#">Store Single</a></span>
    },
]