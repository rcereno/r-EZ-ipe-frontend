import React from "react";
import { GiSteak } from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import { FaPagelines } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa";

export const SidebarData = [
{
	title: "Protein Based",
	path: "/proteinrecipes",
	icon: <GiSteak/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "Vegan",
	path: "/veganrecipes",
	icon: <FaPagelines/>,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "Vegetarian",
	path: "/vegetarianrecipes",
	icon: <FaCarrot/>,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
}
];
