import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const dropdownItems = [
    {
        value: "Facebook",
        label: (
            <div className='dropdown-item'>
                <FaFacebook className='dropdown-icon' />
                Facebook
            </div>
        )
    },
    {
        value: "Instagram",
        label: (
            <div className='dropdown-item'>
                <FaInstagram className='dropdown-icon' />
                Instagram
            </div>
        )
    },
    {
        value: "Twitter",
        label: (
            <div className='dropdown-item'>
                <FaTwitter className='dropdown-icon' />
                Twitter
            </div>
        )
    }
];