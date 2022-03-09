import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import { GiSteak } from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import { FaPagelines } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa";
// import platelogo from '../platelogo.png';

export const SidebarData = [
{
	title: "Protein Based",
	path: "/proteinrecipes",
	// icon: <AiIcons.AiFillHome />,
	icon: <GiSteak/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	// subNav: [
	// {
	// 	title: "Low Calorie",
	// 	path: "/proteinrecipes/lowcalorie",
	// 	icon: <GiSteak/>,
	// 	// icon: <IoIcons.IoIosPaper />,
	// 	// icon: <platelogo/>,
	// },
	// {
	// 	title: "High Calorie",
	// 	path: "/proteinrecipes/highcalorie",
	// 	// icon: <IoIcons.IoIosPaper />,
	// 	// icon: <platelogo/>,
	// 	icon: <GiSteak/>,
	// 	cName: "sub-nav",
	// }
	// ],
},
{
	title: "Vegan",
	path: "/veganrecipes",
	// icon: <IoIcons.IoIosPaper />,
	icon: <FaPagelines/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	// subNav: [
	// {
	// 	title: "Low Calorie",
	// 	path: "/veganrecipes/lowcal",
	// 	icon: <FaPagelines/>,
	// 	// icon: <IoIcons.IoIosPaper />,
	// 	// icon: <img src={platelogo} alt="platelogo"/>,
	// 	cName: "sub-nav",
	// },
	// {
	// 	title: "High Calorie",
	// 	path: "/veganrecipes/highcal",
	// 	// icon: <IoIcons.IoIosPaper />,
	// 	icon: <FaPagelines/>,
	// 	// icon: <img src={platelogo} alt="platelogo"/>,
	// 	cName: "sub-nav",
	// }
	// ],
},
{
	title: "Vegetarian",
	path: "/vegetarianrecipes",
	// icon: <FaIcons.FaEnvelopeOpenText />,
	icon: <FaCarrot/>,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	// subNav: [
	// {
	// 	title: "Low Calorie",
	// 	path: "/vegetarianrecipes/lowcalo",
	// 	icon: <FaCarrot/>,
	// 	// icon: <IoIcons.IoIosPaper />,
	// 	// icon: <img src={platelogo} alt="platelogo"/>,
	// },
	// {
	// 	title: "High Calorie",
	// 	path: "/vegetarianrecipes/highcalo",
	// 	icon: <FaCarrot/>,
	// 	// icon: <IoIcons.IoIosPaper />,
	// 	// icon: <img src={platelogo} alt="platelogo"/>,
	// },
	// ],
}
];
