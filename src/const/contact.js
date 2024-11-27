import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const contactOption = [
    {
        id: 1,
        logo: <MdOutlineEmail />,
        option: "Email",
        info: "abdullah.dev1@gmail.com",
        address: "mailto:abdullah.dev1@gmail.com",
    },
    {
        id: 2,
        logo: <FaWhatsapp />,
        option: "Whatsapp",
        info: "+92 331 559 0956",
        address: "https://api.whatsapp.com/send?phone=923315590956",
    },
]

export default contactOption;