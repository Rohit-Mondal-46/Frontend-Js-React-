const menu = [
    {
        label: "Home",
        to: "/",
        children:null,
    },
    {
        label: "Profile",
        to: "/profile",
        children: [
            {
                label: "Details",
                to: "/profile/details",
                children: [
                    {
                        label: "Location",
                        to: "/profile/details/location",
                    },
                ],
            },
        ],
    },
    {
        label: "Settings",
        to: "/settings",
        children: [
            {
                label: "Account",
                to: "/settings/account",
            },
            {
                label: "Security",
                to: "/settings/security",
                children: [
                    {
                        label: "Login",
                        to: "/settings/security/login",
                    },
                    {
                        label: "Register",
                        to: "/settings/security/register",
                    },
                ],
            },
        ],
    },
];

export default menu;